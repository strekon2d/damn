import { describe, it } from 'vitest'
import { FeeAmount, Pool } from '@pancakeswap/v3-sdk'
import { bscTokens } from '@pancakeswap/tokens'
import { getFarmsPrices } from './fetchFarmsV3'
import { FarmV3Data } from './types'

describe('fetchFarmsV3', () => {
  it('getFarmsPrices', async () => {
    const farmsData: FarmV3Data[] = [
      // CAKE Pair
      {
        pid: 1,
        lpSymbol: 'WBNB-CAKE LP',
        lpAddress: Pool.getAddress(bscTokens.wbnb, bscTokens.cake, FeeAmount.MEDIUM),
        token: bscTokens.wbnb,
        quoteToken: bscTokens.cake,
        feeAmount: FeeAmount.MEDIUM,
        multiplier: '',
        poolWeight: '',
        lmPool: '',
        lmPoolLiquidity: '',
        tokenPriceVsQuote: '2',
      },
      // CAKE Pair
      {
        pid: 2,
        lpSymbol: 'SUSHI-CAKE LP',
        lpAddress: '',
        token: bscTokens.sushi,
        quoteToken: bscTokens.cake,
        feeAmount: FeeAmount.LOWEST,
        multiplier: '',
        poolWeight: '',
        lmPool: '',
        lmPoolLiquidity: '',
        tokenPriceVsQuote: '0.1',
      },
      // Common price
      {
        pid: 3,
        lpSymbol: 'USDT-BUSD LP',
        lpAddress: '',
        token: bscTokens.usdt,
        quoteToken: bscTokens.busd,
        feeAmount: FeeAmount.LOW,
        multiplier: '',
        poolWeight: '',
        lmPool: '',
        lmPoolLiquidity: '',
        tokenPriceVsQuote: '1',
      },
      // no common price but has common token to busd
      {
        pid: 4,
        lpSymbol: 'BUSD-BTCB LP',
        lpAddress: '',
        token: bscTokens.busd,
        quoteToken: bscTokens.btcb,
        feeAmount: FeeAmount.LOW,
        multiplier: '',
        poolWeight: '',
        lmPool: '',
        lmPoolLiquidity: '',
        tokenPriceVsQuote: '0.0003333333',
      },
      // no common price and no common token to busd
      {
        pid: 5,
        lpSymbol: 'DAI-BUSD LP',
        lpAddress: '',
        token: bscTokens.dai,
        quoteToken: bscTokens.busd,
        feeAmount: FeeAmount.LOW,
        multiplier: '',
        poolWeight: '',
        lmPool: '',
        lmPoolLiquidity: '',
        tokenPriceVsQuote: '1.1',
      },
    ]
    const commonPrice = {
      [bscTokens.usdt.address]: '1',
    }

    const cakePrice = '40'

    expect(getFarmsPrices(farmsData, cakePrice, commonPrice)).toMatchInlineSnapshot(`
      [
        {
          "feeAmount": 2500,
          "lmPool": "",
          "lmPoolLiquidity": "",
          "lpAddress": "0x6b151cAd2E79B6B5Ed3e54D915699D53ab04386c",
          "lpSymbol": "WBNB-CAKE LP",
          "multiplier": "",
          "pid": 1,
          "poolWeight": "",
          "quoteToken": ERC20Token {
            "address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "PancakeSwap Token",
            "projectLink": "https://pancakeswap.finance/",
            "symbol": "CAKE",
          },
          "quoteTokenPriceBusd": "40.0",
          "token": ERC20Token {
            "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "Wrapped BNB",
            "projectLink": "https://www.binance.org",
            "symbol": "WBNB",
          },
          "tokenPriceBusd": "80.0",
          "tokenPriceVsQuote": "2",
        },
        {
          "feeAmount": 100,
          "lmPool": "",
          "lmPoolLiquidity": "",
          "lpAddress": "",
          "lpSymbol": "SUSHI-CAKE LP",
          "multiplier": "",
          "pid": 2,
          "poolWeight": "",
          "quoteToken": ERC20Token {
            "address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "PancakeSwap Token",
            "projectLink": "https://pancakeswap.finance/",
            "symbol": "CAKE",
          },
          "quoteTokenPriceBusd": "40.0",
          "token": ERC20Token {
            "address": "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "Binance-Peg SushiToken",
            "projectLink": "https://sushi.com/",
            "symbol": "SUSHI",
          },
          "tokenPriceBusd": "4.0",
          "tokenPriceVsQuote": "0.1",
        },
        {
          "feeAmount": 500,
          "lmPool": "",
          "lmPoolLiquidity": "",
          "lpAddress": "",
          "lpSymbol": "USDT-BUSD LP",
          "multiplier": "",
          "pid": 3,
          "poolWeight": "",
          "quoteToken": ERC20Token {
            "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "Binance USD",
            "projectLink": "https://www.paxos.com/busd/",
            "symbol": "BUSD",
          },
          "quoteTokenPriceBusd": "1.0",
          "token": ERC20Token {
            "address": "0x55d398326f99059fF775485246999027B3197955",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "Tether USD",
            "projectLink": "https://tether.to/",
            "symbol": "USDT",
          },
          "tokenPriceBusd": "1.0",
          "tokenPriceVsQuote": "1",
        },
        {
          "feeAmount": 500,
          "lmPool": "",
          "lmPoolLiquidity": "",
          "lpAddress": "",
          "lpSymbol": "BUSD-BTCB LP",
          "multiplier": "",
          "pid": 4,
          "poolWeight": "",
          "quoteToken": ERC20Token {
            "address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "Binance BTC",
            "projectLink": "https://bitcoin.org/",
            "symbol": "BTCB",
          },
          "quoteTokenPriceBusd": "3000.000300000030000003",
          "token": ERC20Token {
            "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "Binance USD",
            "projectLink": "https://www.paxos.com/busd/",
            "symbol": "BUSD",
          },
          "tokenPriceBusd": "1.0",
          "tokenPriceVsQuote": "0.0003333333",
        },
        {
          "feeAmount": 500,
          "lmPool": "",
          "lmPoolLiquidity": "",
          "lpAddress": "",
          "lpSymbol": "DAI-BUSD LP",
          "multiplier": "",
          "pid": 5,
          "poolWeight": "",
          "quoteToken": ERC20Token {
            "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "Binance USD",
            "projectLink": "https://www.paxos.com/busd/",
            "symbol": "BUSD",
          },
          "quoteTokenPriceBusd": "1.0",
          "token": ERC20Token {
            "address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
            "chainId": 56,
            "decimals": 18,
            "isNative": false,
            "isToken": true,
            "name": "Dai Stablecoin",
            "projectLink": "https://www.makerdao.com/",
            "symbol": "DAI",
          },
          "tokenPriceBusd": "1.1",
          "tokenPriceVsQuote": "1.1",
        },
      ]
    `)
  })
})
