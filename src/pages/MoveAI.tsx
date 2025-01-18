import Header from '@/components/move-ai/header'
import Hero from '@/components/move-ai/hero'
import React from 'react'
import styled from 'styled-components'
import bgHeaderHero from '@/assets/move-ai/bg-header-hero.svg'
import Scalable from '@/components/move-ai/scalable'
import Meet from '@/components/move-ai/meet'
import CoreFeatures from '@/components/move-ai/core-features'
import Technology from '@/components/move-ai/technology'
import Ecosystem from '@/components/move-ai/ecosystem'
import Tokenomics from '@/components/move-ai/tokenomics'
import Privacy from '@/components/move-ai/privacy'
import Join from '@/components/move-ai/join'
import Partnership from '@/components/move-ai/partnership'

const Wrapper = styled.main`
    width: 100%;
    overflow: hidden;
    background-color: black;
    z-index: 10;
    .upper-box {
        position: relative;
        background-color: black;
        max-width: 1920px;
        overflow: hidden;
        margin: auto auto;
        padding: 0 0;
        @media screen and (max-width: 800px) {
            padding: 0rem 0rem;
            overflow: hidden;
        }
        .bg-gradient1 {
            position: absolute;
            top: 130rem;
            right: 0;
        }
        .bg-gradient2 {
            position: absolute;
            top: 250rem;
            left: 0;
        }
    }
`

const HeaderHeroWrapper = styled.div`
    position: relative;
    background-color: #FFCB06;
    .bg-hero {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
`

const MoveAI = () => {

  return (
    <Wrapper>
      <div className='upper-box'>
        <HeaderHeroWrapper>
          <img className='bg-hero' src={bgHeaderHero} alt="" />
          <Header />
          <Hero />
        </HeaderHeroWrapper>
        <Scalable/>
        <Meet/>
        <CoreFeatures/>
        <Technology/>
        <Ecosystem/>
        <Tokenomics/>
        <Privacy/>
        <Join/>
        <Partnership/>
      </div>
    </Wrapper>
  )
}

export default React.memo(MoveAI)