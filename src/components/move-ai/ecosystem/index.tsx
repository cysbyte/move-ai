import React from 'react'
import styled from 'styled-components'
import square from '@/assets/move-ai/square.svg'
import line from '@/assets/move-ai/line.svg'
import { Link } from 'react-router-dom'

const Wrapper = styled.section`
    position: relative;
    padding: 7rem 0rem;
    background-color: black;
    position: relative;
    .line {
        position: absolute;
        left: 0;
        top: 23.3rem;
        display: block;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 1040px;
    margin: 0rem auto;
    position: relative;
    z-index: 999;
    .top-box {
        width: 701px;
        @media screen and (max-width: 1040px) {
            width: 100%;
        }
        .desc {
            font-family: Inter;
            font-size: 16px;
            font-weight: 200;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFD012;
        }
        h2 {
            font-family: Inter;
            font-size: 50px;
            font-weight: 600;
            line-height: 60.51px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            text-transform: uppercase;
            margin-top: 0.2rem;
            @media screen and (max-width: 1040px) {
                font-size: 35px;
                line-height: 45px;
            }
        }
        h4 {
            font-family: Inter;
            font-size: 40px;
            font-weight: 300;
            line-height: 48.41px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFCB06;
            text-transform: uppercase;
            margin-top: 4rem;
            @media screen and (max-width: 1040px) {
                font-size: 30px;
                line-height: 40px;
            }
        }
    }
    .button-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        .get-involved-button {
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
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`

const FeaturesBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 5rem;
    column-gap: 1rem;
    position: relative;
    margin-top: 9rem;
    @media screen and (max-width: 1040px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .item-card {
        h5 {
            font-family: Inter;
            font-size: 18px;
            font-weight: 300;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFFFFF;
        }
        .desc-box {
            display: flex;
            justify-content: center;
            align-items: start;
            gap: 0.8rem;  
            margin-top: 1rem;
            @media screen and (max-width: 1040px) {
                justify-content: start;
            }
            .square {
                margin-top: 4px;
            }
            .desc {
                font-family: Inter;
                font-size: 16px;
                font-weight: 200;
                line-height: 19.36px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #FFFFFF80;
                letter-spacing: 0.5px;
            }
        
        }
    }

`

const Ecosystem = () => {

    const data = [
        {
            id: 1,
            title: 'Developers',
            desc: 'Build decentralized AI applications and integrations',
        },
        {
            id: 2,
            title: 'Data Consumers',
            desc: 'Access scalable AI insights and real-time data',
        },
        {
            id: 3,
            title: 'Data Providers',
            desc: 'Offer datasets for model training and earn rewards',
        },
        {
            id: 4,
            title: 'AI Trainers',
            desc: 'Refine and validate models collaboratively',
        },
        {
            id: 5,
            title: 'Node Operators',
            desc: 'Support network security, scalability, and uptime',
        },
        {
            id: 6,
            title: 'Governance Members',
            desc: 'Shape the network’s future through decentralized decision-making',
        },
        {
            id: 7,
            title: 'Community Advocates',
            desc: 'Spread the word, educate, and grow the MoveAI user base',
        },
        {
            id: 8,
            title: 'Security Contributors',
            desc: 'Enhance ecosystem safety with audits and cryptographic innovations',
        },
    ]

    return (
        <Wrapper>
            <img className='line' src={line} alt="" />
            <ContentBox>
                <div className='top-box'>
                    <p className='desc'>Join the MoveAI Ecosystem: Build, Innovate, and Collaborate</p>
                    <h2>Ecosystem & Community</h2>
                    <h4>Who’s Involved?</h4>

                </div>
                <FeaturesBox>
                    {
                        data.map((item) => (
                            <div className='item-card'>
                                <h5>{item.title}</h5>
                                <div className='desc-box'>
                                    <img className='square' src={square} alt="" />
                                    <p className='desc'>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </FeaturesBox>
                <div className='button-box'>
                    <Link to={''} className='get-involved-button'>Get Involved</Link>
                </div>
            </ContentBox>
        </Wrapper>
    )
}

export default React.memo(Ecosystem)