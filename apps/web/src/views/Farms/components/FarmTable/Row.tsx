import { useEffect, useState, createElement, useRef } from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from '@pancakeswap/farms'
import {
  Flex,
  useMatchBreakpoints,
  Skeleton,
  Farm as FarmUI,
  FarmTableEarnedProps,
  FarmTableLiquidityProps,
  FarmTableMultiplierProps,
  FarmTableFarmTokenInfoProps,
  MobileColumnSchema,
  DesktopColumnSchema,
  FarmTableAmountProps,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useFarmUser } from 'state/farms/hooks'
import { useDelayedUnmount } from '@pancakeswap/hooks'
import Apr, { AprProps } from './Apr'
import Farm from './Farm'
import ActionPanel from './Actions/ActionPanel'
import BoostedApr from '../YieldBooster/components/BoostedApr'

const { FarmAuctionTag, BoostedTag, StableFarmTag } = FarmUI.Tags
const { CellLayout, Details, Multiplier, Liquidity, Earned, LpAmount } = FarmUI.FarmTable

export interface RowProps {
  apr: AprProps
  farm: FarmTableFarmTokenInfoProps
  earned: FarmTableEarnedProps
  multiplier: FarmTableMultiplierProps
  liquidity: FarmTableLiquidityProps
  details: FarmWithStakedValue
  type: 'core' | 'community'
  initialActivity?: boolean
  availableLp: FarmTableAmountProps
  stakedLp: FarmTableAmountProps
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
}

const cells = {
  apr: Apr,
  farm: Farm,
  earned: Earned,
  details: Details,
  multiplier: Multiplier,
  liquidity: Liquidity,
  availableLp: LpAmount,
  stakedLp: LpAmount,
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 14px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  }
`

const EarnedMobileCell = styled.td`
  padding: 16px 0 24px 16px;
`

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<React.PropsWithChildren<RowPropsWithLoading>> = (props) => {
  const { details, initialActivity, userDataReady } = props
  const { stakedBalance, proxy, tokenBalance } = props.details.userData
  const hasSetInitialValue = useRef(false)
  const hasStakedAmount = !!useFarmUser(details.pid).stakedBalance.toNumber()
  const [actionPanelExpanded, setActionPanelExpanded] = useState(hasStakedAmount)
  const shouldRenderChild = useDelayedUnmount(actionPanelExpanded, 300)
  const { t } = useTranslation()

  const toggleActionPanel = () => {
    setActionPanelExpanded(!actionPanelExpanded)
  }

  useEffect(() => {
    setActionPanelExpanded(hasStakedAmount)
  }, [hasStakedAmount])
  useEffect(() => {
    if (initialActivity && hasSetInitialValue.current === false) {
      setActionPanelExpanded(initialActivity)
      hasSetInitialValue.current = true
    }
  }, [initialActivity])

  const { isDesktop, isMobile } = useMatchBreakpoints()

  const isSmallerScreen = !isDesktop
  const tableSchema = isSmallerScreen ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if (!isMobile) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'type':
                return (
                  <td key={key}>
                    {userDataReady ? (
                      <CellInner style={{ width: '140px' }}>
                        {props[key] === 'community' && <FarmAuctionTag scale="sm" />}
                        {props?.details?.isStable && <StableFarmTag scale="sm" ml="6px" />}
                        {props?.details?.boosted && <BoostedTag scale="sm" ml="6px" />}
                      </CellInner>
                    ) : (
                      <Skeleton width={60} height={24} />
                    )}
                  </td>
                )
              case 'details':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelExpanded} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'apr':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t('APR')}>
                        <Apr
                          {...props.apr}
                          hideButton={isSmallerScreen}
                          strikethrough={props?.details?.boosted}
                          boosted={props?.details?.boosted}
                        />
                        {props?.details?.boosted && userDataReady ? (
                          <BoostedApr
                            lpRewardsApr={props?.apr?.lpRewardsApr}
                            apr={props?.apr?.originalValue}
                            pid={props.farm?.pid}
                            lpTotalSupply={props.details?.lpTotalSupply}
                            userBalanceInFarm={
                              stakedBalance.plus(tokenBalance).gt(0)
                                ? stakedBalance.plus(tokenBalance)
                                : proxy.stakedBalance.plus(proxy.tokenBalance)
                            }
                          />
                        ) : null}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t(tableSchema[columnIndex].label)}>
                        {createElement(cells[key], { ...props[key], userDataReady })}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
            }
          })}
        </StyledTr>
      )
    }

    return (
      <>
        <tr style={{ cursor: 'pointer' }} onClick={toggleActionPanel}>
          <FarmMobileCell colSpan={3}>
            <Flex justifyContent="space-between" alignItems="center">
              <Farm {...props.farm} />
              {props.type === 'community' ? (
                <FarmAuctionTag marginRight="16px" scale="sm" />
              ) : (
                <Flex mr="16px">
                  {props?.details?.isStable && (
                    <StableFarmTag style={{ background: 'none', verticalAlign: 'bottom' }} scale="sm" ml="4px" />
                  )}
                  {props?.details?.boosted && (
                    <BoostedTag style={{ background: 'none', verticalAlign: 'bottom' }} scale="sm" ml="4px" />
                  )}
                </Flex>
              )}
            </Flex>
          </FarmMobileCell>
        </tr>
        <StyledTr onClick={toggleActionPanel}>
          <td width="20%">
            <EarnedMobileCell>
              <CellLayout label={t('Earned')}>
                <Earned {...props.earned} userDataReady={userDataReady} />
              </CellLayout>
            </EarnedMobileCell>
          </td>
          <td width="35%">
            <AprMobileCell>
              <CellLayout label={t('APR')}>
                <Apr
                  {...props.apr}
                  hideButton
                  strikethrough={props?.details?.boosted}
                  boosted={props?.details?.boosted}
                />
                {props?.details?.boosted && userDataReady ? (
                  <BoostedApr
                    lpRewardsApr={props?.apr?.lpRewardsApr}
                    apr={props?.apr?.originalValue}
                    pid={props.farm?.pid}
                    lpTotalSupply={props.details?.lpTotalSupply}
                    userBalanceInFarm={
                      stakedBalance.plus(tokenBalance).gt(0)
                        ? stakedBalance.plus(tokenBalance)
                        : proxy.stakedBalance.plus(proxy.tokenBalance)
                    }
                  />
                ) : null}
              </CellLayout>
            </AprMobileCell>
          </td>
          <td width="15%">
            <CellInner style={{ justifyContent: 'flex-end' }}>
              <CellLayout label={t('Available LP')}>
                <LpAmount {...props.availableLp} userDataReady={userDataReady} />
              </CellLayout>
            </CellInner>
          </td>
          <td width="15%">
            <CellInner style={{ justifyContent: 'flex-end' }}>
              <CellLayout label={t('Staked')}>
                <LpAmount {...props.stakedLp} userDataReady={userDataReady} />
              </CellLayout>
            </CellInner>
          </td>
          <td width="5%">
            <CellInner style={{ justifyContent: 'flex-end' }}>
              <Details actionPanelToggled={actionPanelExpanded} />
            </CellInner>
          </td>
        </StyledTr>
      </>
    )
  }

  return (
    <>
      {handleRenderRow()}
      {shouldRenderChild && (
        <tr>
          <td colSpan={9}>
            <ActionPanel {...props} expanded={actionPanelExpanded} alignLinksToRight={isMobile} />
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
