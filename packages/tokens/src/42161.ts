import { ChainId, ERC20Token, WETH9 } from '@pancakeswap/sdk'
import { USDT, USDC, CAKE } from './common'

export const arbitrumTokens = {
  weth: WETH9[ChainId.ARBITRUM_ONE],
  usdt: USDT[ChainId.ARBITRUM_ONE],
  usdc: USDC[ChainId.ARBITRUM_ONE],
  cake: CAKE[ChainId.ARBITRUM_ONE],
  arb: new ERC20Token(ChainId.ARBITRUM_ONE, '0x912CE59144191C1204E64559FE8253a0e49E6548', 18, 'ARB', 'Arbitrum'),
  gmx: new ERC20Token(ChainId.ARBITRUM_ONE, '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a', 18, 'GMX', 'GMX'),
  wbtc: new ERC20Token(ChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC'),
  mockA: new ERC20Token(ChainId.ARBITRUM_ONE, '0x47B2286A76acF9a99B30c8D8261EF6Eb066dafC7', 18, 'A', 'MOCK Token A'),
  alp: new ERC20Token(ChainId.ARBITRUM_ONE, '0xB3879E95a4B8e3eE570c232B19d520821F540E48', 18, 'ALP', 'ApolloX LP'),
}
