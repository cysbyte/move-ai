import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from '@/assets/about/bg-building.svg'
import icon1 from '@/assets/about/building-icon1.svg'
import icon2 from '@/assets/about/building-icon2.svg'
import icon3 from '@/assets/about/building-icon3.svg'

const Wrapper = styled.section`
    background-color: white;
    padding: 0.1rem 0rem;
    position: relative;
    background-color: #FFD828;
    .bg-img{
        position: absolute;
        top: 5.6rem;
        left: 37rem;
    }
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 6.5rem auto;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    .desc {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        letter-spacing: -0.3px;
        color: black;
        width: 100%;
    }
    h2 {
        font-family: Inter;
        font-size: 50px;
        font-weight: 700;
        line-height: 60.51px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        width: 100%;
        margin-top: 0.5rem;
        @media screen and (max-width: 1040px) {
            font-size: 35px;
            line-height: 45px;
        }
    }
    .explore-button {
        background-color: black;
        border-width: 0px;
        padding: 1rem 2.5rem;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        text-decoration: none;
        margin-top: 2.4rem;
        visibility: hidden;
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    
`

const FeaturesBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 2.5rem;
    margin-top: 2.5rem;
    position: relative;
    @media screen and (max-width: 1040px) {
        flex-direction: column;
        gap: 1rem;
    }
    .item-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 100%;
        gap: 1.5rem;
        padding-bottom: 2rem;
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #000000B2;
        }
    }
`

const Title = styled.h5<{id: number}>`
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: black;
    width: ${(props)=>props.id===2?'100%':'100%'}
`

const data = [
    {
        id: 1,
        title: 'AI Agent Engine Layer',
        desc: 'Simplify the creation and deployment of autonomous AI agents.',
        icon: icon1,
    },
    {
        id: 2,
        title: 'Custom AI Solutions',
        desc: 'From smart contracts to data intelligence, MoveAI provides a suite of tools for Web3 development.',
        icon: icon2,
    },
    {
        id: 3,
        title: 'Seamless Blockchain Integration',
        desc: 'Build scalable and secure AI solutions that connect across multiple chains.',
        icon: icon3,
    },
]

const Building = () => {
  return (
    <Wrapper>
        <img className='bg-img' src={bg} alt="" />
        <ContentBox>
            <p className='desc'>A Purpose-Built Modular Design for Decentralized AI</p>
            <h2>Building the Future of AI on Movement</h2>
            <Link to={''} className='explore-button'>Explore AI Solutions</Link>
            <FeaturesBox>
                {
                    data.map((item)=>(
                        <div key={item.id} className='item-card'>
                            <img src={item.icon} alt="" />
                            <Title id={item.id}>{item.title}</Title>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </FeaturesBox>
        </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Building)