import styled from 'styled-components'
import bgBuild from '@/assets/home/bg-build.svg'

const Wrapper = styled.section`
    width: 100%;
    margin-top: 12.5rem;
    position: relative;
    @media screen and (max-width: 1040px) {
        margin-top: 5rem;
    }
    .bg-img {
        position: absolute;
        right: 0;
        top: 7rem;
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
        width: 100%;
        span {
            color: #E75F00;
        }
        @media screen and (max-width: 1040px) {
            font-size: 30px;
            font-weight: 500;
            line-height: 36px;
        }
    }
    .middle-box {
        width: 1040px;
        margin: auto auto;
        @media screen and (max-width: 1040px) {
            width: 100%;
            padding: 1rem;
        }
        .container { 
            height: 708px;
            border: 0px solid #414141;
            background-color: #1111155C;
            border-radius: 32px;
            padding: 1.2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 0rem;    
            margin-top: 4.5rem;   
            @media screen and (max-width: 1040px) {
                flex-direction: column;
                height: auto;
                gap: 1.5rem;
                padding: 0rem;
                border-width: 0px;
            }
        }
        .bottom-desc {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFFFFF80;
            margin-top: 1.5rem;
        }
    }
`

const Build = () => {
  const leftData = [
    {
      id: 1,
      title: 'Decentralized Model Training',
      desc: "Leverage global resources to train AI models collaboratively without a central server."
    },
    {
      id: 2,
      title: 'Real-Time Inference',
      desc: "Low-latency AI insights, ideal for real-time applications like finance and healthcare."
    },
    {
      id: 3,
      title: 'Optimized Performance Monitoring',
      desc: "Real-time analytics for continuous AI improvement."
    },
  ]
  const rightData = [
    {
      id: 1,
      title: 'AI Collaboration & Knowledge Sharing',
      desc: "AI agents share insights across chains, enhancing model effectiveness.",
    },
    {
      id: 2,
      title: 'Privacy-First Data Handling',
      desc: "Rewards for contributions, powering a dynamic AI ecosystem.",
    },
    {
      id: 3,
      title: 'Privacy-First Data Handling',
      desc: "Zero-knowledge proofs and Federated Learning protect data privacy in training.",
    },
    {
      id: 4,
      title: 'Interoperable AI Marketplace',
      desc: "A decentralized space for AI asset sharing, licensing, and monetization.",
    },
  ]

  const LeftContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1.3rem;
        height: 100%;
        width: 319px;
        @media screen and (max-width: 1040px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        .left-card {
            border-radius: 32px;
            border: 1px solid #01A9C4;
            background-color: #1212121F;
            border-radius: 32px;    
            padding: 2rem 1.2rem 2rem 1.5rem;
            height: 100%;
            flex: 1;
            @media screen and (max-width: 1040px) {
                width: 100%;
                padding: 1rem;
            }
            h3 {
                font-family: Inter;
                font-size: 24px;
                font-weight: 400;
                line-height: 29.05px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
                letter-spacing: 0.5px;
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
                margin-top: 1.2rem;
                letter-spacing: 0.3px;
            }
        }
    `
  const RightContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 1.2rem;
        column-gap: 1.2rem;
        width: 658px;
        height: 100%;
        @media screen and (max-width: 1040px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
        
        .right-card {
            border-radius: 32px;
            border: 1px solid #01A9C4;
            background-color: #1212121F;
            border-radius: 32px;
            padding: 2rem 1.2rem 2rem 1.5rem;
            width: 319px;
            @media screen and (max-width: 1040px) {
                width: 100%;
            }
            h3 {
                font-family: Inter;
                font-size: 24px;
                font-weight: 400;
                line-height: 29.05px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
                letter-spacing: 0.5px;
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
                margin-top: 1.2rem;
                letter-spacing: 0.5px;
            }
        }
    `
  return (
    <Wrapper>
      <img className='bg-img' src={bgBuild} alt="" />
      <h2>Build, Train, and Deploy AI, Your Way!</h2>
      <div className='middle-box'>
        <div className='container'>
          <LeftContainer>
            {
              leftData.map((item) => (
                <div key={item.id} className='left-card'>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))
            }
          </LeftContainer>
          <RightContainer>
            {
              rightData.map((item) => (
                <div key={item.id} className='right-card'>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))
            }
          </RightContainer>
        </div>
        <p className='bottom-desc'>CTA: Explore Use cases. [Link]</p>
      </div>
    </Wrapper>
  )
}

export default Build