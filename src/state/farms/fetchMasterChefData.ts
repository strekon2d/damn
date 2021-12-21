import masterchefABI from 'config/abi/masterchef.json'
import { multicallv2 } from 'utils/multicall'
import { SerializedFarmConfig } from '../../config/constants/types'
import { SerializedFarm } from '../types'
import { getMasterChefAddress } from '../../utils/addressHelpers'

const fetchMasterChefFarmCalls = (farm: SerializedFarm) => {
  const { pid } = farm
  return pid || pid === 0
    ? [
        {
          address: getMasterChefAddress(),
          name: 'poolInfo',
          params: [pid],
        },
        {
          address: getMasterChefAddress(),
          name: 'totalAllocPoint',
        },
      ]
    : [null, null]
}

export const fetchMasterChefData = async (farms: SerializedFarmConfig[]): Promise<any[]> => {
  const masterChefCalls = farms.map((farm) => fetchMasterChefFarmCalls(farm))
  const chunkSize = masterChefCalls.flatMap((masterChefCall) => masterChefCall).length / farms.length
  const masterChefAggregatedCalls = masterChefCalls
    .filter((masterChefCall) => {
      return masterChefCall[0] !== null && masterChefCall[1] !== null
    })
    .flatMap((masterChefCall) => masterChefCall)
  const masterChefMultiCallResult = await multicallv2(masterchefABI, masterChefAggregatedCalls)
  const masterChefChunkedResultRaw = masterChefMultiCallResult.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize)

    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
  let masterChefChunkedResultCounter = 0
  return masterChefCalls.map((masterChefCall) => {
    if (masterChefCall[0] === null && masterChefCall[1] === null) {
      return [null, null]
    }
    const data = masterChefChunkedResultRaw[masterChefChunkedResultCounter]
    masterChefChunkedResultCounter++
    return data
  })
}
