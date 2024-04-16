import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import BigNumber from 'bignumber.js'
import { useEffect, useMemo } from 'react'
import { Address, erc20Abi } from 'viem'
import { useAccount, useBlockNumber, useReadContract } from 'wagmi'

import { getCakeContract } from 'utils/contractHelpers'

import { useQueryClient } from '@tanstack/react-query'
import { useActiveChainId } from './useActiveChainId'

export const useCakeApprovalStatus = (spender: any) => {
  const { address: account } = useAccount()
  const queryClient = useQueryClient()
  const { chainId } = useActiveChainId()
  const { data: blockNumber } = useBlockNumber({ watch: true })
  const cakeContract = useMemo(() => (chainId ? getCakeContract(chainId) : undefined), [chainId])

  const { data, refetch, queryKey } = useReadContract<typeof erc20Abi, 'allowance', [Address, any]>({
    chainId,
    abi: cakeContract?.abi,
    address: cakeContract?.address,
    query: {
      enabled: Boolean(account && spender),
    },
    functionName: 'allowance',
    args: [account!, spender],
  })

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockNumber, refetch, queryClient, queryKey.toString()])

  return useMemo(
    () => ({
      isVaultApproved: data && data > 0,
      allowance: data ? new BigNumber(data?.toString()) : BIG_ZERO,
      setLastUpdated: refetch,
    }),
    [data, refetch],
  )
}

export default useCakeApprovalStatus
