import { FormatTypes } from '@ethersproject/abi'
import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { PositionDetails } from '@pancakeswap/farms'
import { useMasterchefV3, useV3NFTPositionManagerContract } from 'hooks/useContract'
import { useMemo } from 'react'
import { useContractRead, useContractReads } from 'wagmi'

interface UseV3PositionsResults {
  loading: boolean
  positions: PositionDetails[] | undefined
}

interface UseV3PositionResults {
  loading: boolean
  position: PositionDetails | undefined
}

export function useV3PositionsFromTokenIds(tokenIds: BigNumber[] | undefined): UseV3PositionsResults {
  const positionManager = useV3NFTPositionManagerContract()

  const inputs = useMemo(
    () =>
      tokenIds
        ? tokenIds.map((tokenId) => ({
            abi: positionManager.interface.format(FormatTypes.json) as any,
            address: positionManager.address as `0x${string}`,
            functionName: 'positions',
            args: [tokenId],
          }))
        : [],
    [positionManager.address, positionManager.interface, tokenIds],
  )
  const { isLoading, data: positions = [] } = useContractReads<any, any, any>({
    contracts: inputs,
    watch: true,
    allowFailure: true,
    enabled: !!inputs.length,
    keepPreviousData: true,
  })

  return {
    loading: isLoading,
    positions: useMemo(
      () =>
        (positions as Omit<PositionDetails, 'tokenId'>[])?.map((position, i) => ({
          ...position,
          tokenId: inputs?.[i]?.args[0],
        })),
      [inputs, positions],
    ),
  }
}

export function useV3PositionFromTokenId(tokenId: BigNumber | undefined): UseV3PositionResults {
  const position = useV3PositionsFromTokenIds(tokenId ? [tokenId] : undefined)

  return useMemo(
    () => ({
      loading: position.loading,
      position: position.positions?.[0],
    }),
    [position.loading, position.positions],
  )
}

export function useV3TokenIdsByAccount(
  contract: Contract,
  account: string | null | undefined,
): { tokenIds: BigNumber[]; loading: boolean } {
  const { isLoading: balanceLoading, data: accountBalance_ } = useContractRead<any, any, BigNumber>({
    abi: contract.interface.format(FormatTypes.json) as any,
    address: contract.address as `0x${string}`,
    args: [account ?? undefined],
    functionName: 'balanceOf',
    enabled: !!account,
    watch: true,
  })

  // we don't expect any account balance to ever exceed the bounds of max safe int
  const accountBalance: number | undefined = accountBalance_?.toNumber()

  const tokenIdsArgs = useMemo(() => {
    if (accountBalance && account) {
      const tokenRequests = []
      for (let i = 0; i < accountBalance; i++) {
        tokenRequests.push({
          abi: contract.interface.format(FormatTypes.json) as any,
          address: contract.address as `0x${string}`,
          functionName: 'tokenOfOwnerByIndex',
          args: [account, i],
        })
      }
      return tokenRequests
    }
    return []
  }, [account, accountBalance, contract.address, contract.interface])

  const { isLoading: someTokenIdsLoading, data: tokenIds = [] } = useContractReads({
    contracts: tokenIdsArgs,
    watch: true,
    allowFailure: true,
    enabled: !!tokenIdsArgs.length,
  })

  return {
    tokenIds: useMemo(() => tokenIds.filter(Boolean) as BigNumber[], [tokenIds]),
    loading: someTokenIdsLoading || balanceLoading,
  }
}

export function useV3Positions(account: string | null | undefined): UseV3PositionsResults {
  const positionManager = useV3NFTPositionManagerContract()
  const masterchefV3 = useMasterchefV3()

  const { tokenIds, loading: tokenIdsLoading } = useV3TokenIdsByAccount(positionManager, account)

  const { tokenIds: stakedTokenIds } = useV3TokenIdsByAccount(masterchefV3, account)

  const totalTokenIds = useMemo(() => [...stakedTokenIds, ...tokenIds], [stakedTokenIds, tokenIds])

  const { positions, loading: positionsLoading } = useV3PositionsFromTokenIds(totalTokenIds)

  return useMemo(
    () => ({
      loading: tokenIdsLoading || positionsLoading,
      positions: positions?.map((position) => ({
        ...position,
        isStaked: Boolean(stakedTokenIds?.find((p) => p.eq(position.tokenId))),
      })),
    }),
    [positions, positionsLoading, stakedTokenIds, tokenIdsLoading],
  )
}
