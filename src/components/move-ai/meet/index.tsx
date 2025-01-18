import React from 'react'
import styled from 'styled-components'
import plus from '@/assets/move-ai/meet-plus.svg'
import bg from '@/assets/move-ai/bg-meet.svg'
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    title: 'Conversational On-Chain Movement',
    desc: 'Use natural language. MoveDesk translates your intent into on-chain actions',
  },
  {
    id: 2,
    title: 'Developer Assistant',
    desc: 'From coding to deployment, get real-time AI guidance to streamline your Web3 development process',
  },
  {
    id: 3,
    title: 'Launch Your Own LLM',
    desc: 'Quickly spin up and tailor your personal AI model—no deep technical expertise required',
  },
]

const Wrapper = styled.section`
    background-color: white;
    padding: 0.1rem 0rem !important;
    position: relative;
    .bg-img {
        position: absolute;
        width: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
    }
    
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 6.5rem auto;
    position: relative;
    z-index: 999;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    h5 {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: right;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #D2A600;
        @media screen and (max-width: 1040px) {
            text-align: left;
        }
    }
    h2 {
        font-family: Inter;
        font-size: 50px;
        font-weight: 600;
        line-height: 60.51px;
        text-align: right;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        margin-top: 0.4rem;
        text-transform: uppercase;
        @media screen and (max-width: 1040px) {
            flex-direction: column;
            align-items: start;
            font-size: 35px;
            line-height: 45px;
            text-align: left;
        }
    }
    .desc {
        font-family: Inter;
        font-size: 18px;
        font-weight: 500;
        line-height: 21.78px;
        text-align: right;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        margin-top: 1rem;
        @media screen and (max-width: 1040px) {
            text-align: left;
        }
    }
    .plus-svg {
        margin-bottom: 2.5rem;
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`

const FeaturesBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 2rem;
    margin-top: 1.8rem;
    position: relative;
    @media screen and (max-width: 1040px) {
        align-items: start;
    }
    .flex-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        width: 100%;
        gap: 0.6rem;
        @media screen and (max-width: 1040px) {
            align-items: start;
        }
        
        .title-box {
            list-style: inside;
            font-family: Inter;
            font-size: 18px;
            font-weight: 600;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.6rem;
            .dot {
                width: 6px;
                height: 6px;
                background-color: black;
                border-radius: 3px;
            }
        }
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: right;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #000000B2;
            @media screen and (max-width: 1040px) {
                text-align: left;
            }
        }
    }
    .try-button {
        background-color: white;
        border: 1px solid #000000;
        padding: 1rem 2.3rem;
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        text-decoration: none;
        margin-top: 1rem;
    }
`

const Meet = () => {
  return (
    <Wrapper>
      <img className='bg-img' src={bg} alt="" />
      <ContentBox>
        <h5>A Conversational Interface for On-Chain AI</h5>
        <h2>Meet MoveDesk</h2>
        <p className='desc'>MoveDesk is your gateway to interacting with MoveAI. Whether you need insights, development assistance, or to launch a custom Large Language Model (LLM)</p>
        <FeaturesBox>
          <img className='plus-svg' src={plus} alt="" />
          {
            data.map((item) => (
              <div className='flex-box' key={item.id}>
                <div className='title-box'>
                  <span className='dot'></span>
                  <span>{item.title}</span>
                </div>
                <div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          }
          <Link to={"https://www.moveai.xyz/movedesk.html"}
            onClick={(e) => {e.preventDefault();window.open("https://www.moveai.xyz/movedesk.html", "_blank");}}
            className='try-button'>
                        Try MoveDesk
          </Link>
        </FeaturesBox>
      </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Meet)