import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from '@/assets/move-ai/bg-technology.svg'

const Wrapper = styled.section`
    background-color: white;
    padding: 0.5rem 0rem;
    position: relative;
    background-color: #FFD828;
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
    width: 1040px;
    margin: 6.5rem auto;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .desc {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
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
        color: black;
        width: 100%;
        margin-top: 0.5rem;
        text-transform: uppercase;
        @media screen and (max-width: 1040px) {
            font-size: 35px;
            line-height: 45px;
        }
    }
    .view-button {
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
        margin-top: 2.5rem;
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
    align-items: center;
    gap: 2.5rem;
    margin-top: 5.5rem;
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
        gap: 2.6rem;
        border-bottom: 1px solid black;
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
    font-weight: 500;
    line-height: 29.05px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: black;
    width: ${(props)=>props.id===2?'50%':'60%'}
`

const data = [
    {
        id: 1,
        title: 'AI-Powered Execution Layer',
        desc: 'Trains, validates, and infers AI models directly on EVM’s',
    },
    {
        id: 2,
        title: 'Consensus Layer',
        desc: 'Verifies contributions, ranks quality, and ensures top-tier model performance',
    },
    {
        id: 3,
        title: 'Transparent Data Availability',
        desc: 'Accessible, verifiable data builds trust and unlocks decentralized collaboration',
    },
]

const Technology = () => {
  return (
    <Wrapper>
        <img className='bg-img' src={bg} alt="" />
        <ContentBox>
            <p className='desc'>A Purpose-Built Modular Design for Decentralized AI</p>
            <h2>Technology Stack</h2>
            <Link to={''} className='view-button'>View Technical Docs</Link>
            <FeaturesBox>
                {
                    data.map((item)=>(
                        <div key={item.id} className='item-card'>
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

export default React.memo(Technology)