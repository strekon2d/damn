import { useEffect, useState } from 'react'
import { Flex, Box, Card } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'
import { useTranslation } from '@pancakeswap/localization'
import AffiliatesProgramLayout from 'views/AffiliatesProgram/components/AffiliatesProgramLayout'
import Banner from 'views/AffiliatesProgram/components/Dashboard/Banner'
import MyReferralLink from 'views/AffiliatesProgram/components/Dashboard/MyReferralLink'
import useAuthAffiliate from 'views/AffiliatesProgram/hooks/useAuthAffiliate'
import useAuthAffiliateExist from 'views/AffiliatesProgram/hooks/useAuthAffiliateExist'
import LoginButton from 'views/AffiliatesProgram/components/Dashboard/LoginButton'
import CommissionInfo from 'views/AffiliatesProgram/components/Dashboard/CommissionInfo'
import ClaimReward from 'views/AffiliatesProgram/components/Dashboard/ClaimReward'
import AffiliateLinks from 'views/AffiliatesProgram/components/Dashboard/AffiliateLinks'

const Dashboard = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { isAffiliate, affiliate, refresh } = useAuthAffiliate()
  const { isAffiliateExist } = useAuthAffiliateExist()
  const [isFirstTime, setIsFirstTime] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstTime(false), 1000)

    if ((isAffiliateExist === false && isAffiliateExist !== null) || (!isFirstTime && !account)) {
      router.push('/affiliates-program')
    }

    return () => clearTimeout(timer)
  }, [isAffiliateExist, isAffiliate, router, isFirstTime, account, setIsFirstTime])

  if (!isAffiliateExist || (!isFirstTime && !account)) {
    return null
  }

  return (
    <AffiliatesProgramLayout>
      <Banner title={t('Dashboard')} subTitle={t('Manage your affiliate link, see how much you’ve earned')} />
      {!isAffiliate ? (
        <LoginButton />
      ) : (
        <Flex
          padding="0 16px"
          m={['24px 0', '24px 0', '24px 0', '68px 0 24px 0']}
          justifyContent={['center']}
          flexDirection={['column', 'column', 'column', 'column', 'column', 'row']}
        >
          <CommissionInfo />
          <Flex
            flexDirection="column"
            width={['100%', '100%', '100%', '100%', '100%', '700px']}
            m={['32px 0 0 0', '32px 0 0 0', '32px 0 0 0', '32px 0 0 0', '32px 0 0 0', '0 0 0 32px']}
          >
            <Card>
              <Box padding={['24px']}>
                <MyReferralLink affiliate={affiliate} refreshAffiliateInfo={refresh} />
                <AffiliateLinks affiliate={affiliate} />
                <ClaimReward />
              </Box>
            </Card>
          </Flex>
        </Flex>
      )}
    </AffiliatesProgramLayout>
  )
}

Dashboard.chains = []

export default Dashboard
