import { ChainId, Coin } from '@pancakeswap/aptos-swap-sdk'
import { APT, CAKE } from '../../coins'

export const mainnetTokens = {
  apt: APT[ChainId.MAINNET],
  cake: CAKE[ChainId.MAINNET],
  lzusdc: new Coin(
    ChainId.MAINNET,
    '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC',
    6,
    'lzUSDC',
    'LayerZero - USDC',
  ),
  lzusdt: new Coin(
    ChainId.MAINNET,
    '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT',
    6,
    'lzUSDT',
    'LayerZero - Tether USD',
  ),
  lzweth: new Coin(
    ChainId.MAINNET,
    '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH',
    6,
    'lzWETH',
    'LayerZero - Wrapped Ether',
  ),
  ceusdc: new Coin(
    ChainId.MAINNET,
    '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin',
    6,
    'USDC',
    'Celer - USD Coin',
  ),
  ceusdt: new Coin(
    ChainId.MAINNET,
    '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdtCoin',
    6,
    'ceUSDT',
    'Celer - Tether USD',
  ),
  ceweth: new Coin(
    ChainId.MAINNET,
    '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::WethCoin',
    8,
    'ceWETH',
    'Celer - Wrapped Ether',
  ),
  cebnb: new Coin(
    ChainId.MAINNET,
    '0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::BnbCoin',
    8,
    'ceBNB',
    'Celer - Binance Coin',
  ),
  stapt: new Coin(
    ChainId.MAINNET,
    '0xd11107bdf0d6d7040c6c0bfbdecb6545191fdf13e8d8d259952f53e1713f61b5::staked_coin::StakedAptos',
    8,
    'stAPT',
    'Ditto Staked Aptos',
    'https://www.dittofinance.io',
  ),
  whusdc: new Coin(
    ChainId.MAINNET,
    '0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T',
    6,
    'USDC',
    'Wormhole - USD Coin',
  ),
  whbusd: new Coin(
    ChainId.MAINNET,
    '0xccc9620d38c4f3991fa68a03ad98ef3735f18d04717cb75d7a1300dd8a7eed75::coin::T',
    8,
    'whBUSD',
    'Wormhole - Binance USD',
  ),
  whweth: new Coin(
    ChainId.MAINNET,
    '0xcc8a89c8dce9693d354449f1f73e60e14e347417854f029db5bc8e7454008abb::coin::T',
    8,
    'whWETH',
    'Wormhole - Wrapped Ether',
  ),
}
