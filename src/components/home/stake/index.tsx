import React from 'react'
import styled from 'styled-components'
import ConnectButton from './ConnectButton'
import Features from './Features'
import stakeGradient1 from '@/assets/home/stake-gradient1.svg'
import stakeGradient2 from '@/assets/home/stake-gradient2.svg'
import {useNavigate} from "react-router-dom";

const Wrapper = styled.section`
  position: relative; 
  z-index: 1; 
  width: 100%;
  height: auto;
  padding: 12rem 0rem 6rem 0rem;
  margin-top: -8.5rem;
  background-image: url('/bg-stake-gradient.svg');
  background-size: cover;
  .bg-img {
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
  }
  .gradient1 {
    position: absolute;
    left: 10%;
    top: -10%;
  }
  .gradient2 {
    position: absolute;
    left: 10rem;
    bottom: 0rem;
  }

  &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999; 
      opacity: 0.7; 
      pointer-events: none; 
    }

    h1 {
      position: relative;
      font-family: Inter;
      font-size: 44px;
      font-weight: 600;
      line-height: 53.25px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: white;
      letter-spacing: 1.5px;
      z-index: 999; 
    }
    p {
      position: relative;
      font-family: Inter;
      font-size: 24px;
      font-weight: 300;
      line-height: 29.05px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #FFFFFFCC;
      margin-top: 2rem;
      letter-spacing: 1px;
      z-index: 999; 
    }
    .mir-box {
      position: relative;
      border: 1px solid #01A9C4;
      width: 426px;
      border-radius: 32px;
      padding: 1.8rem 2rem;
      background-color: #1212121F;
      display: flex;
      justify-content: start;
      gap: 1rem;
      align-items: center;
      z-index: 999; 
      .mir {
        font-family: Inter;
        font-size: 24px;
        font-weight: 300;
        line-height: 29.05px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFFFFF80;
        margin: 0 !important;
      }
      .percent {
        font-family: Inter;
        font-size: 30px;
        font-weight: 400;
        line-height: 36.31px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFFFFF;
        margin: 0 !important;
      }
    }
    .connect-button {
      position: relative;
      margin-top: 3rem;
      z-index: 999; 
    }

  `
const FixWidthBox = styled.div`
    width: 1040px;
    margin: auto auto;
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 7rem;
    z-index: 9999;
  `
const Stake = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <img className='gradient1' src={stakeGradient1} alt="" />
      <img className='gradient2' src={stakeGradient2} alt="" />

      <FixWidthBox>
        <div>
          <h1>Simple and Secure<br /> Staking</h1>
          <p>Join now and enjoy the highest<br /> returns available. Act early for <br />greater benefits!</p>
        </div>
        <div>
          <div className='mir-box'>
            <p className='mir'>MIR</p>
            <p className='percent'>-</p>
          </div>
          <div className='connect-button'>
            <ConnectButton onClick={() => navigate('/stake2')} loading={false}>View</ConnectButton>
          </div>
        </div>
      </FixWidthBox>
      <Features />
    </Wrapper>
  )
}

export default React.memo(Stake)