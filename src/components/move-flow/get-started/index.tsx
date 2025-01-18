import React from 'react'
import styled from 'styled-components'
import bg from '@/assets/move-flow/get-started/bg.svg'

const Wrapper = styled.section`
    background-color: #FFD828;
    padding: 0.1rem 0rem;
    position: relative; 
    overflow: hidden;

`

const ContentBox = styled.div`
    width: 1040px;
    margin: 6.2rem auto 9em auto;
    position: relative;
    z-index: 999;
    position: relative;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    .bg-img {
        position: absolute;
        right: 0;
        top: 0;
        object-fit: cover;
        margin-top: -6rem;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
    .left-box {
        width: 720px;
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
            font-weight: 300;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            margin-top: 2.5rem;
        }
    }
`

const GetStarted = () => {
  return (
    <Wrapper>
        <ContentBox>
            <img className='bg-img' src={bg} alt="" />
            <div className='left-box'>
                <h1>Get Started with MoveFlow Today</h1>
                <p>Let your ideas drive the future. MoveFlow is your no-code solution to building, customizing, and deploying smart contracts</p>
            </div>
        </ContentBox>
    </Wrapper>
  )
}

export default React.memo(GetStarted)