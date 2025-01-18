import Footer from '@/components/move-ai2/footer'
import Header from '@/components/move-ai2/header'
import MoblieMenu from '@/components/move-ai2/mobile-menu'
import Hero from '@/components/fusionx/hero'
import { useDialogContext } from '@/providers/DialogProvider'
import React from 'react'
import styled from 'styled-components'
import How from '@/components/fusionx/how'

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

const FusionX = () => {
  const { showMobileMenu } = useDialogContext()
  return (
    <Wrapper>
      {showMobileMenu && <MoblieMenu />
      }
      <div className='upper-box'>
        <Header />
        <Hero/>
        <How/>
        <Footer />
        {/* <Footer1/> */}
      </div>
    </Wrapper>
  )
}

export default React.memo(FusionX)