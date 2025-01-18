import React from 'react'
import styled from 'styled-components'
import bg from '@/assets/shield-core/bg-hero.svg'
import { useDialogContext } from '@/providers/DialogProvider'

const Wrapper = styled.section`
    background-color: white;
    padding: 0.1rem 0rem;
    position: relative;
    background-color: black;
    .bg-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        padding: 0;
        white-space: nowrap;
    }
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 11rem auto 9rem auto;
    position: relative;
    z-index: 999;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    h1 {
        font-family: Inter;
        font-size: 50px;
        font-weight: 600;
        line-height: 60.51px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        color: white;
        @media screen and (max-width: 1040px) {
            font-size: 40px;
            line-height: 50px;
        }
    }
    .desc {
        font-family: Inter;
        font-size: 18px;
        font-weight: 300;
        line-height: 21.78px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        padding: 2.5rem 0rem 5rem 0rem;
    }
    
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    
`


const Hero = () => {
  const { setShowSubMenu } = useDialogContext()
  return (
    <Wrapper onClick={()=>setShowSubMenu(false)}>
      <img className='bg-img' src={bg} alt="" />
      <ContentBox>
        <h1>Protect your wallet and interactions from Web3 vulnerabilities</h1>
        <p className='desc'>Say goodbye to risky interactions with GameFi and DeFi projects. ShieldCore Suite detects threats, provides real-time guidance, and ensures your Web3 experience is secure.</p>
      </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Hero)