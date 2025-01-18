import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from '@/assets/move-ai/bg-core-feature.svg'

const data = [
  {
    id: 1,
    title: 'Decentralized AI Applications',
    desc: 'Launch intelligent dApps with low transaction costs and Ethereum-grade security',
  },
  {
    id: 2,
    title: 'Autonomous AI Agents',
    desc: 'Enable complex, multi-agent interactions that leverage AI Agent Sequencer & OptiChain for seamless cooperation',
  },
  {
    id: 3,
    title: 'Real-Time Inference & Analytics',
    desc: 'Enjoy low-latency insights for dynamic sectors like finance, healthcare, and more',
  },
  {
    id: 4,
    title: 'Privacy-First Data Handling',
    desc: 'Federated Learning and Zero-Knowledge Proofs safeguard sensitive data',
  },
  {
    id: 5,
    title: 'Interoperable AI Marketplace',
    desc: 'Share, license, and monetize AI models, datasets, and tools in a decentralized environment',
  },
  {
    id: 6,
    title: 'Incentive-Driven Collaboration',
    desc: 'IEarn rewards for training, data contributions, and model optimization to fuel ongoing ecosystem growth',
  },
]

const Wrapper = styled.section`
    position: relative;
    padding: 7rem 0rem;
    .bg-img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1040px;
    margin: 0rem auto;
    position: relative;
    z-index: 999;
    p {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFD012;
        width: 100%;
    }
    h2 {
        font-family: Inter;
        font-size: 50px;
        font-weight: 600;
        line-height: 60.51px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        text-tranform: uppercase;
        width: 100%;
        margin-top: 0.3rem;
        text-transform: uppercase;
        @media screen and (max-width: 1040px) {
            font-size: 35px;
            line-height: 45px;
        }
    }
    .explore-button {
        background-color: #0337FF;
        border-width: 0px;
        padding: 1rem 3rem;
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        text-decoration: none;
        margin-top: 6rem;
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`

const FeaturesBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 5rem;
    column-gap: 5rem;
    position: relative;
    margin-top: 6.2rem;
    @media screen and (max-width: 1040px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .item-card {
        h6 {
            font-family: Inter;
            font-size: 18px;
            font-weight: 300;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFD012;
        }
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 200;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFFFFF80;
            margin-top: 1rem;
            letter-spacing: 0.5px;
        }
    }

`

const CoreFeatures = () => {
  return (
    <Wrapper>
      <img className='bg-img' src={bg} alt="" />
      <ContentBox>
        <p>Build, Train, and Deploy AI at Scale</p>
        <h2>MoveAI Core Capabilities & Features</h2>
        <FeaturesBox>
          {
            data.map((item) => (
              <div className='item-card'>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            ))
          }
        </FeaturesBox>
        <Link to={''} className='explore-button'>Explore Use Cases</Link>
      </ContentBox>
    </Wrapper>
  )
}

export default React.memo(CoreFeatures)