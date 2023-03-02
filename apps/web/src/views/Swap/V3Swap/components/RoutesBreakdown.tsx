import { useCallback, useDeferredValue, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { Route } from '@pancakeswap/smart-router/evm'
import { usePreviousValue } from '@pancakeswap/hooks'
import { QuestionHelper, SearchIcon, Text, ChevronDownIcon } from '@pancakeswap/uikit'

import { RowBetween } from 'components/Layout/Row'
import SwapRoute from 'views/Swap/components/SwapRoute'
import { RouteDisplayModal } from './RouteDisplayModal'

interface Props {
  routes?: Route[]
}

const RouteInfoContainer = styled(RowBetween)`
  padding: 4px 24px 0;
`

const RouteWrapper = styled(RowBetween)`
  padding: 4px 24px 0 40px;
`

const DropdownIcon = styled(ChevronDownIcon)<{ expanded: boolean }>`
  transform: rotate(${({ expanded }) => (expanded ? '0.5turn' : '0turn')});
`

export function RoutesBreakdown({ routes = [] }: Props) {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)
  const [displayRouteIndex, setDisplayRouteIndex] = useState<number | null>(null)
  const [showRouteDetail, setShowRouteDetail] = useState(false)
  const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded])
  const onShowRoute = useCallback((index: number) => {
    setDisplayRouteIndex(index)
    setShowRouteDetail(true)
  }, [])
  const onCloseRouteDisplay = useCallback(() => setShowRouteDetail(false), [])

  const previousRoutes = usePreviousValue(routes)

  const shouldShowRoutes = useDeferredValue(
    showRouteDetail && previousRoutes && previousRoutes.length === routes.length,
  )

  if (!routes.length) {
    return null
  }

  const count = routes.length
  const swapRoutes = expanded
    ? // eslint-disable-next-line react/no-array-index-key
      routes.map((route, i) => <RouteComp key={i} route={route} onClick={() => onShowRoute(i)} />)
    : null
  const routeDetail = routes[displayRouteIndex] && (
    <RouteDisplayModal open={shouldShowRoutes} route={routes[displayRouteIndex]} onClose={onCloseRouteDisplay} />
  )

  return (
    <>
      <RouteInfoContainer>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Text fontSize="14px" color="textSubtle">
            {t('Route')}
          </Text>
          <QuestionHelper
            text={t('Routing through these tokens resulted in the best price for your trade.')}
            ml="4px"
            placement="top-start"
          />
        </span>
        <div onClick={toggleExpanded} onKeyDown={toggleExpanded} role="button" tabIndex={0}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <Text fontSize="14px">{t('Split into %count% routes', { count })}</Text>
            <DropdownIcon expanded={expanded} />
          </span>
        </div>
      </RouteInfoContainer>
      {routeDetail}
      {swapRoutes}
    </>
  )
}

interface RouteProps {
  route: Route
  onClick?: () => void
}

function RouteComp({ route, onClick }: RouteProps) {
  const { path, percent } = route

  return (
    <RouteWrapper>
      <Text fontSize="14px" color="textSubtle">
        {percent}%
      </Text>
      <SwapRoute path={path} />
      <SearchIcon style={{ cursor: 'pointer' }} onClick={onClick} color="textSubtle" />
    </RouteWrapper>
  )
}
