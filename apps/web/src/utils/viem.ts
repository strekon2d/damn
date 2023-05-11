import { ChainId } from '@pancakeswap/sdk'
import { OnChainProvider } from '@pancakeswap/smart-router/evm'
import { CHAINS } from 'config/chains'
import { PUBLIC_NODES } from 'config/nodes'
import { createPublicClient, http } from 'viem'

export const viemClients = CHAINS.reduce((prev, cur) => {
  return {
    ...prev,
    [cur.id]: createPublicClient({
      chain: cur,
      transport: http(PUBLIC_NODES[cur.id], {
        timeout: 15_000,
      }),
    }),
  }
}, {} as Record<ChainId, ReturnType<typeof createPublicClient>>)

// @ts-ignore
export const getViemClients: OnChainProvider = ({ chainId }: { chainId?: ChainId }) => {
  return viemClients[chainId]
}
