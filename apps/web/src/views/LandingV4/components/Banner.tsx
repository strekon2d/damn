import { useTranslation } from '@pancakeswap/localization'
import { Box, Button, Flex, OpenNewIcon, PageSection, Tag, Text } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'
import { styled } from 'styled-components'
import { SlideSvgDark, SlideSvgLight } from 'views/Home/components/SlideSvg'

const StyledBannerSection = styled(PageSection)`
  padding: 40px 0;

  > div {
    padding: 0 !important;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 128px 16px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 128px 0px;
  }
`
const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const VideoStyled = styled.video`
  border-radius: 24px;
`

export const Banner = () => {
  const { t } = useTranslation()

  return (
    <>
      <style jsx global>
        {`
          #home-1 .page-bg {
            background: linear-gradient(139.73deg, #f3efff 0%, #e6fdff 100%);
          }
          [data-theme='dark'] #home-1 .page-bg {
            background: radial-gradient(103.12% 50% at 50% 50%, #21193a 0%, #191326 100%);
          }

          .slide-svg-dark {
            display: none;
          }
          .slide-svg-light {
            display: block;
            > path {
              fill: #faf9fa !important;
            }
          }
          [data-theme='dark'] .slide-svg-dark {
            display: block;
          }
          [data-theme='dark'] .slide-svg-light {
            display: none;
          }
        `}
      </style>
      <StyledBannerSection
        innerProps={{ style: { margin: '0', width: '100%', overflow: 'visible', padding: '16px' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <BgWrapper>
          <InnerWrapper>
            <SlideSvgDark className="slide-svg-dark" width="100%" />
            <SlideSvgLight className="slide-svg-light" width="100%" />
          </InnerWrapper>
        </BgWrapper>
        <Flex flexDirection={['column', 'column', 'column', 'column', 'column', 'column', 'row']}>
          <Flex
            m={['22px 0 0 0 0', '22px 0 0 0 0', '22px 0 0 0 0', '22px 0 0 0 0', '0 0 0 48px']}
            maxWidth={['560px']}
            alignSelf="center"
            flexDirection="column"
          >
            <Box m={['16px auto', '16px auto', '16px auto', '16px auto', '16px auto', '16px auto', '24px 0']}>
              <Tag variant="secondary">{t('PancakeSwap v4')}</Tag>
            </Box>
            <Box>
              <Flex justifyContent={['center', 'center', 'center', 'center', 'center', 'center', 'left']}>
                <Text
                  bold
                  fontSize={['40px', '40px', '40px', '40px', '48px']}
                  lineHeight={['40px', '40px', '40px', '40px', '48px']}
                  as="span"
                >
                  {t('Your')}
                </Text>
                <Text
                  bold
                  as="span"
                  m="0 4px"
                  color="secondary"
                  fontSize={['40px', '40px', '40px', '40px', '48px']}
                  lineHeight={['40px', '40px', '40px', '40px', '48px']}
                >
                  {t('DEX')}
                </Text>
                <Text
                  bold
                  as="span"
                  fontSize={['40px', '40px', '40px', '40px', '48px']}
                  lineHeight={['40px', '40px', '40px', '40px', '48px']}
                >
                  ,
                </Text>
              </Flex>
              <Flex justifyContent={['center', 'center', 'center', 'center', 'center', 'center', 'left']}>
                <Text
                  bold
                  as="span"
                  fontSize={['40px', '40px', '40px', '40px', '48px']}
                  lineHeight={['40px', '40px', '40px', '40px', '48px']}
                >
                  {t('Your')}
                </Text>
                <Text
                  bold
                  ml="4px"
                  as="span"
                  color="secondary"
                  fontSize={['40px', '40px', '40px', '40px', '48px']}
                  lineHeight={['40px', '40px', '40px', '40px', '48px']}
                >
                  {t('Innovation')}
                </Text>
              </Flex>
            </Box>
            <Text
              bold
              fontSize={['20px']}
              lineHeight="110%"
              color="textSubtle"
              m={['16px 0', '16px 0', '16px 0', '16px 0', '24px 0']}
              textAlign={['center', 'center', 'center', 'center', 'center', 'center', 'left']}
            >
              {t('Empower, Build and Innovate with PancakeSwap v4')}
            </Text>
            <NextLinkFromReactRouter
              target="_blank"
              to="https://blog.pancakeswap.finance/articles/celebrating-traverse-claim-your-exclusive-nfts"
            >
              <Button display="flex" margin={['auto', 'auto', 'auto', 'auto', 'auto', 'auto', '0']}>
                <Text bold fontSize={['12px', '16px']} mr="4px">
                  {t('Read Whitepaper')}
                </Text>
                <OpenNewIcon />
              </Button>
            </NextLinkFromReactRouter>
          </Flex>
          <Box
            height={['337px']}
            padding={['16px', '16px', '16px', '0px']}
            width={['100%', '100%', '100%', '600px']}
            m={[
              '40px auto auto auto',
              '40px auto auto auto',
              '40px auto auto auto',
              '40px auto auto auto',
              '40px auto auto auto',
              '40px auto auto auto',
              'auto 0 auto auto',
            ]}
          >
            <VideoStyled
              muted
              autoPlay
              controls
              width="100%"
              height="100%"
              disablePictureInPicture
              src="https://www.mobox.io/download/Pancake_Protectors_Video.mp4"
              poster="/images/v4-landing/video-image.jpg"
              controlsList="nodownload noplaybackrate noremoteplayback"
            />
          </Box>
        </Flex>
      </StyledBannerSection>
    </>
  )
}
