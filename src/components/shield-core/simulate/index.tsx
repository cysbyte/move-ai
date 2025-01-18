import React from 'react'
import styled from 'styled-components'
import icon1 from '@/assets/simulate/icon1.svg'
import icon2 from '@/assets/simulate/icon2.svg'
import icon3 from '@/assets/simulate/icon3.svg'
import border from '@/assets/simulate/border.svg'

const Wrapper = styled.section`
    background-color: white;
    padding: 0.1rem 0rem;
    position: relative;
    background-color: white;
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 6.8rem auto 6.5rem auto;
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
    
    .border {
        position: absolute;
        left: 0;
        top: 0;
    }
    .left-box {
        width: 428px;
        @media screen and (max-width: 1040px) {
            width: 100%;
        }
        h1 {
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
            }
        }
        p {
            font-family: Inter;
            font-size: 18px;
            font-weight: 400;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            margin-top: 2.2rem;
        }
    }
    .right-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 523px;
        @media screen and (max-width: 1040px) {
            width: 100%;
        }
        .item-card {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 2.1rem 4rem;
            border-bottom: 1px solid #00000040;
            @media screen and (max-width: 1040px) {
                width: 100%;
                padding: 2rem 1rem;
            }
            .item-card-right {
                width: 210px;
                h5 {
                    font-family: Inter;
                    font-size: 18px;
                    font-weight: 500;
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

const Simulate = () => {
    const data = [
        {
            id: 1,
            title: 'High Risk',
            desc: 'A contract flagged for phishing attempts or wallet drainers',
            icon: icon1,
        },
        {
            id: 2,
            title: 'Medium Risk',
            desc: 'Transactions with unusual patterns or unverified contracts',
            icon: icon2,
        },
        {
            id: 3,
            title: 'Low Risk',
            desc: 'Verified contracts with minimal vulnerabilities',
            icon: icon3,
        },
    ]

    return (
        <Wrapper>
            <ContentBox>
                <img className='border' src={border} alt="" />
                <div className='left-box'>
                    <h1>Simulate Interactions for Safer Web3 Transactions</h1>
                    <p>
                        ShieldCore allows you to simulate actions like token approvals and interactions with DeFi protocols. See risks and potential outcomes before committing to a transaction
                    </p>
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

export default React.memo(Simulate)