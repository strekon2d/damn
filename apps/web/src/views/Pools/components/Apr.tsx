import { Pool } from '@pancakeswap/widgets-internal'
import { vaultPoolConfig } from 'config/constants/pools'
import { useCurrentBlock } from 'state/block/hooks'
import { getPoolBlockInfo } from 'views/Pools/helpers'
import { Token } from '@pancakeswap/sdk'
import { useAccount } from 'wagmi'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useBoostedPoolApr } from 'views/Pools/hooks/useBoostedPoolApr'

const withShownApr = (AprComp) => (props) => {
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()

  const currentBlock = useCurrentBlock()

  const { shouldShowBlockCountdown, hasPoolStarted } = getPoolBlockInfo(props.pool, currentBlock)

  const autoCompoundFrequency = vaultPoolConfig[props.pool.vaultKey]?.autoCompoundFrequency ?? 0

  const boostedApr = useBoostedPoolApr({
    chainId,
    sousId: props.pool.sousId,
    contractAddress: props.pool.contractAddress,
  })

  return (
    <AprComp
      {...props}
      shouldShowApr={hasPoolStarted || !shouldShowBlockCountdown}
      account={account}
      boostedApr={boostedApr}
      autoCompoundFrequency={autoCompoundFrequency}
    />
  )
}

export default withShownApr(Pool.Apr<Token>)
