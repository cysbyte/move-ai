import React from 'react'
import styled from 'styled-components'
import bg from '@/assets/build-with-us/bg-innovate.svg'

const Wrapper = styled.section`
    padding-bottom: 2rem;
    position: relative;
    overflow: hidden;
    background-color: #FFCB06;
    .bg-img {
        position: absolute;
        right: 0;
        top: 0;
        object-fit: cover;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
    `
const ContentBox = styled.div`
    width: 1040px;
    margin: 6.2rem auto 4rem auto;
    z-index: 999;
    position: relative;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
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
        letter-spacing: 1px;
        @media screen and (max-width: 1040px) {
            font-size: 40px;
        }
    }
    p {
        font-family: Inter;
        font-size: 24px;
        font-weight: 400;
        line-height: 36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        text-transform: uppercase;
        margin-top: 1.6rem;
        max-width: 725px;
        letter-spacing: 0.3px;
        @media screen and (max-width: 1040px) {
            font-size: 20px;
            letter-spacing: 0px;
        }
    }
`

const Innovate = () => {
  return (
    <Wrapper>
        <img className='bg-img' src={bg} alt="" />
        <ContentBox>
            <h2>Let’s Innovate Together</h2>
            <p>Partner with MoveAI and be at the forefront of the decentralized AI revolution. We can't wait to see what we'll create together!</p>
        </ContentBox>
    </Wrapper>
  )
}

export default Innovate