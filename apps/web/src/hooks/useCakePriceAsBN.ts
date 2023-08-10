import { ChainId } from '@pancakeswap/sdk'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import BigNumber from 'bignumber.js'
import { chainlinkOracleABI } from 'config/abi/chainlinkOracle'
import contracts from 'config/constants/contracts'
import { publicClient } from 'utils/wagmi'
import { formatUnits } from 'viem'
import useSWR from 'swr'
import { FAST_INTERVAL } from 'config/constants'

// for migration to bignumber.js to avoid breaking changes
export const useCakePriceAsBN = () => {
  const { data } = useSWR(['cakePriceAsBN'], async () => new BigNumber(await getCakePriceFromOracle()), {
    dedupingInterval: FAST_INTERVAL,
    refreshInterval: FAST_INTERVAL,
  })
  return data ?? BIG_ZERO
}

export const getCakePriceFromOracle = async () => {
  const data = await publicClient({ chainId: ChainId.BSC }).readContract({
    abi: chainlinkOracleABI,
    address: contracts.chainlinkOracleCAKE[ChainId.BSC],
    functionName: 'latestAnswer',
  })

  return formatUnits(data, 8)
}
