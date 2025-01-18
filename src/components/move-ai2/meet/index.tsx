import React from 'react'
import styled from 'styled-components'
import plus from '@/assets/move-ai2/meet-plus.svg'
import bg from '@/assets/move-ai2/bg-meet.svg'
import icon1 from '@/assets/move-ai2/meet-icon1.svg'
import icon2 from '@/assets/move-ai2/meet-icon2.svg'
import icon3 from '@/assets/move-ai2/meet-icon3.svg'
import twitter from '@/assets/move-ai2/social-links/twitter.svg'
import telegram from '@/assets/move-ai2/social-links/telegram.svg'

const data = [
  {
    id: 1,
    title: 'Plug-and-Play Framework',
    desc: 'Rapidly build and customize agents.',
    icon: icon1,
  },
  {
    id: 2,
    title: 'Agent Lifecycle Management',
    desc: 'Tools to train, deploy, and scale agents across Web3.',
    icon: icon2,
  },
  {
    id: 3,
    title: 'Cross-Chain Operability',
    desc: 'Enable agents to function seamlessly on multiple blockchains.',
    icon: icon3,
  },
]

const socialLinks = [
  {
    id: 1,
    name: 'twitter',
    link: 'https://x.com/move__ai',
    icon: twitter,
  },
  {
    id: 1,
    name: 'telegram',
    link: 'https://t.me/moveaiofficial',
    icon: telegram,
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
        right: -3rem;
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
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
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
        text-align: left;
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
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        margin-top: 1rem;
        letter-spacing: 0.1px;
        @media screen and (max-width: 1040px) {
            text-align: left;
        }
    }
    .plus-svg {
        margin-bottom: 2rem;
        margin-top: 2rem;
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
    align-items: start;
    gap: 2.2rem;
    margin-top: 3rem;
    position: relative;
    @media screen and (max-width: 1040px) {
        align-items: start;
    }
    .flex-box {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        width: 100%;
        gap: 0.6rem;
        @media screen and (max-width: 1040px) {
            align-items: start;
        }
        .text-box {
            h5 {
                font-family: Inter;
                font-size: 18px;
                font-weight: 700;
                line-height: 21.78px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: black;
                margin-bottom: 0.5rem;
            }
            p {
                font-family: Inter;
                font-size: 16px;
                font-weight: 300;
                line-height: 19.36px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #000000B2;
                @media screen and (max-width: 1040px) {
                    text-align: left;
                }
            }
        }
    }
    .try-button {
        background-color: #FFD828;
        padding: 1rem 2.3rem;
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        text-decoration: none;
        margin-top: 1rem;
        .link {
            cursor: pointer;
        }
    }
`

const SocialLinkButtons = styled.div`
    position: fixed;
    right: 1.5rem;
    bottom: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 1.5rem;
    background-color: black;
    padding: 1.2rem 1.1rem;
    border-radius: 5px;
    z-index: 20000;
`

const Meet = () => {
  return (
    <Wrapper>
      <img className='bg-img' src={bg} alt="" />
      <ContentBox>
        <h5>A Conversational Interface for On-Chain AI</h5>
        <h2>AI Agent Layer</h2>
        <p className='desc'>Power the creation of intelligent AI agents optimized for decentralized ecosystems.</p>
        <img className='plus-svg' src={plus} alt="" />
        <FeaturesBox>
          {
            data.map((item) => (
              <div className='flex-box' key={item.id}>
                <img src={item.icon} alt="" />
                <div className='text-box'>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          }
          {/* <a href='#/move-desk' className='try-button'>Launch move desk</a> */}
        </FeaturesBox>
      </ContentBox>
      <SocialLinkButtons>
        {
          socialLinks.map((item)=>(
            <a href={item.link} target='_blank' key={item.id}>
              <img className='link'  src={item.icon} alt="" />
            </a>
          ))
        }
      </SocialLinkButtons>
    </Wrapper>
  )
}

export default React.memo(Meet)