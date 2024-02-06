import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import BigNumber from 'bignumber.js'
import { unwrappedEth } from 'config/abi/unwrappedEth'
import { UNWRAPPED_ETH_ADDRESS } from 'config/constants/liquidStaking'
import dayjs from 'dayjs'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMemo } from 'react'
import { Address, useContractRead } from 'wagmi'

interface UserWithdrawRequest {
  allocated: boolean
  claimTime: BigNumber
  ethAmount: BigNumber
  recipient: Address
  triggerTime: BigNumber
  wbethAmount: BigNumber
}

export function useReadWithdrawRequestInfo():
  | {
      latestTriggerTime: BigNumber
      totalEthAmountPending: BigNumber
      totalEthAmountClaimable: BigNumber
      totalRequest: number
      claimableIndexes: number[]
    }
  | undefined {
  const { account, chainId } = useActiveWeb3React()

  const { data } = useContractRead({
    chainId,
    abi: unwrappedEth,
    address: UNWRAPPED_ETH_ADDRESS,
    functionName: 'getUserWithdrawRequests',
    args: [account || '0x'],
    enabled: !!account,
    watch: true,
  })

  const currentTime = dayjs().unix()

  return useMemo(
    () =>
      !Array.isArray(data)
        ? undefined
        : {
            ...(data as UserWithdrawRequest[])
              .filter((d) => d.allocated)
              .reduce(
                (last, d, currentIndex) => {
                  const triggerTime = new BigNumber(d.triggerTime)

                  const claimable = currentTime > dayjs.unix(triggerTime.toNumber()).add(7, 'day').unix()

                  return claimable
                    ? {
                        ...last,
                        latestTriggerTime: triggerTime,
                        totalEthAmountClaimable: last.totalEthAmountClaimable.plus(d.ethAmount),
                        claimableIndexes: [...last.claimableIndexes, currentIndex],
                      }
                    : {
                        ...last,
                        latestTriggerTime: triggerTime,
                        totalEthAmountPending: last.totalEthAmountPending.plus(d.ethAmount),
                      }
                },
                {
                  latestTriggerTime: BIG_ZERO,
                  totalEthAmountPending: BIG_ZERO,
                  totalEthAmountClaimable: BIG_ZERO,
                  claimableIndexes: [] as number[],
                },
              ),
            totalRequest: data.filter((d) => d.allocated).length,
          },
    [currentTime, data],
  )
}
