import styled from 'styled-components'
import Desc1 from './Desc1'
import Desc2 from './Desc2'
import Desc3 from './Desc3'
import Desc4 from './Desc4'
import separator from '@/assets/home/separator.svg'

    const Wrapper = styled.section`
        margin-top: 12rem;
        position: relative;
        .separator {
            position: absolute;
            left: 0;
            bottom: 6rem;
            width: 100%;
        }
        h2 {
            font-family: Inter;
            font-size: 44px;
            font-weight: 600;
            line-height: 53.25px;
            text-align: center;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            span {
                color: #E75F00;
            }
            @media screen and (max-width: 1040px) {
                font-size: 30px;
                line-height: 36px;
            }
        }
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 19.36px;
            text-align: center;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            margin-top: 1rem;

        }
        .middle-box {
            width: 1040px;
            margin: auto auto;
            margin-top: 6rem;
            @media screen and (max-width: 1040px) {
                width: 100%;
            }
            h4 {
                font-family: Inter;
                font-size: 32px;
                font-weight: 400;
                line-height: 38.73px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
                @media screen and (max-width: 1040px) {
                    font-size: 24px;
                    line-height: 30px;
                }
            }
            .grid-container {
                background-color: #1212121F;
                border: 1px solid #01A9C4;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 2.2fr;
                row-gap: 2rem;
                column-gap: 1.2rem;
                padding: 3rem;
                border-radius: 32px;
                margin-top: 2rem;
                @media screen and (max-width: 1040px) {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    padding: 2rem 1rem;
                }
                .grid-card {
                    width: 100%;
                    h6 {
                        font-family: Inter;
                        font-size: 24px;
                        font-weight: 400;
                        line-height: 29.05px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        color: #FFFFFF80;
                    }
                }
            }
            .flex-container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: start;
                margin-top: 3rem;
                gap: 10rem;
                @media screen and (max-width: 1040px) {
                    flex-direction: column;
                    gap: 2rem;
                }
                .flex-card {  
                    flex: 1;       
                    h6 {
                        font-family: Inter;
                        font-size: 24px;
                        font-weight: 500;
                        line-height: 29.05px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        color: white;
                    }
                    p {
                        font-family: Inter;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 19.36px;
                        text-align: left;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        color: #FFFFFF80;
                        margin-top: 0.8rem;
                    }
                }
            }
            .bottom-box {
                margin-top: 5rem;
                & > p: first-child {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                    width: auto;
                }
                & > p: last-child {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19.36px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    width: auto;
                    margin-top: 1rem;
                }
            }
        }
    `

const Incentive = () => {
    const data1 = [
        {
            id: 1,
            title: "Total Supply",
            desc: <Desc1 />
        },
        {
            id: 2,
            title: "Team Allocation",
            desc: <Desc2 />
        },
        {
            id: 3,
            title: "Total Supply",
            desc: <Desc3 />
        },
        {
            id: 4,
            title: "Mining & Rewards",
            desc: <Desc4 />
        },
    ]
    const data2 = [
        {
            id: 1,
            title: "Staking & Penalties",
            desc: "Minimum staking duration with early withdrawal penalties"
        },
        {
            id: 2,
            title: "Governance Benefits",
            desc: "Enhanced rights for large contributors"
        },
        {
            id: 3,
            title: "Transaction Tax",
            desc: "Funding for DAOAgent"
        },
    ]

    // const GradientBorderWrapper = styled.div`
    //     background: conic-gradient(from 90deg at 50% 50%, #E75F00 0deg, #000000 79.2deg, #E75F00 360deg);
    //     border-radius: 32px;
    //     padding: 1px;
    //     width: 100%;
    //     height: auto;
    //     margin-top: 2rem;
    // `
    return (
        <Wrapper>
            <img className='separator' src={separator} alt="" />
            <h2>Incentive-Driven AI Collaboration</h2>
            <p>Rewarding users for impactful contributions in AI training, data processing, and model optimization, fostering a collaborative and high-<br />performance AI ecosystem.</p>
            <div className='middle-box'>
                <h4>Tokenomics</h4>

                <div className='grid-container'>
                    {
                        data1.map((item) => (
                            <div key={item.id} className='grid-card' >
                                <h6>{item.title}</h6>
                                {item.desc}
                            </div>
                        ))
                    }
                </div>

                <div className='flex-container'>
                    {
                        data2.map((item) => (
                            <div key={item.id} className='flex-card'>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='bottom-box'>
                    <p>CTA: Explore Neural Network [Link]</p>
                    <p>[Graphical Virtualization tokenomics ]</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Incentive