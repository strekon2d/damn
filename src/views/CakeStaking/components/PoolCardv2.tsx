import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@pancakeswap-libs/uikit'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import HarvestButton from './HarvestButton'
import { AddIcon } from 'components/icons'
import Label from 'components/Label'
import { COMMUNITY_FARMS, BLOCKS_PER_YEAR } from 'sushi/lib/constants'

import { useSousAllowance } from 'hooks/useAllowance'
import { useSousApprove } from 'hooks/useApprove'
import { useSousEarnings, useSousLeftBlocks } from 'hooks/useEarnings'
import useModal from 'hooks/useModal'
import { useSousStake } from 'hooks/useStake'
import useSushi from 'hooks/useSushi'
import {
  useSousStakedBalance,
  useSousTotalStaked,
} from 'hooks/useStakedBalance'
import useTokenBalance from 'hooks/useTokenBalance'
import { useSousUnstake } from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import { useSousReward } from 'hooks/useReward'
import { getSyrupAddress } from 'sushi/utils'

import Balance from './Balance'
import SmallValue from './Value'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import CardTitle from './CardTitle'
import CardTokenImg from './CardTokenImg'
import Card from './Card'

import WalletProviderModal from 'components/WalletProviderModal'
import { TranslateString } from 'utils/translateTextHelpers'
import CardFooter from './CardFooter'

interface HarvestProps {
  syrup: Contract
  tokenName: string
  sousId: number
  projectLink: string
  harvest: boolean
  tokenPerBlock: string
  cakePrice: BigNumber
  tokenPrice: BigNumber
  community?: boolean
}

/**
 * Temporary code
 *
 * 1. Mark this pool as finished
 * 2. Do not let people stake
 *
 * TODO - when all CAKE is unstaked we can remove this
 */
const SYRUPIDS = [5, 6, 3, 1]

const PoolCardv2: React.FC<HarvestProps> = ({
  syrup,
  sousId,
  tokenName,
  projectLink,
  harvest,
  cakePrice,
  tokenPrice,
  tokenPerBlock,
  community,
}) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { account } = useWallet()
  const allowance = useSousAllowance(syrup, sousId)
  const { onApprove } = useSousApprove(syrup, sousId)
  const { isFinished, farmStart, blocksRemaining } = useSousLeftBlocks(sousId)
  const tokenBalance = useTokenBalance(syrup.options.address)
  const stakedBalance = useSousStakedBalance(sousId)
  const totalStaked = useSousTotalStaked(sousId)
  const earnings = useSousEarnings(sousId)

  const sushi = useSushi()
  const syrupBalance = useTokenBalance(getSyrupAddress(sushi))

  const { onStake } = useSousStake(sousId)
  const { onUnstake } = useSousUnstake(sousId)

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useSousReward(sousId)
  const isCommunityFarm = COMMUNITY_FARMS.includes(tokenName)

  const apy = useMemo(() => {
    if (!harvest || cakePrice.isLessThanOrEqualTo(0) || isCommunityFarm)
      return '-'
    const a = tokenPrice.times(BLOCKS_PER_YEAR).times(tokenPerBlock)
    const b = cakePrice.times(getBalanceNumber(totalStaked))

    return `${a.div(b).times(100).toFixed(2)}%`
  }, [cakePrice, harvest, tokenPerBlock, tokenPrice, totalStaked])

  const isUnstaked =
    account && !allowance.toNumber() && stakedBalance.toNumber() === 0

  // TODO - Remove this when pool removed
  const isOldSyrup = SYRUPIDS.includes(sousId)
  const isReallyFinished = isFinished || isOldSyrup
  const isCardActive = isReallyFinished && isUnstaked

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={isOldSyrup ? 'SYRUP' : 'CAKE'}
    />,
  )

  const max =
    sousId === 0
      ? stakedBalance.gt(syrupBalance)
        ? syrupBalance
        : stakedBalance
      : stakedBalance

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={max}
      onConfirm={onUnstake}
      tokenName={isOldSyrup ? 'SYRUP' : 'CAKE'}
    />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove, setRequestedApproval])

  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )
  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  return (
    <Card isActive={isCardActive} isFinished={isReallyFinished && sousId !== 0}>
      {isReallyFinished && sousId !== 0 && <PoolFinishedSash />}
      <div style={{ padding: '24px' }}>
        <CardTitle isFinished={isReallyFinished && sousId !== 0}>
          {isOldSyrup && '[OLD]'} {tokenName} {TranslateString(348, 'Pool')}
        </CardTitle>
        <div
          style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}
        >
          <div style={{ flex: 1 }}>
            <CardTokenImg
              src={`/images/tokens/${tokenName}.png`}
              alt={tokenName}
            />
          </div>
          {account && harvest && !isOldSyrup && (
            <HarvestButton
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          )}
        </div>
        {!isOldSyrup ? (
          <Balance
            value={
              tokenName === 'CTK'
                ? getBalanceNumber(earnings, 6)
                : getBalanceNumber(earnings)
            }
            isFinished={isReallyFinished}
          />
        ) : (
          <CardTitle isFinished={true}>UNSTAKE NOW</CardTitle>
        )}
        <Label
          isFinished={isReallyFinished && sousId !== 0}
          text={TranslateString(330, `${tokenName} earned`)}
        />
        <StyledCardActions>
          {!account && (
            <div style={{ flex: 1 }}>
              <Button onClick={handleUnlockClick} size="md">
                {TranslateString(292, 'Unlock Wallet')}
              </Button>
            </div>
          )}
          {account &&
            (isUnstaked && !isOldSyrup ? (
              <div style={{ flex: 1 }}>
                <Button
                  disabled={isFinished || requestedApproval}
                  onClick={handleApprove}
                >
                  {isOldSyrup ? 'Approve SYRUP' : 'Approve CAKE'}
                </Button>
              </div>
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0)) || pendingTx}
                  onClick={
                    isOldSyrup
                      ? async () => {
                          setPendingTx(true)
                          await onUnstake('0')
                          setPendingTx(false)
                        }
                      : onPresentWithdraw
                  }
                >
                  {isOldSyrup ? 'Unstake SYRUP' : 'Unstake CAKE'}
                </Button>
                <StyledActionSpacer />
                {!isOldSyrup && (
                  <Button
                    disabled={isReallyFinished && sousId !== 0}
                    onClick={onPresentDeposit}
                  >
                    <AddIcon />
                  </Button>
                )}
              </>
            ))}
        </StyledCardActions>
        <StyledDetails>
          <div style={{ flex: 1 }}>{TranslateString(352, 'APY')}:</div>
          {isFinished || isOldSyrup ? (
            '-'
          ) : (
            <SmallValue isFinished={isReallyFinished} value={apy} />
          )}
        </StyledDetails>
        <StyledDetails>
          <div style={{ flex: 1 }}>
            <span role="img" aria-label="syrup">
              🍯{' '}
            </span>
            Your Stake:
          </div>
          <SmallValue
            isFinished={isReallyFinished}
            value={getBalanceNumber(stakedBalance)}
          />
        </StyledDetails>
      </div>
      <CardFooter
        projectLink={projectLink}
        totalStaked={totalStaked}
        blocksRemaining={blocksRemaining}
        isFinished={isReallyFinished}
        farmStart={farmStart}
        community={isCommunityFarm}
      />
    </Card>
  )
}

const PoolFinishedSash = styled.div`
  background-image: url('/images/pool-finished-sash.svg');
  background-position: top right;
  background-repeat: not-repeat;
  height: 135px;
  position: absolute;
  right: -24px;
  top: -24px;
  width: 135px;
`

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  display: flex;
  font-size: 14px;
`

export default PoolCardv2
