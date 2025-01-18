import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bg from '@/assets/move-ai/bg-privacy.svg'

const Wrapper = styled.section`
    position: relative;
    padding: 7rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    .bg-img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
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
    h6 {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        width: 100%;
    }
    h2 {
        font-family: Inter;
        font-size: 50px;
        font-weight: 600;
        line-height: 60.51px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        width: 100%;
        text-transform: uppercase;
        margin-top: 0.2rem;
        @media screen and (max-width: 1040px) {
            font-size: 35px;
            line-height: 45px;
        }
    }
    .desc {
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 21.78px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        width: 700px;
        margin: 2rem auto;
        letter-spacing: 1px;
        @media screen and (max-width: 1040px) {
            width: 100%;
        }
    }
    .button-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10rem;
        .start-button {
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
            
        }
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`

const Privacy = () => {
    return (
        <Wrapper>
            <img className='bg-img' src={bg} alt="" />
            <ContentBox>
                <h6>Zero-Knowledge Proofs & Federated Learning for Secure AI</h6>
                <h2>Privacy-Preserving AI</h2>
                <p className='desc'>Sensitive industries require trust. MoveAI’s privacy-first approach ensures data security without sacrificing performance, enabling sectors like healthcare to adopt decentralized AI confidently</p>
                <div className='button-box'>
                    <Link to={''} className='start-button'>Start Building on MoveAI</Link>
                </div>
            </ContentBox>
        </Wrapper>
    )
}

export default React.memo(Privacy)