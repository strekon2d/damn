import { useTranslation } from '@pancakeswap/localization'
import { AutoRenewIcon, Box, Button, Flex } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import NextLink from 'next/link'
import { useCallback } from 'react'
import {
  useBCakeBoostLimitAndLockInfo,
  useUserBoostedMultiplier,
  useUserBoostedPoolsTokenId,
  useUserPositionInfo,
} from '../../hooks/bCakeV3/useBCakeV3Info'
import { useBoosterFarmV3Handlers } from '../../hooks/bCakeV3/useBoostBcakeV3'
import { BoostStatus, useBoostStatus } from '../../hooks/bCakeV3/useBoostStatus'
import { StatusView } from './StatusView'

export const BCakeV3CardView: React.FC<{
  tokenId: string
  pid: number
  isFarmStaking?: boolean
}> = ({ tokenId, pid, isFarmStaking }) => {
  const { t } = useTranslation()
  const { status: boostStatus, updateStatus } = useBoostStatus(pid, tokenId)
  const { updateBoostedPoolsTokenId } = useUserBoostedPoolsTokenId()
  const {
    data: { boostMultiplier },
    updateUserPositionInfo,
  } = useUserPositionInfo(tokenId)

  const onDone = useCallback(() => {
    updateStatus()
    updateUserPositionInfo()
    updateBoostedPoolsTokenId()
  }, [updateStatus, updateUserPositionInfo, updateBoostedPoolsTokenId])
  const { isReachedMaxBoostLimit, locked, isLockEnd } = useBCakeBoostLimitAndLockInfo()

  const { activate, deactivate, isConfirming } = useBoosterFarmV3Handlers(tokenId, onDone)

  const multiplierBeforeBoosted = useUserBoostedMultiplier(tokenId)
  const { theme } = useTheme()
  return (
    <Flex width="100%" alignItems="center" justifyContent="space-between">
      <StatusView
        status={boostStatus}
        boostedMultiplier={boostStatus === BoostStatus.farmCanBoostButNot ? boostMultiplier : multiplierBeforeBoosted}
        isFarmStaking={isFarmStaking}
      />
      <Box>
        {(!locked || isLockEnd) && (
          <NextLink href="/pools" passHref>
            <Button style={{ whiteSpace: 'nowrap' }}>{t('Go to Pool')}</Button>
          </NextLink>
        )}
        {boostStatus === BoostStatus.farmCanBoostButNot && isFarmStaking && locked && !isLockEnd && (
          <Button
            onClick={() => {
              activate()
            }}
            isLoading={isConfirming}
            endIcon={isConfirming && <AutoRenewIcon spin color="currentColor" />}
            disabled={isReachedMaxBoostLimit}
          >
            {t('Boost')}
          </Button>
        )}
        {boostStatus === BoostStatus.Boosted && (
          <Button
            onClick={() => {
              deactivate()
            }}
            style={{
              backgroundColor: 'transparent',
              border: `2px solid ${theme.colors.primary}`,
              color: theme.colors.primary,
            }}
            isLoading={isConfirming}
            endIcon={isConfirming && <AutoRenewIcon spin color="currentColor" />}
          >
            {t('Unset')}
          </Button>
        )}
      </Box>
    </Flex>
  )
}
