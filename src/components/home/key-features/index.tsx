import styled from 'styled-components'
import bg from '@/assets/home/bg-features.svg'

const Wrapper = styled.section`
    width: 100%;
    height: 662px;
    margin-top: 0rem;
    position: relative;
    @media screen and (max-width: 1040px) {
        margin-top: -10rem;
    }
    .bg-img {
        position: absolute;
        left: 0;
        bottom: 0rem;
        width: 100%;
        object-fit: cover;
        z-index: 0;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
    h2 {
        font-family: Inter;
        font-size: 44px;
        font-weight: 600;
        line-height: 53.25px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        width: 100%;
        text-align: center;
        letter-spacing: 1px;
        @media screen and (max-width: 1040px) {
            font-size: 30px;
            font-weight: 500;
            line-height: 30px;
        }
    }
    .container {
        width: 1040px;
        margin: auto auto;
        @media screen and (max-width: 1040px) {
            width: 100%;
            padding: 1rem;
        }
        .middle-box {
            width: 100%;
            margin-top: 5rem;
            h4 {
                font-family: Inter;
                font-size: 24px;
                font-weight: 600;
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
                color: white;
                margin-top: 1rem;
            }
        }
        .features-box {
            width: 1040px;
            margin-top: 5.5rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: 2.2rem;
            column-gap: 4rem;
            position: relative;
            z-index: 999;
            @media screen and (max-width: 1040px) {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
            }
            .feature-card {
                width: 490px;
                @media screen and (max-width: 1040px) {
                    width: 100%;
                }
                h3 {
                    z-index: 100;
                    font-family: Inter;
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 29.05px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: white;
                    width: 60%;
                    @media screen and (max-width: 1040px) {
                        width: 100%;
                    }
                }
                p {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 300;
                    line-height: 24x;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                    margin-top: 1rem;
                }
            }
        }
    }
`

const KeyFeatures = () => {

    const data = [
        {
            id: 1,
            title: 'Deploy Decentralized AI Applications & Agents',
            desc: 'Neural Network provides scalable AI infrastructure with low-cost transactions, delivering robust security on Ethereum.',
        },
        {
            id: 2,
            title: 'AI Agent Sequencer & OptiChain',
            desc: "OptiChain's Layer 3 and AI Agent Sequencer enable seamless, autonomous collaboration among decentralized AI agents, driving the future of decentralized AI.",
        },
        {
            id: 3,
            title: 'Cognitively Decentralized Mechanism (CogDec)',
            desc: 'CogDec validates contributions based on utility, fostering high-quality collaboration among AI agents and building a globally distributed AI ecosystem',
        },
        {
            id: 4,
            title: 'AI-Optimized Modular Architecture',
            desc: "Neural Network's modular architecture enables developers to build scalable, high-performance AI systems by separating execution, consensus, and data availability into dedicated layers.",
        },
    ]
    return (
        <Wrapper>
            <h2>Core Features</h2>
            <div className='container'>
                <div className='middle-box'>
                    <h4>The Scalable AI Infrastructure Built on Ethereum’s Security</h4>
                    <p>Neural Network is a Layer 2 AI infrastructure powered by the OP Stack, delivering secure, scalable, and optimized support for decentralized AI applications and autonomous agent deployment.</p>
                </div>
                <div className='features-box'>
                    {
                        data.map((item) => (
                            <div key={item.id} className='feature-card'>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <img className='bg-img' src={bg} height={416} alt="" />
        </Wrapper>
    )
}

export default KeyFeatures