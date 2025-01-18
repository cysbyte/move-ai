import React from 'react'
import styled from 'styled-components'
import icon1 from '@/assets/move-flow/from/icon1.svg'
import icon2 from '@/assets/move-flow/from/icon2.svg'
import icon3 from '@/assets/move-flow/from/icon3.svg'
import arrow from '@/assets/move-flow/from/arrow.svg'
import bg from '@/assets/move-flow/from/bg.svg'

const Wrapper = styled.section`
    background-color: white;
    padding: 0.1rem 0rem;
    position: relative;
    .bg-img {
        position: absolute;
        left: 0;
        bottom: 0;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 7.5rem auto 9rem auto;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
        flex-direction: column;
        gap: 3rem;
    }
    .left-box {
        h1 {
            width: 525px;
            @media screen and (max-width: 1040px) {
                width: 100%;
            }
            font-family: Inter;
            font-size: 50px;
            font-weight: 700;
            line-height: 60.51px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            @media screen and (max-width: 1040px) {
                font-size: 40px;
                line-height: 50px;
            }
        }
        p {
            width: 428px;
            @media screen and (max-width: 1040px) {
                width: 100%;
            }
            font-family: Inter;
            font-size: 18px;
            font-weight: 400;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            letter-spacing: 0.2px;
            margin-top: 2rem;
        }
    }
    .right-box {
        width: 496px;
        @media screen and (max-width: 1040px) {
            width: 100%;
        }
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5.2rem;
        position: relative;
        .arrow1 {
            position: absolute;
            left: 50%;
            top: 27%;
            transform: translate(-50%, 0%);
        }
        .arrow2 {
            position: absolute;
            left: 50%;
            top: 64.5%;
            transform: translate(-50%, 0%);
        }
        .item-card {
            width: 100%;
            height: 180px;
            padding: 2.5rem 4rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-radius: 16px;
            background: #FFD828;
            @media screen and (max-width: 1040px) {
                width: 100%;
                padding: 1rem;
            }
            .item-card-right {
                width: 210px;
                h5 {
                    font-family: Inter;
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 21.78px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: black;
                }
                p {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: black;
                    margin-top: 1rem;
                }
            }
        }
    }
`

const From = () => {

  const data = [
    {
      id: 1,
      title: 'Select a Template',
      desc: 'Choose from our library of ready-to-use templates for DeFi, NFTs, or DAOs',
      icon: icon1,
    },
    {
      id: 2,
      title: 'Customize Parameters',
      desc: 'Adjust your contract settings like rewards, fees, and durations with an intuitive editor',
      icon: icon2,
    },
    {
      id: 3,
      title: 'Deploy with One Click',
      desc: 'Launch directly to the blockchain with automatic gas optimization and built-in security checks',
      icon: icon3,
    },
  ]

  return (
    <Wrapper>
      <img className='bg-img' src={bg} alt="" />
      <ContentBox>
        <div className='left-box'>
          <h1>From idea to deployment in three simple steps</h1>
          <p>MoveFlow simplifies smart contract creation with a step-by-step process anyone can follow</p>
        </div>
        <div className='right-box'>
          <img src={arrow} className='arrow1' alt="" />
          <img src={arrow} className='arrow2' alt="" />
          {
            data.map((item) => (
              <div className='item-card'>
                <img src={item.icon} alt="" />
                <div className='item-card-right'>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>))
          }
        </div>
      </ContentBox>
    </Wrapper>
  )
}

export default React.memo(From)