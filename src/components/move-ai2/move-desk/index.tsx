import icon1 from '@/assets/move-ai2/move-desk/icon1.svg'
import icon2 from '@/assets/move-ai2/move-desk/icon2.svg'
import icon3 from '@/assets/move-ai2/move-desk/icon3.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from '@/assets/move-ai2/bg-move-desk.svg'

const data = [
    {
        id: 1,
        title: 'Real-Time Support:',
        desc: 'Instant assistance for all your queries and challenges.',
        icon: icon1,
    },
    {
        id: 2,
        title: 'Insightful Analytics:',
        desc: 'Gain actionable insights to optimize your projects.',
        icon: icon2,
    },
    {
        id: 3,
        title: 'Seamless Integration:',
        desc: 'Effortlessly connects with various Movement blockchain applications.',
        icon: icon3,
    },
]

const Wrapper = styled.section`
    position: relative;
    .bg-img{
        position: absolute;
        width: 100%;
        object-fit: cover;
        left: 0;
        top: -6rem;
    }
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 6.5rem auto 3rem auto;
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
        font-size: 24px;
        font-weight: 400;
        line-height: 29.05px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFCB06;
        letter-spacing: 0.2px;
        margin-top: 1rem;
        text-transform: uppercase;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2rem;
    margin-top: 3.8rem;
    padding-bottom: 3rem;
    position: relative;
    
    .flex-box {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        width: 100%;
        gap: 0.7rem;
        @media screen and (max-width: 1040px) {
            flex-direction: column;
            align-items: start;
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
            margin-top: 0.7rem;
        }
    }
    .learn-button {
        background-color: #FFD828;
        border-width: 0px;
        padding: 1rem 3rem;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        text-decoration: none;
        margin-top: 1.6rem;
    }
`

const MoveDesk = () => {
    return (
        <Wrapper>
            <img className='bg-img' src={bg} alt="" />
            <ContentBox>
                <h2>Move Desk</h2>
                <p className='desc'>Al-Powered Gateway to the Movement Ecosystem</p>
                <FeaturesBox>
                    {
                        data.map((item) => (
                            <div className='flex-box' key={item.id}>
                                <img src={item.icon} alt="" />
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }

                <Link target='_blank' to={'https://www.moveai.xyz/movedesk.html'} className='learn-button'>Try MoveDesk</Link>
                </FeaturesBox>
            </ContentBox>
        </Wrapper>
    )
}

export default React.memo(MoveDesk)