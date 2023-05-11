/* eslint-disable no-param-reassign */
import { FetchStatus, FetchStatusT } from 'config/constants/types'
import { useEffect, useMemo } from 'react'
import {
  KeyedMutator,
  Middleware,
  // eslint-disable-next-line camelcase
  unstable_serialize,
} from 'swr'
import { BlockingData } from 'swr/_internal'

declare module 'swr' {
  interface SWRResponse<Data = any, Error = any, Config = any> {
    data: BlockingData<Data, Config> extends true ? Data : Data | undefined
    error: Error | undefined
    mutate: KeyedMutator<Data>
    isValidating: boolean
    isLoading: BlockingData<Data, Config> extends true ? false : boolean
    // Add global fetchStatus to SWRResponse
    status: FetchStatusT
  }
}

export const fetchStatusMiddleware: Middleware = (useSWRNext) => {
  return (key, fetcher, config) => {
    const swr = useSWRNext(key, fetcher, config)
    return Object.defineProperty(swr, 'status', {
      get() {
        let status: FetchStatusT = FetchStatus.Idle

        if (!swr.isValidating && !swr.error && !swr.data) {
          status = FetchStatus.Idle
        } else if (swr.isValidating && !swr.error && !swr.data) {
          status = FetchStatus.Fetching
        } else if (swr.data) {
          status = FetchStatus.Fetched
        } else if (swr.error && !swr.data) {
          status = FetchStatus.Failed
        }
        return status
      },
    })
  }
}

export const immutableMiddleware: Middleware = (useSWRNext) => (key, fetcher, config) => {
  config.revalidateOnFocus = false
  config.revalidateIfStale = false
  config.revalidateOnReconnect = false
  return useSWRNext(key, fetcher, config)
}

export const localStorageMiddleware: Middleware = (useSWRNext) => (key, fetcher, config) => {
  const swr = useSWRNext(key, fetcher, config)
  const { data } = swr
  const serializedKey = useMemo(() => unstable_serialize(key), [key])

  useEffect(() => {
    if (data) {
      try {
        const stringify = JSON.stringify(data)
        localStorage?.setItem(serializedKey, stringify)
      } catch (error) {
        //
      }
    }
  }, [data, serializedKey])

  let localStorageDataParsed

  if (!data && typeof window !== 'undefined') {
    const localStorageData = localStorage?.getItem(serializedKey)

    if (localStorageData) {
      try {
        localStorageDataParsed = JSON.parse(localStorageData)
      } catch (error) {
        localStorage?.removeItem(serializedKey)
      }
    }
  }

  return Object.defineProperty(swr, 'data', {
    value: data || localStorageDataParsed,
  })
}

// dev only
export const loggerMiddleware: Middleware = (useSWRNext) => {
  return (key, fetcher, config) => {
    // Add logger to the original fetcher.
    const extendedFetcher = fetcher
      ? (...args: unknown[]) => {
          console.debug('SWR Request:', key)
          return fetcher(...args)
        }
      : null

    // Execute the hook with the new fetcher.
    return useSWRNext(key, extendedFetcher, config)
  }
}
