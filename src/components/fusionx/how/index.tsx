import React from 'react'
import styled from 'styled-components'
import icon1 from '@/assets/fusionx/how/icon1.svg'
import icon2 from '@/assets/fusionx/how/icon2.svg'
import icon3 from '@/assets/fusionx/how/icon3.svg'
import icon4 from '@/assets/fusionx/how/icon4.svg'
import arrow1 from '@/assets/fusionx/how/arrow1.svg'
import arrow2 from '@/assets/fusionx/how/arrow2.svg'

const Wrapper = styled.section`
    background-color: white;
    padding: 0.1rem 0rem;
    position: relative;
    background-color: #FFCB06;
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 9rem auto 6rem auto;
    position: relative;
    z-index: 999;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    h1 {
        font-family: Inter;
        font-size: 50px;
        font-weight: 700;
        line-height: 60.51px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
    }
    .bottom-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 3rem;
        gap: 0;
        @media screen and (max-width: 1040px) {
            flex-direction: column;
            gap: 2rem;
        }
        .item-card {
            width: 248px;
            height: 437px;
            padding: 2rem 1.6rem 3.3rem 1rem;
            background-color: white;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            gap: 3rem;
            @media screen and (max-width: 1040px) {
                width: 100%;
                height: auto;
                padding: 1rem;
            }
            .top-box {
                .icon-box {
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    align-items: center;
                    gap: 1rem;
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
                    margin-top: 3rem;
                    span {
                        color: #D09F00;
                    }   
                }       
            }
            .desc-box {
                width: 100%;
                height: 76px;
                p {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 300;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    margin-top: 1rem;
                }
            }
        }
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
        flex-direction: column;
        gap: 3rem;
    }
`

const How = () => {

  const data = [
    {
      id: 1,
      title: <h5><span>Choose an AI</span><br/> Template Pick from a library of AI personalities, task-specific agents, or build one from scratch</h5>,
      desc: 'Examples: Trading bots, Gaming NPCs, Social AI, Assistants for dApps',
      icon: icon1,
      arrow: arrow1,
    },
    {
      id: 2,
      title: <h5><span>Customize AI Behavior</span><br/> Fine-tune skills, interaction patterns, and autonomy level</h5>,
      desc: 'Examples: Set financial logic for DeFi agents, create engagement rules for social AI',
      icon: icon2,
      arrow: arrow1,
    },
    {
      id: 3,
      title: <h5><span>Deploy on Movement</span><br/> One-click launch your AI Agent to interact with users and other AI Agents</h5>,
      desc: 'Runs securely on-chain with transparent tracking and smart contract automation',
      icon: icon3,
      arrow: arrow1,
    },
    {
      id: 4,
      title: <h5><span>Monetize AI</span><br/> Create a marketplace for AI Agents as NFTs or offer AI-powered services</h5>,
      desc: 'Enable AI Agents to generate revenue by performing automated on-chain actions',
      icon: icon4,
      arrow: arrow2,
    },
  ]

  return (
    <Wrapper>
      <ContentBox>
        <h1>How FusionX Works?</h1>
        <div className='bottom-box'>
          {
            data.map((item) => (
              <div className='item-card'>
                <div className='top-box'>
                  <div className='icon-box'>
                    <img src={item.icon} alt="" />
                    <img src={item.arrow} alt="" />
                  </div>
                  {item.title}
                </div>
                <div className='desc-box'>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </ContentBox>
    </Wrapper>
  )
}

export default React.memo(How)