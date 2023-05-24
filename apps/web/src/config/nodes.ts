import { ChainId } from '@pancakeswap/sdk'
import { arbitrum, polygonZkEvm, zkSync, zkSyncTestnet } from 'wagmi/chains'
import { getNodeRealUrlV2 } from 'utils/nodeReal'

export const SERVER_NODES = {
  [ChainId.BSC]: [
    process.env.NEXT_PUBLIC_NODE_PRODUCTION,
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed1.binance.org',
  ].filter(Boolean),
  [ChainId.BSC_TESTNET]: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  [ChainId.ETHEREUM]: [
    getNodeRealUrlV2(ChainId.ETHEREUM, process.env.SERVER_NODE_REAL_API_ETH),
    'https://eth.llamarpc.com',
    'https://cloudflare-eth.com',
  ],
  [ChainId.GOERLI]: [
    getNodeRealUrlV2(ChainId.GOERLI, process.env.SERVER_NODE_REAL_API_GOERLI),
    'https://eth-goerli.public.blastapi.io',
  ].filter(Boolean),
  [ChainId.ARBITRUM_ONE]: arbitrum.rpcUrls.public.http,
  [ChainId.POLYGON_ZKEVM]: polygonZkEvm.rpcUrls.public.http,
  [ChainId.ZKSYNC]: zkSync.rpcUrls.public.http,
  [ChainId.ZKSYNC_TESTNET]: zkSyncTestnet.rpcUrls.public.http,
  [ChainId.LINEA_TESTNET]: [
    'https://consensys-zkevm-goerli-prealpha.infura.io/v3/93e8a17747e34ec0ac9a554c1b403965',
    'https://linea-testnet.rpc.thirdweb.com',
    'https://rpc.goerli.linea.build',
  ],
} satisfies Record<ChainId, string[]>

export const PUBLIC_NODES = {
  [ChainId.BSC]: [
    process.env.NEXT_PUBLIC_NODE_PRODUCTION,
    getNodeRealUrlV2(ChainId.BSC, process.env.NEXT_PUBLIC_NODE_REAL_API_ETH),
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed1.binance.org',
  ].filter(Boolean),
  [ChainId.BSC_TESTNET]: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  [ChainId.ETHEREUM]: [
    getNodeRealUrlV2(ChainId.ETHEREUM, process.env.NEXT_PUBLIC_NODE_REAL_API_ETH),
    'https://eth.llamarpc.com',
    'https://cloudflare-eth.com',
  ].filter(Boolean),
  [ChainId.GOERLI]: [
    getNodeRealUrlV2(ChainId.GOERLI, process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI),
    'https://eth-goerli.public.blastapi.io',
  ].filter(Boolean),
  [ChainId.ARBITRUM_ONE]: arbitrum.rpcUrls.public.http,
  [ChainId.POLYGON_ZKEVM]: polygonZkEvm.rpcUrls.public.http,
  [ChainId.ZKSYNC]: zkSync.rpcUrls.public.http,
  [ChainId.ZKSYNC_TESTNET]: zkSyncTestnet.rpcUrls.public.http,
  [ChainId.LINEA_TESTNET]: [
    'https://consensys-zkevm-goerli-prealpha.infura.io/v3/93e8a17747e34ec0ac9a554c1b403965',
    'https://linea-testnet.rpc.thirdweb.com',
    'https://rpc.goerli.linea.build',
  ],
} satisfies Record<ChainId, string[]>
