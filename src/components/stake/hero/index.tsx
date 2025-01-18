import React from 'react'
import styled from 'styled-components'
import ConnectButton from './ConnectButton'

const Wrapper = styled.section`
  position: relative; 
  z-index: 1; 
  width: 100%;
  height: auto;
  padding: 6rem 13rem;

  &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(17, 17, 17, 0.4) 0%, rgba(1, 169, 196, 0.4) 100%);
      z-index: -1; 
      opacity: 0.7; 
      pointer-events: none; 
    }

    h1 {
      font-family: Inter;
      font-size: 44px;
      font-weight: 600;
      line-height: 53.25px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: white;
    }
    p {
      font-family: Inter;
      font-size: 24px;
      font-weight: 300;
      line-height: 29.05px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #FFFFFFCC;
      margin: 1rem 0rem;
    }
    .mir-box {
      margin-top: 2.5rem;
      border: 1px solid #01A9C4;
      width: 550px;
      border-radius: 32px;
      padding: 0.6rem 2rem;
      background-color: #1212121F;
      .mir {
        font-family: Inter;
        font-size: 24px;
        font-weight: 300;
        line-height: 29.05px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFFFFF80;
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
      }
    }
    .connect-button {
      margin-top: 5rem;
    }

  `
  const FixWidthBox = styled.div`
    width: 1040px;
    margin: auto auto;
  `
const Hero = () => {
  return (
    <Wrapper>
        <FixWidthBox>
          <h1>Simple and Secure Staking</h1>
          <p>Join now and enjoy the highest returns available. Act early for greater benefits!</p>
          <div className='mir-box'>
              <p className='mir'>MIR</p>
              <p className='percent'>15.00%</p>
          </div>
          <div className='connect-button'>
            <ConnectButton onClick={undefined} loading={false}>Connect Wallet</ConnectButton>
          </div>
        </FixWidthBox>
    </Wrapper>
  )
}

export default React.memo(Hero)