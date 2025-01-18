import Building from '@/components/about/building'
import CoreFeatures from '@/components/about/core-features'
import Scalable from '@/components/about/scalable'
import Footer from '@/components/move-ai2/footer'
import Header from '@/components/move-ai2/header'
import MoblieMenu from '@/components/move-ai2/mobile-menu'
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

const About = () => {
  const { showMobileMenu, setShowMobileMenu } = useDialogContext()
  return (
    <Wrapper>
      {showMobileMenu && <MoblieMenu />
      }
      <div className='upper-box'>
        <Header />
        <Scalable />
        <CoreFeatures />
        <Building />
        <Footer />
      </div>
    </Wrapper>
  )
}

export default React.memo(About)