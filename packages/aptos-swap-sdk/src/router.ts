import { Percent, TradeType } from '@pancakeswap/swap-sdk-core'
import { routerSwap, routerAddLiquidity, routerRemoveLiquidity } from './generated/swap'
import { Trade } from './trade'
import { Currency } from './currency'

export interface TradeOptions {
  /**
   * How much the execution price is allowed to move unfavorably from the trade execution price.
   */
  allowedSlippage: Percent
  // /**
  //  * How long the swap is valid until it expires, in seconds.
  //  * This will be used to produce a `deadline` parameter which is computed from when the swap call parameters
  //  * are generated.
  //  */
  // ttl: number
  // /**
  //  * The account that should receive the output of the swap.
  //  */
  // recipient: string

  /**
   * Whether any of the tokens in the path are fee on transfer tokens, which should be handled with special methods
   */
  feeOnTransfer?: boolean
}

export abstract class AptosSwapRouter {
  public static swapCallParameters(trade: Trade<Currency, Currency, TradeType>, options: TradeOptions) {
    const amountIn = trade.maximumAmountIn(options.allowedSlippage).quotient.toString()
    const amountOut = trade.minimumAmountOut(options.allowedSlippage).quotient.toString()
    const [inputAddress, outputAddress] = [trade.route.input.wrapped.address, trade.route.output.wrapped.address]

    const [xAddress, yAddress] = [inputAddress, outputAddress]
    return routerSwap([amountIn, amountOut], [xAddress, yAddress])
  }

  // eslint-disable-next-line camelcase
  public static unstable_addLiquidityParameters(amountX: string, amountY: string, addressX: string, addressY: string) {
    return routerAddLiquidity([amountX, amountY], [addressX, addressY])
  }

  // eslint-disable-next-line camelcase
  public static unstable_removeLiquidityParameters(
    liquidityAmount: string,
    minAmountX: string,
    minAmountY: string,
    addressX: string,
    addressY: string
  ) {
    return routerRemoveLiquidity([liquidityAmount, minAmountX, minAmountY], [addressX, addressY])
  }
}
