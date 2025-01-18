import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from '@/assets/about/bg-core-features.svg'
import icon1 from '@/assets/about/core-icon1.svg'
import icon2 from '@/assets/about/core-icon2.svg'
import icon3 from '@/assets/about/core-icon3.svg'
import icon4 from '@/assets/about/core-icon4.svg'
import icon5 from '@/assets/about/core-icon5.svg'
import icon6 from '@/assets/about/core-icon6.svg'

const data = [
    {
        id: 1,
        title: 'Decentralized AI Applications',
        desc: 'Launch intelligent dApps with low transaction costs and Ethereum-grade security',
        icon: icon1,
    },
    {
        id: 2,
        title: 'Autonomous AI Agents',
        desc: 'MoveAI executes your commands flawlessly through natural communication',
        icon: icon2,
    },
    {
        id: 3,
        title: 'Real-Time Inference & Analytics',
        desc: 'Enjoy low-latency insights for dynamic sectors like finance, healthcare, and more',
        icon: icon3,
    },
    {
        id: 4,
        title: 'Privacy-First Data Handling',
        desc: 'Federated Learning and Zero-Knowledge Proofs safeguard sensitive data',
        icon: icon4,
    },
    {
        id: 5,
        title: 'Interoperable AI Marketplace',
        desc: 'Share, license, and monetize AI models, datasets, and tools in a decentralized environment',
        icon: icon5,
    },
    {
        id: 6,
        title: 'Incentive-Driven Collaboration',
        desc: 'Earn rewards for training, data contributions, and model optimization to fuel ongoing ecosystem growth',
        icon: icon6,
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
        background-color: #FFD828;
        border-width: 0px;
        padding: 1rem 3rem;
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        text-decoration: none;
        margin-top: 6rem;
        visibility: hidden;
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
    column-gap: 3rem;
    position: relative;
    margin-top: 6.2rem;
    @media screen and (max-width: 1040px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .item-card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
        gap: 0.7rem;
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
            letter-spacing: 0.1px;
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
                                <img src={item.icon} alt="" />
                                <div>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                                </div>
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