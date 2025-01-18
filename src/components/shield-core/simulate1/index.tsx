import React from 'react'
import styled from 'styled-components'
import bg from '@/assets/shield-core/bg-simulate1.svg'

const Wrapper = styled.section`
    background-color: #FFD828;
    padding: 0.1rem 0rem;
    position: relative;
    .bg-img {
        position: absolute;
        top: 0;
        right: 0;
    }
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 6.8rem auto 6.5rem auto;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
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
    .bottom-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        width: 100%;
        margin-top: 2.5rem;
        padding-right: 13rem;
        @media screen and (max-width: 1040px) {
            width: 100%;
            padding: 1rem;
            flex-direction: column;
            gap: 3rem;
        }
        p {
            font-family: Inter;
            font-size: 18px;
            font-weight: 300;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            width: 428px;
            @media screen and (max-width: 1040px) {
                width: 100%;
            }
        }
        .try-button {
            background-color: black;
            padding: 1rem 2.3rem;
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            text-decoration: none;
            .link {
                cursor: pointer;
            }
        }
    }

    
`

const Simulate1 = () => {
  return (
    <Wrapper>
        <img className='bg-img' src={bg} alt="" />
        <ContentBox>
            <h1>Simulate Interactions for Safer Web3 Transactions</h1>
            <div className='bottom-box'>
                <p>Get ready to experience unparalleled protection with AI-powered, real-time guidance. ShieldCore Suite is your soon-to-be-released Web3 security companion</p>
                <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSdfjqkAqLF5vEyVZerr2klkzkYFQJgHjo9DyFMiL_qt9NLPaQ/viewform?usp=dialog' className='try-button'>Join the Waitlist</a>
            </div>
        </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Simulate1)