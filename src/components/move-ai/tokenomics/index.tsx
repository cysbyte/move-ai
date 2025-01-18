import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import line from '@/assets/move-ai/line2.svg'
import bg from '@/assets/move-ai/bg-tokenomics.svg'
import plus from '@/assets/move-ai/tokenomic-plus.svg'

const Wrapper = styled.section`
    position: relative;
    padding: 7rem 0rem;
    background-color: white;
    .bg-img{
        position: absolute;
        width: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
    }
    .line {
        position: absolute;
        left: 0;
        top: 14.5rem;
    }

`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 1040px;
    margin: 0rem auto;
    position: relative;
    z-index: 999;
    .plus {
        position: absolute;
        top: 1rem;
        right: 0rem;
        z-index: 999;
        display: block;
        @media screen and (max-width: 1040px) {
            display: none;
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
        text-transform: uppercase;
        @media screen and (max-width: 1040px) {
            font-size: 35px;
            line-height: 45px;
        }
    }
    .bottom-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        margin-top: 8rem;
        gap: 7rem;
        @media screen and (max-width: 1040px) {
            flex-direction: column;
            gap: 3rem;
        }
        .left-box {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            width: 500px;
            gap: 4rem;
            h4 {
                font-family: Inter;
                font-size: 40px;
                font-weight: 400;
                line-height: 48.41px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: black;
                letter-spacing: 1px;
            }
            .explore-button {
                border: 1px solid black;
                padding: 1rem 2.5rem;
                font-family: Inter;
                font-size: 16px;
                font-weight: 500;
                line-height: 19.36px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: black;
                text-decoration: none;
            }
        }
        .right-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 0rem;
        }
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`

const ItemCard = styled.div<{ id: number }>`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    border-bottom: ${(props)=>props.id < 7 ? '1px solid #00000080':'0px solid #00000080'};
    width: 100%;
    padding: 1.5rem 0rem;
    @media screen and (max-width: 1040px) {
        flex-direction: column;
        align-items: start;
    }
    h5 {
        width: 250px;
        @media screen and (max-width: 1040px) {
            width: 100%;
        }
        font-family: Inter;
        font-size: 18px;
        font-weight: 600;
        line-height: 21.78px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
    }
    .desc {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #000000B2;
        width: 100%;
        span {
            font-family: Inter;
            font-size: 16px;
            font-weight: 700;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #000000B2;
        }
    }
`

const data = [
    {
        id: 1,
        title: 'Total Supply',
        desc: <p><span>8.8</span> billion tokens</p>
    },
    {
        id: 2,
        title: 'Mining & Rewards',
        desc: <p><span>3.8</span> billion mined over <span>18</span> months for uptime and contributions</p>,

    },
    {
        id: 3,
        title: 'Initial Circulation',
        desc: <p><span>4.4</span> billion in liquidity pools</p>,
    },
    {
        id: 4,
        title: 'Team Allocation',
        desc: <p><span>600</span> million tokens (<span>2</span>-year vesting)</p>,
    },
    {
        id: 5,
        title: 'Staking & Penalties',
        desc: <p>Ensure long-term alignment with minimum staking periods and early withdrawal fees</p>,
    },
    {
        id: 6,
        title: 'Governance Benefits',
        desc: <p>Larger stakes confer greater influence in network decisions</p>,
    },
    {
        id: 7,
        title: 'Transaction Tax',
        desc: <p>Funds DAO-driven initiatives and development</p>,
    },
]

const Tokenomics = () => {
    return (
        <Wrapper>
            <img className='line' src={line} alt="" />
            <img className='bg-img' src={bg} alt="" />
            <ContentBox>
                <img className='plus' src={plus} alt="" />
                <h2>Tokenomics</h2>
                <div className='bottom-box'>
                    <div className='left-box'>
                        <h4>Incentive-Driven<br /> AI Collaboration</h4>
                        <Link className='explore-button' to={''}>Explore Tokenomics</Link>
                    </div>
                    <div className='right-box'>
                        {
                            data.map((item) => (
                                <ItemCard id={item.id}>
                                    <div>
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className='desc'>
                                        {item.desc}
                                    </div>
                                </ItemCard>
                            ))
                        }
                    </div>
                </div>
            </ContentBox>
        </Wrapper>
    )
}

export default React.memo(Tokenomics)