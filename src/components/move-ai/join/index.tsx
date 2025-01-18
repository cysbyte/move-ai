import React from 'react'
import styled from 'styled-components'
import twitter from '@/assets/move-ai/social/twitter.svg'
import telegram from '@/assets/move-ai/social/telegram.svg'
import github from '@/assets/move-ai/social/github.svg'
import b from '@/assets/move-ai/social/b.svg'

const Wrapper = styled.section`
    position: relative;
    padding: 7rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;

`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 1040px;
    margin: 0rem auto;
    position: relative;
    z-index: 999;
    h6 {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFD012
    }
    h2 {
        font-family: Inter;
        font-size: 50px;
        font-weight: 600;
        line-height: 60.51px;
        text-align: right;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        text-transform: uppercase;
        @media screen and (max-width: 1040px) {
            font-size: 35px;
            line-height: 45px;
        }
    }
    .desc {
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 21.78px;
        text-align: right;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFFFFF80;
        margin-top: 2rem;
        letter-spacing: 0.2px;
    }
    .bottom-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 3rem;
        gap: 3rem;
        .left-box {
            width: 463px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            img {
                width: auto;
                @media screen and (max-width: 1040px) {
                    width: 40px;
                    
                }
            }
        }
        .right-box {
            flex: 1;
            width: 100%;
            display: block;
            .square {
                width: 453px;
                height: 65px;
                border-bottom: 1px solid white;
                border-right: 1px solid white;
                margin-bottom: 4rem;
            }
            @media screen and (max-width: 1040px) {
                display: none;
            }
        }
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`

const Join = () => {
  return (
    <Wrapper>
      <ContentBox>
        <h6>Community & Resources</h6>
        <h2>Join the MoveAI<br/> Community</h2>
        <p className='desc'>Sensitive industries require trust. MoveAI’s privacy-first approach ensures data security without sacrificing<br/> performance, enabling sectors like healthcare to adopt decentralized AI confidently</p>
        <div className='bottom-box'>
          <div className='left-box'>
            <img src={twitter} alt="" />
            <img src={telegram} alt="" />
            <img src={github} alt="" />
            <img src={b} alt="" />
          </div>
          <div className='right-box'>
            <div className='square'></div>
          </div>
        </div>
      </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Join)