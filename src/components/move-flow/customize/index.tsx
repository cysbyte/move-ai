import React from 'react'
import styled from 'styled-components'
import icon1 from '@/assets/move-flow/customize/icon1.svg'
import icon2 from '@/assets/move-flow/customize/icon2.svg'
import icon3 from '@/assets/move-flow/customize/icon3.svg'
import bg from '@/assets/move-flow/customize/bg.svg'

const Wrapper = styled.section`
    background-color: #FFD828;
    padding: 0.1rem 0rem;
    position: relative;
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 7.5rem auto 9rem auto;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
        flex-direction: column;
        gap: 3rem;
    }
    .top-box {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 1040px) {
            width: 100%;
            padding: 1rem;
            flex-direction: column;
            gap: 3rem;
        }
        h1 {
            width: 518px;
            font-family: Inter;
            font-size: 50px;
            font-weight: 600;
            line-height: 60.51px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            @media screen and (max-width: 1040px) {
                font-size: 40px;
                line-height: 50px;
                width: 100%;
            }
        }
        p {
            width: 428px;
            font-family: Inter;
            font-size: 18px;
            font-weight: 300;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            letter-spacing: 0.5px;
            @media screen and (max-width: 1040px) {
                width: 100%;
            }
        }
    }
    .bottom-box {
        width: 100%;
        margin-top: 5rem;
        border: 1px solid black;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        padding: 0rem 4rem 3.3rem 4rem;
        position: relative;
        @media screen and (max-width: 1040px) {
            width: 100%;
            padding: 1rem 1rem 1rem 2rem;
        }
        .bg-img {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(0%, -50%);
            @media screen and (max-width: 1040px) {
                display: none;
            }
        }
        .item-card {  
            display: flex;
            flex-direction: row;
            justify-content: end;
            align-items: center;
            padding: 2rem 2rem;
            border-bottom: 1px solid #00000020;
            width: 100%;
            gap: 2.2rem;
            @media screen and (max-width: 1040px) {
                width: 100%;
                padding: 2rem 0rem;
            }
            .item-card-right {
                padding: 0.6rem 2rem;
                width: 280px;
                @media screen and (max-width: 1040px) {
                    width: 100%;
                    pading: 0;
                }
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

const Customerize = () => {

  const data = [
    {
      id: 1,
      title: 'DeFi Use Cases',
      desc: 'Launch staking pools, liquidity mining, and more',
      icon: icon1,
    },
    {
      id: 2,
      title: 'NFT Minting Made Easy',
      desc: 'Create, distribute, and manage NFT collections',
      icon: icon2,
    },
    {
      id: 3,
      title: 'DAO Governance',
      desc: 'Build secure voting and decision-making systems',
      icon: icon3,
    },
  ]
  return (
    <Wrapper>
      <ContentBox>
        <div className='top-box'>
          <h1>Customize contracts to match your vision</h1>
          <p>With MoveFlow, you can tailor smart contracts to fit your specific needs. From DeFi protocols to NFT marketplaces, empower your vision with flexibility and simplicity. Customize, preview, and deploy—all in one platform</p>
        </div>
        <div className='bottom-box'>
          <img className='bg-img' src={bg} alt="" />
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

export default React.memo(Customerize)