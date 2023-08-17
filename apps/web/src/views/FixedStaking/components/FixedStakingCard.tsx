import { useTranslation } from '@pancakeswap/localization'
import { CardBody, Flex, Heading, Tag, Box, Button, StarCircle } from '@pancakeswap/uikit'
import { StyledCard } from '@pancakeswap/uikit/src/widgets/Pool'
import CurrencyLogo from 'components/Logo/CurrencyLogo'
import BigNumber from 'bignumber.js'
import first from 'lodash/first'
import { LightGreyCard } from 'components/Card'
import Divider from 'components/Divider'
import React from 'react'

import { FixedStakingCardBody } from './FixedStakingCardBody'
import { StakedPositionSection } from './StakedPositionSection'
import { FixedStakingModal } from './FixedStakingModal'
import { InlineText } from './InlineText'
import { StakedPosition, PoolGroup } from '../type'

export function FixedStakingCard({ pool, stakedPositions }: { pool: PoolGroup; stakedPositions: StakedPosition[] }) {
  const { t } = useTranslation()

  return (
    <StyledCard>
      <Flex px="24px" pt="24px" alignItems="center" justifyContent="space-between">
        <>
          <CurrencyLogo currency={pool.token} size="56px" />
          <Box>
            <Heading color="secondary" scale="lg" textAlign="end">
              {pool.token.symbol}
            </Heading>
            {new BigNumber(first(pool.pools)?.boostDayPercent).gt(0) ? (
              <Tag outline variant="success" startIcon={<StarCircle width="18px" color="success" />}>
                vCAKE Boost
              </Tag>
            ) : null}
          </Box>
        </>
      </Flex>
      <CardBody>
        <FixedStakingCardBody pool={pool} stakedPositions={stakedPositions}>
          {(selectedPeriodIndex, setSelectedPeriodIndex) => (
            <>
              {stakedPositions.length ? (
                <>
                  <InlineText color="textSubtle" textTransform="uppercase" bold fontSize="12px">
                    {stakedPositions.length} {t('Staked Position')}
                  </InlineText>
                  <LightGreyCard mb="16px" mt="8px">
                    {stakedPositions.map((stakePosition, index) => (
                      <React.Fragment key={stakePosition.pool.poolIndex}>
                        <StakedPositionSection
                          stakePosition={stakePosition}
                          lockDayPercent={stakePosition.pool.lockDayPercent}
                          boostDayPercent={stakePosition.pool.boostDayPercent}
                          lockPeriod={stakePosition.pool.lockPeriod}
                          unlockTime={stakePosition.endLockTime}
                          stakePositionUserInfo={stakePosition.userInfo}
                          token={stakePosition.pool.token}
                          poolIndex={stakePosition.pool.poolIndex}
                          withdrawalFee={stakePosition.pool.withdrawalFee}
                          pool={pool}
                          stakedPeriods={stakedPositions.map((position) => position.pool.lockPeriod)}
                        />
                        {index < stakedPositions.length - 1 ? (
                          <Box my="16px">
                            <Divider />
                          </Box>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </LightGreyCard>
                </>
              ) : null}
              {pool?.pools?.length ? (
                <FixedStakingModal
                  setSelectedPeriodIndex={setSelectedPeriodIndex}
                  key={selectedPeriodIndex}
                  initialLockPeriod={
                    selectedPeriodIndex !== null ? pool.pools[selectedPeriodIndex].lockPeriod : undefined
                  }
                  pools={pool.pools}
                  stakingToken={pool.token}
                  stakedPositions={stakedPositions}
                >
                  {(openModal, hideStakeButton) =>
                    hideStakeButton ? null : <Button onClick={openModal}>{t('Stake')}</Button>
                  }
                </FixedStakingModal>
              ) : null}
            </>
          )}
        </FixedStakingCardBody>
      </CardBody>
    </StyledCard>
  )
}
