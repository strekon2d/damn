import { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { Text, Flex, Td, ProfileAvatar } from '@pancakeswap/uikit'
import { RankListDetail } from 'views/TradingReward/hooks/useRankList'
import { formatNumber } from '@pancakeswap/utils/formatBalance'
import { useProfileForAddress } from 'state/profile/hooks'
import { useDomainNameForAddress } from 'hooks/useDomain'
import truncateHash from '@pancakeswap/utils/truncateHash'
import { usePriceCakeUSD } from 'state/farms/hooks'

interface DesktopResultProps {
  rank: RankListDetail
}

const DesktopResult: React.FC<React.PropsWithChildren<DesktopResultProps>> = ({ rank }) => {
  const cakePriceBusd = usePriceCakeUSD()
  const { profile, isLoading: isProfileLoading } = useProfileForAddress(rank.origin)
  const { domainName, avatar } = useDomainNameForAddress(rank.origin, !profile && !isProfileLoading)

  const cakeAmount = useMemo(
    () => new BigNumber(rank?.estimateRewardUSD).div(cakePriceBusd).toNumber(),
    [cakePriceBusd, rank?.estimateRewardUSD],
  )

  return (
    <tr>
      <Td>
        <Text bold color="secondary">
          {`#${rank.id}`}
        </Text>
      </Td>
      <Td textAlign="left">
        <Flex>
          <ProfileAvatar width={42} height={42} src={profile?.nft?.image?.thumbnail ?? avatar} />
          <Text style={{ alignSelf: 'center' }} color="primary" bold ml="8px">
            {profile?.username || domainName || truncateHash(rank.origin)}
          </Text>
        </Flex>
      </Td>
      <Td textAlign="left">
        <Text bold>{`$${formatNumber(rank.volume, 0, 0)}`}</Text>
      </Td>
      <Td textAlign="right">
        <Text bold>{`$${formatNumber(rank.estimateRewardUSD, 0, 0)}`}</Text>
        <Text fontSize={12} color="textSubtle">
          {`~${formatNumber(cakeAmount)} CAKE`}
        </Text>
      </Td>
    </tr>
  )
}

export default DesktopResult
