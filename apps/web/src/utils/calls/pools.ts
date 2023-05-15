import { ChainId } from '@pancakeswap/sdk'
import { getPoolsConfig } from '@pancakeswap/pools'

import chunk from 'lodash/chunk'
import { viemClients } from 'utils/viem'

const ABI = [
  {
    inputs: [],
    name: 'startBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bonusEndBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const

/**
 * Returns the total number of pools that were active at a given block
 */
export const getActivePools = async (chainId: ChainId, block?: bigint | 0) => {
  const poolsConfig = getPoolsConfig(chainId)
  const eligiblePools = poolsConfig
    .filter((pool) => pool.sousId !== 0)
    .filter((pool) => pool.isFinished === false || pool.isFinished === undefined)
  const startBlockCalls = eligiblePools.map(
    ({ contractAddress }) =>
      ({
        abi: ABI,
        address: contractAddress,
        functionName: 'startBlock',
      } as const),
  )
  const endBlockCalls = eligiblePools.map(
    ({ contractAddress }) =>
      ({
        abi: ABI,
        address: contractAddress,
        functionName: 'bonusEndBlock',
      } as const),
  )

  const calls = [...startBlockCalls, ...endBlockCalls] as const
  const resultsRaw = await viemClients[chainId].multicall({
    contracts: calls,
    allowFailure: false,
  })

  const blockNumber = block || (await viemClients[chainId].getBlockNumber())

  const blockCallsRaw = chunk(resultsRaw, resultsRaw.length / 2)

  const startBlocks = blockCallsRaw[0]
  const endBlocks = blockCallsRaw[1]

  return eligiblePools.reduce((accum, poolCheck, index) => {
    const startBlock = startBlocks[index] ? startBlocks[index] : null
    const endBlock = endBlocks[index] ? endBlocks[index] : null

    if (!startBlock || !endBlock) {
      return accum
    }

    if (startBlock >= blockNumber || endBlock <= blockNumber) {
      return accum
    }

    return [...accum, poolCheck]
  }, [])
}
