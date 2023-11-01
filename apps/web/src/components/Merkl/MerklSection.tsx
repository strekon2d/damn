import {
  AutoRow,
  Button,
  Text,
  Flex,
  Message,
  MessageText,
  Box,
  Link,
  useTooltip,
  TooltipText,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { LightGreyCard } from 'components/Card'
import { CurrencyLogo } from '@pancakeswap/widgets-internal'

import useMerkl from '../../hooks/useMerkl'

export function MerklSection({
  poolAddress,
  notEnoughLiquidity,
  isStakedInMCv3,
  outRange,
}: {
  outRange: boolean
  poolAddress: string | null
  notEnoughLiquidity: boolean
  isStakedInMCv3: boolean
}) {
  const { t } = useTranslation()

  const { claimTokenReward, isClaiming, rewardsPerToken } = useMerkl(poolAddress)

  const { tooltip, tooltipVisible, targetRef } = useTooltip(
    t('Combined number of Merkl rewards from all the positions under this trading pair.'),
    {
      placement: 'top',
      trigger: 'hover',
    },
  )

  if (!rewardsPerToken.length) return null

  return (
    <Box width="100%" ml={[0, 0, 0, '16px']} mt="24px">
      <AutoRow justifyContent="space-between" mb="8px">
        <Text fontSize="12px" color="secondary" bold textTransform="uppercase">
          {t('Merkl Rewards')}
        </Text>
        <Button disabled={isClaiming} scale="sm" onClick={claimTokenReward}>
          {isClaiming ? t('Claiming...') : t('Claim')}
        </Button>
      </AutoRow>
      <LightGreyCard
        ref={targetRef}
        mr="4px"
        style={{
          padding: '16px 8px',
          marginBottom: '8px',
        }}
      >
        {rewardsPerToken.map((tokenAmount) => (
          <AutoRow justifyContent="space-between" mb="8px">
            <Flex>
              <CurrencyLogo currency={tokenAmount.currency} />
              <Text small color="textSubtle" id="remove-liquidity-tokenb-symbol" ml="4px">
                {tokenAmount.currency.symbol}
              </Text>
            </Flex>
            <Flex justifyContent="center">
              <TooltipText small>{tokenAmount.toSignificant(6)}</TooltipText>
            </Flex>
          </AutoRow>
        ))}
        {tooltipVisible && tooltip}
      </LightGreyCard>

      {isStakedInMCv3 ? (
        <Message variant="warning">
          <MessageText>
            To earn rewards on Merkl, unstake this position from PancakeSwap Farms.
            <br />
            <Link external style={{ display: 'inline-flex' }} href="https://docs.angle.money/side-products/merkl">
              {t('Learn more about Merkl')}
            </Link>
          </MessageText>
        </Message>
      ) : outRange ? (
        <Message variant="warning">
          <MessageText>
            This Merkl campaign is NOT rewarding out-of-range liquidity. To earn rewards, adjust your position.
            <br />
            <Link external style={{ display: 'inline-flex' }} href="https://docs.angle.money/side-products/merkl">
              {t('Learn more about Merkl')}
            </Link>
          </MessageText>
        </Message>
      ) : (
        <Message variant={notEnoughLiquidity ? 'warning' : 'primary'}>
          <MessageText>
            {notEnoughLiquidity
              ? 'This liquidity position will NOT earn any rewards on Merkl due to its total USD value being less than $20.'
              : 'This liquidity position is currently earning rewards on Merkl.'}{' '}
            Check details{' '}
            <Link
              external
              style={{ display: 'inline-flex' }}
              href="https://merkl.angle.money/?times=active%2Cfuture%2C&phrase=PancakeSwap"
            >
              {t('here')}
            </Link>{' '}
            <br />
            <Link external style={{ display: 'inline-flex' }} href="https://docs.angle.money/side-products/merkl">
              {t('Learn more about Merkl')}
            </Link>
          </MessageText>
        </Message>
      )}
    </Box>
  )
}
