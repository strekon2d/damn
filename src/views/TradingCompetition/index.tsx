import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { useProfile } from 'state/hooks'
import { Card } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import RibbonWithImage from './components/RibbonWithImage'
import Section from './components/Section'
import BattleCta from './components/BattleCta'
import Prizes from './svgs/Prizes'
import Ranks from './svgs/Ranks'
import {
  DARKBG,
  DARKFILL,
  MIDBLUEBG,
  MIDBLUEFILL,
  LIGHTBLUEBG,
  LIGHTBLUEFILL,
} from './components/Section/sectionStyles'

const TradingCompetition = () => {
  const { account } = useWeb3React()
  const { profile } = useProfile()
  const registered = true

  return (
    <Page>
      <Section backgroundStyle={DARKBG} svgFill={DARKFILL} index={1} intersectComponent={<BattleCta />} />
      <Section backgroundStyle={MIDBLUEBG} svgFill={MIDBLUEFILL} index={2}>
        <RibbonWithImage imageComponent={<Prizes width="175px" />} ribbonDirection="up">
          Prizes
        </RibbonWithImage>
      </Section>
      <Section backgroundStyle={LIGHTBLUEBG} svgFill={LIGHTBLUEFILL} index={5}>
        <RibbonWithImage imageComponent={<Prizes width="175px" />} ribbonDirection="down">
          Light blue
        </RibbonWithImage>
      </Section>
      <Section index={3} intersectionPosition="top">
        <RibbonWithImage imageComponent={<Prizes width="175px" />} ribbonDirection="up">
          Intersect top
        </RibbonWithImage>
      </Section>
    </Page>
  )
}

export default TradingCompetition
