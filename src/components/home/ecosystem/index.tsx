import styled from 'styled-components'
import Card from './Card'
import separator from '@/assets/home/separator.svg'

const Ecosystem = () => {
  const data = [
    {
      id: 1,
      title: 'Developers',
      desc: 'Build and optimize AI applications, agents, and integrations.'
    },
    {
      id: 2,
      title: 'Data Consumers',
      desc: 'Access real-time insights and scalable AI solutions.'
    },
    {
      id: 3,
      title: 'Data Providers',
      desc: 'Contribute datasets for model training and earn rewards.'
    },
    {
      id: 4,
      title: 'AI Trainers',
      desc: 'Refine models through collaborative training and validation.'
    },
    {
      id: 5,
      title: 'Node Operators',
      desc: 'Support network security and scalability by running nodes.'
    },
    {
      id: 6,
      title: 'Governance Members',
      desc: 'Shape project direction through decentralized voting.'
    },
    {
      id: 7,
      title: 'Community Advocates',
      desc: 'Educate, promote, and grow the Neural Network community.'
    },
    {
      id: 8,
      title: 'Security Contributors',
      desc: 'Enhance ecosystem security and uphold decentralized standards.'
    },
  ]
  const Wrapper = styled.section`
        width: 100%;
        margin-top: 12rem;
        position: relative;
        @media screen and (max-width: 1040px) {
            margin-top: 5rem;
        }
        .separator {
            width: 100%;
            position: absolute;
            left: 0; 
            top: 31.8rem;
            @media screen and (max-width: 1040px) {
                display: none;
            }
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
            letter-spacing: 1px;
            span {
                color: #E75F00;
            }
            @media screen and (max-width: 1040px) {
                font-size: 30px;
                line-height: 36px;
                font-weight: 500;
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
            margin-top: 1.5rem;
        }
        .middle-box {
            width: 1040px;
            margin: auto auto;
            margin-top: 5rem;
            @media screen and (max-width: 1040px) {
                width: 100%;
                padding: 1rem;
            }
            h3 {
                font-family: Inter;
                font-size: 32px;
                font-weight: 400;
                line-height: 38.73px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
                letter-spacing: 1px;
                @media screen and (max-width: 1040px) {
                    font-size: 24px;
                    line-height: 30px;
                }
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
            .grid-container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                row-gap: 5rem;
                column-gap: 1rem;
                margin-top: 4rem;
                @media screen and (max-width: 1040px) {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                }
            }
        }
        .bottom-box {
            margin-top: 4rem;
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
    `
  return (
    <Wrapper>
      <img className='separator' src={separator} alt="" />
      <h2>The Neural Network Ecosystem <br />Decentralized AI, Globally Connected
      </h2>
      <p>A scalable, distributed infrastructure for autonomous AI applications and collaborative intelligence.</p>
      <div className='middle-box'>
        <h3>Join the Neural Network: Build Decentralized AI from Anywhere</h3>
        <p>Be part of a globally distributed effort to advance decentralized AI.</p>
        <div className='grid-container'>
          {
            data.map((item) => (
              <Card id={item.id} title={item.title} desc={item.desc} />
            ))
          }
        </div>
        <div className='bottom-box'>
          <p>CTA: Learn More</p>
          <p>Ways to Participate in the Ecosystem</p>
        </div>
      </div>


    </Wrapper>
  )
}

export default Ecosystem