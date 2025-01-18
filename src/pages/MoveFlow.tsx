import Footer from '@/components/move-ai2/footer'
import Header from '@/components/move-ai2/header'
import MoblieMenu from '@/components/move-ai2/mobile-menu'
import Customize from '@/components/move-flow/customize'
import From from '@/components/move-flow/from'
import GetStarted from '@/components/move-flow/get-started'
import Hero from '@/components/move-flow/hero'
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
    }
`

const MoveFlow = () => {
  const { showMobileMenu, setShowMobileMenu } = useDialogContext()
  return (
    <Wrapper>
      {showMobileMenu && <MoblieMenu />
      }
      <div className='upper-box'>
        <Header />
        <Hero/>
        <Customize/>
        <From/>
        <GetStarted/>
        <Footer />
      </div>
    </Wrapper>
  )
}

export default React.memo(MoveFlow)