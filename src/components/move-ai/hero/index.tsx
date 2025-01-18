import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    padding-bottom: 2rem;
`
const ContentBox = styled.div`
    width: 1040px;
    margin: 5rem auto;
    position: relative;
    z-index: 999;
    .line {
        width: 887px;
        height: 4px;
        background-color: black;
        position: absolute;
        left: 28rem;
        top: 3rem;
        display: block;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
    h1 {
        font-family: Inter;
        font-size: 100px;
        font-weight: 700;
        line-height: 121.02px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        @media screen and (max-width: 1040px) {
            font-size: 50px;
            font-weight: 700;
            line-height: 60px;
        }
    }
    h3 {
        font-family: Inter;
        font-size: 44px;
        font-weight: 800;
        line-height: 53.25px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        margin-top: 0.8rem;
        text-transform: uppercase;
        @media screen and (max-width: 1040px) {
            font-size: 30px;
            font-weight: 600;
            line-height: 40px;
        }
    }
    p {
        font-family: Inter;
        font-size: 24px;
        font-weight: 400;
        line-height: 29.05px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        margin-top: 2.2rem;
        letter-spacing: 0.3px;
        @media screen and (max-width: 1040px) {
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
        }
    }
    .bottom-box {
        margin-top: 3.5rem;
        button {
            padding: 1rem 2.5rem;
            background-color: #0337FF;
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            border-width: 0px;
        }
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            margin: 1rem 0rem;
        }
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`
const Hero = () => {

  return (
    <Wrapper>
      <ContentBox>
        <div className='line'></div>
        <h1>MOVEAI</h1>
        <h3>Your Intent-Centric, Scalable Layer 2 Platform for Decentralized AI</h3>
        <p>Empowering developers and communities with a trustless, EVM-secured, modular infrastructure to build, deploy, and scale AI-driven applications and autonomous agents.
        </p>
        <div className='bottom-box'>
          <button>Get early access</button>
          <p>Graphic Visualisation of Ai Network</p>
        </div>
      </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Hero)