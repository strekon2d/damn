import { useTranslation } from '@pancakeswap/localization'
import { Button, Text, useMatchBreakpoints, Box, OpenNewIcon } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import Image from 'next/image'
import styled from 'styled-components'
import { Aptos, AptosXPancakeSwap } from './images'
import * as S from './Styled'

const RightWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    right: 1px;
    bottom: -18px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    right: 0px;
    bottom: -21px;
  }
`
const AptosTitle = styled.div`
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 110%;
  color: #ffffff;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  margin-top: 14px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 35px;
    margin-top: 10px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 40px;
  }
`

const AptosBanner = () => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  return (
    <S.Wrapper
      style={{
        background: `linear-gradient(180deg, #00BFA5 0%, #005A5A 100%)`,
        overflow: isMobile ? 'hidden' : 'visible',
      }}
    >
      <S.Inner>
        <S.LeftWrapper>
          <Box>
            <Image src={AptosXPancakeSwap} alt="aptosXPancakeSwapImage" width={211} height={18} placeholder="blur" />
          </Box>
          <AptosTitle>{t('Hello Aptos Project Teams!')}</AptosTitle>
          <NextLinkFromReactRouter to="/voting/proposal/0x29913ec3d379014a6137fdfe62c1cf27f7b2c1edff7c6a802d4300251d06d34c">
            <Button>
              <Text color="invertedContrast" bold fontSize="16px" mr="4px">
                👋 {t('Get in Touch')}
              </Text>
              <OpenNewIcon color="invertedContrast" />
            </Button>
          </NextLinkFromReactRouter>
        </S.LeftWrapper>
        <RightWrapper>
          <Image
            src={Aptos}
            alt="aptosImage"
            width={isMobile ? 1100 : 930}
            height={isMobile ? 250 : 231}
            placeholder="blur"
          />
        </RightWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default AptosBanner
