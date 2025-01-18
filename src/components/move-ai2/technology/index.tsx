import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import icon1 from '@/assets/move-ai2/tech-icon1.svg'
import icon2 from '@/assets/move-ai2/tech-icon2.svg'
import icon3 from '@/assets/move-ai2/tech-icon3.svg'

const Wrapper = styled.section`
    background-color: #FFD828;
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
    margin: 1rem auto;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        gap: 1.5rem;
        padding-bottom: 2rem;
        h5 {
            font-family: Inter;
            font-size: 24px;
            font-weight: 700;
            line-height: 29.05px;
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
            color: #000000B2;
            margin-top: -0.4rem;
        }
        
    }
`

const GridBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2rem;
    column-gap: 2rem;
    margin-bottom: 5rem;
    @media screen and (max-width: 1040px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .item-card {
        h5 {
            font-family: Inter;
            font-size: 18px;
            font-weight: 700;
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
            color: #000000B2;
            margin-top: 0.7rem;
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
        title: 'FusionX Suite',
        desc: 'Unleash creativity with AI and user-generated content.',
        icon: icon1,
    },
    {
        id: 2,
        title: 'ShieldCore Suite',
        desc: 'Safeguard your AI agents and decentralized applications.',
        icon: icon2,
    },
    {
        id: 3,
        title: 'Smart Contract Automation',
        desc: 'Empower your agents with secure, intelligent smart contracts.',
        icon: icon3,
    },
]

const data2 = [
    {
        id: 1,
        title: 'AI-Assisted Asset Creation:',
        desc: 'Generate 3D models, game assets, and more.',
    },
    {
        id: 2,
        title: 'AI-Driven Threat Detection:',
        desc: 'Protect against vulnerabilities like reentrancy attacks.',
    },
    {
        id: 3,
        title: 'Natural Language to Code:',
        desc: 'Easily generate and deploy contracts.',
    },
    {
        id: 4,
        title: 'Personalized Interactions:',
        desc: 'Tailor user experiences with customizable AI personalities.',
    },
    {
        id: 5,
        title: 'Encryption & Privacy:',
        desc: 'Ensure secure and compliant interactions with decentralized methods.',
    },
    {
        id: 6,
        title: 'Optimization Tools:',
        desc: 'Reduce gas costs and improve contract performance.',
    },
]

const Technology = () => {
  return (
    <Wrapper>
        <ContentBox>
            <FeaturesBox>
                {
                    data.map((item)=>(
                        <div key={item.id} className='item-card'>
                            <img src={item.icon} alt="" />
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                            <svg width="27" height="1" viewBox="0 0 27 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="27" y2="0.5" stroke="black"/>
                            </svg>
                        </div>
                    ))
                }
            </FeaturesBox>
            <GridBox>
                {
                    data2.map((item)=>(
                        <div className='item-card'>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </GridBox>

        </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Technology)