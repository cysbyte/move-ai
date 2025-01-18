import React from 'react'
import styled from 'styled-components'
import bg from '@/assets/shield-core/bg-real-time.svg'
import icon1 from '@/assets/shield-core/icon1.svg'
import icon2 from '@/assets/shield-core/icon2.svg'
import icon3 from '@/assets/shield-core/icon3.svg'

const Wrapper = styled.section`
    background-color: white;
    padding: 0.1rem 0rem;
    position: relative;
    background-color: #FFD828;
    
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 11rem auto 9rem auto;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
        flex-direction: column;
        gap: 3rem;
    }
    .left-box {
        width: 510px;
        @media screen and (max-width: 1040px) {
            width: 100%;
        }
        h1 {
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
        .desc {
            width: 428px;
            font-family: Inter;
            font-size: 18px;
            font-weight: 300;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            padding: 2.5rem 0rem 5rem 0rem;
        }
    
    }
    .right-box {
        width: 458px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        @media screen and (max-width: 1040px) {
            width: 100%;
        }
        .item-card {
            width: 100%;
            padding: 1.5rem 3rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #000000;
            border-radius: 16px;
            background: linear-gradient(180deg, #FFD828 0%, rgba(255, 255, 255, 0.7) 100%);
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
    
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    
`

const RealTime = () => {
    const data = [
        {
            id: 1,
            title: 'Smart Risk Detection',
            desc: 'Continuously analyzes dApps, transactions, and contracts for potential threats',
            icon: icon1,
        },
        {
            id: 2,
            title: 'AI-Powered Security',
            desc: 'Provides alerts for vulnerabilities in real time',
            icon: icon2,
        },
        {
            id: 3,
            title: 'Movement Ecosystem Optimization',
            desc: 'Seamlessly integrated with Movement network applications',
            icon: icon3,
        },
    ]
    return (
        <Wrapper>
            <ContentBox>
                <div className='left-box'>
                    <h1>Real-Time Threat Detection</h1>
                    <p className='desc'>ShieldCore Suite scans your interactions across GameFi and DeFi applications to detect vulnerabilities like phishing sites, malicious contracts, and scam tokens</p>
                    <img src={bg} alt="" />
                </div>
                <div className='right-box'>
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

export default React.memo(RealTime)