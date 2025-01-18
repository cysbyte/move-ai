import Ecosystem from '@/components/move-ai2/ecosystem'
import Footer from '@/components/move-ai2/footer'
import Header from '@/components/move-ai2/header'
import Hero from '@/components/move-ai2/hero'
import Meet from '@/components/move-ai2/meet'
import MoblieMenu from '@/components/move-ai2/mobile-menu'
import MoveDesk from '@/components/move-ai2/move-desk'
import Privacy from '@/components/move-ai2/privacy'
import Technology from '@/components/move-ai2/technology'
import { useDialogContext } from '@/providers/DialogProvider'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
    width: 100%;
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
`

const MoveAI2 = () => {
  const { showMobileMenu } = useDialogContext()

  return (
    <Wrapper>
      {showMobileMenu && <MoblieMenu />
      }
      <div className='upper-box'>
        <HeaderHeroWrapper>
          <Header />
          <Hero />
        </HeaderHeroWrapper>
        <Meet />
        <Ecosystem />
        <Technology />
        <div id='move-desk-section'/>
        <MoveDesk/>
        <Privacy />
        <Footer />
      </div>
    </Wrapper>
  )
}

export default React.memo(MoveAI2)