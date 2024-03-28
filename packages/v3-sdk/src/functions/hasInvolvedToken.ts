import { Token } from '@pancakeswap/sdk'
import { PoolState } from './getPool'

export const hasInvolvedToken = (pool: PoolState, token: Token) => {
  return pool.token0.equals(token) || pool.token1.equals(token)
}
