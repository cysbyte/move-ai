import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import plus from '@/assets/move-ai/scalable-plus.svg'
import icon1 from '@/assets/about/scalable-icon1.svg'
import icon2 from '@/assets/about/scalable-icon2.svg'
import icon3 from '@/assets/about/scalable-icon3.svg'
import icon4 from '@/assets/about/scalable-icon4.svg'
import { useDialogContext } from '@/providers/DialogProvider'

const data = [
    {
        id: 1,
        title: 'Conversational On-chain Movement',
        desc: 'MoveAI executes your commands flawlessly through natural communication',
        icon: icon1,
    },
    {
        id: 2,
        title: 'Modular Architecture',
        desc: 'Execution, consensus, and data availability layers are separated for optimal performance',
        icon: icon2,
    },
    {
        id: 3,
        title: 'AI Agent Sequencer & L3 OptiChain',
        desc: 'Autonomous agents collaborate seamlessly, coordinating complex tasks without manual intervention',
        icon: icon3,
    },
    {
        id: 4,
        title: 'Cognitively Decentralized Mechanism (CogDec)',
        desc: 'Contributions are validated by utility, fostering a globally distributed, high-quality AI ecosystem',
        icon: icon4,
    },
]

const Wrapper = styled.section`

`

const ContentBox = styled.div`
    width: 1040px;
    margin: 6.5rem auto;
    position: relative;
    z-index: 999;
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
        letter-spacing: 1px;
        @media screen and (max-width: 1040px) {
            flex-direction: column;
            align-items: start;
            font-size: 35px;
            line-height: 45px;
        }
    }
    .desc {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFD012;
        letter-spacing: 0.2px;
        margin-top: 1rem;
    }

    .plus-svg {
        position: absolute;
        right: 0;
        top: 9rem;
        display: block;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
    
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`

const FeaturesBox = styled.div`
    width: 687px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2rem;
    margin-top: 3.5rem;
    padding-bottom: 3rem;
    position: relative;
    
    .flex-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        @media screen and (max-width: 1040px) {
            flex-direction: column;
            align-items: start;
        }

        .title-box {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 0.7rem;
        }
        
        h5 {
            font-family: Inter;
            font-size: 18px;
            font-weight: 400;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            width: 266px;
        }
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFFFFF80;
        }
    }
    .learn-button {
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
        margin-top: 1.6rem;
    }
`

const Scalable = () => {
    const {setShowSubMenu} = useDialogContext()
    return (
        <Wrapper onClick={()=>setShowSubMenu(false)}>
            <ContentBox>
                <h2>The Scalable AI Infrastructure on Movement</h2>
                <p className='desc'>MoveAi is a Layer 2 AI infrastructure that merges the modular Ethereum-centric approach with AI-driven execution and decentralized collaboration</p>
                <FeaturesBox>
                    {
                        data.map((item) => (
                            <div className='flex-box' key={item.id}>
                                <div className='title-box'>
                                    <img src={item.icon} alt="" />
                                    <h5>{item.title}</h5>
                                </div>
                                <div>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                </FeaturesBox>
            </ContentBox>
        </Wrapper>
    )
}

export default React.memo(Scalable)