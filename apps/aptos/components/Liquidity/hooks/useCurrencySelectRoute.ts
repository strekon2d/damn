import { Currency } from '@pancakeswap/aptos-swap-sdk'
import { APTOS_COIN } from '@pancakeswap/awgmi'
import { useCurrency } from 'hooks/Tokens'
import useNativeCurrency from 'hooks/useNativeCurrency'
import { useRouter } from 'next/router'
import { createContext, useCallback, useMemo } from 'react'
import currencyId from 'utils/currencyId'
import _noop from 'lodash/noop'

export interface CurrencySelectorValue {
  currencyA: Currency | undefined
  currencyB: Currency | undefined
  handleCurrencyASelect: (currency: Currency) => void
  handleCurrencyBSelect: (currency: Currency) => void
}

export const CurrencySelectorContext = createContext<CurrencySelectorValue>({
  currencyA: undefined,
  currencyB: undefined,
  handleCurrencyASelect: _noop,
  handleCurrencyBSelect: _noop,
})

export default function useCurrencySelectRoute(defaultCurrencies?: string[]): CurrencySelectorValue {
  const router = useRouter()

  const [currencyIdA, currencyIdB] = router.query.currency || defaultCurrencies || []

  const currencyA = useCurrency(currencyIdA)
  const currencyB = useCurrency(currencyIdB)

  const handleCurrencyASelect = useCallback(
    (currencyA_: Currency) => {
      const newCurrencyIdA = currencyId(currencyA_)
      if (newCurrencyIdA === currencyIdB) {
        router.replace(`/add/${currencyIdB}/${currencyIdA}`, undefined, { shallow: true })
      } else if (currencyIdB) {
        router.replace(`/add/${newCurrencyIdA}/${currencyIdB}`, undefined, { shallow: true })
      } else {
        router.replace(`/add/${newCurrencyIdA}`, undefined, { shallow: true })
      }
    },
    [currencyIdB, router, currencyIdA],
  )
  const handleCurrencyBSelect = useCallback(
    (currencyB_: Currency) => {
      const newCurrencyIdB = currencyId(currencyB_)
      if (currencyIdA === newCurrencyIdB) {
        if (currencyIdB) {
          router.replace(`/add/${currencyIdB}/${newCurrencyIdB}`, undefined, { shallow: true })
        } else {
          router.replace(`/add/${newCurrencyIdB}`, undefined, { shallow: true })
        }
      } else {
        router.replace(`/add/${currencyIdA || APTOS_COIN}/${newCurrencyIdB}`, undefined, { shallow: true })
      }
    },
    [currencyIdA, router, currencyIdB],
  )

  return useMemo(
    () => ({
      currencyA,
      currencyB,
      handleCurrencyASelect,
      handleCurrencyBSelect,
    }),
    [currencyA, currencyB, handleCurrencyASelect, handleCurrencyBSelect],
  )
}
