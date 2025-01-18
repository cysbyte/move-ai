import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import plus from '@/assets/move-ai/partenership-plus.svg'

const Wrapper = styled.section`
    position: relative;
    padding: 7rem 0rem 1.5rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFCB06;

`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 1040px;
    margin: 0rem auto;
    position: relative;
    z-index: 999;
    .plus {
        position: absolute;
        top: 0.8rem;
        right: 0rem;
        z-index: 999;
        display: block;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
    h2 {
        font-family: Inter;
        font-size: 80px;
        font-weight: 700;
        line-height: 96.82px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        text-transform: uppercase;
        @media screen and (max-width: 1040px) {
            font-size: 35px;
            line-height: 45px;
        }
    }
    .middle-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;
        gap: 2rem;
        .square {
            width: 366px;
            height: 55px;
            border-bottom: 1px solid black;
            border-left: 1px solid black;
            margin-bottom: 4rem;
            margin-left: 8rem;
            display: block;
            @media screen and (max-width: 1040px) {
                display: none;
            }
        }
        h4 {
            font-family: Inter;
            font-size: 60px;
            font-weight: 700;
            line-height: 72.61px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            text-wrap: nowrap;
            width: 525px;
            text-transform: uppercase;
            @media screen and (max-width: 1040px) {
            font-size: 30px;
            line-height: 40px;
        }
        }
        
    }
    .button-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        .start-button {
            background-color: #0337FF;
            border-width: 0px;
            padding: 1rem 2rem;
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            text-decoration: none;
        }
    }
    .bottom-box {
        width: 100%;
        border-top: 1px solid #00000080;
        padding: 1.5rem 0rem;
        margin-top: 7rem;
        .desc {
            font-family: Inter;
            font-size: 14px;
            font-weight: 300;
            line-height: 16.94px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
        }
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`

const Partenership = () => {
  return (
    <Wrapper>
      <ContentBox>
        <img className='plus' src={plus} alt="" />
        <h2>Partnership</h2>
        <div className='middle-box'>
          <div className='square'>
          </div>
          <h4>Collaboration</h4>
        </div>
        <div className='button-box'>
          <Link to={''} className='start-button'>Partnership Requests</Link>
        </div>
        <div className='bottom-box'>
          <p className='desc'>Reach out to form alliances, share insights, and co-create the future of on-chain AI</p>
        </div>
      </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Partenership)