import React from 'react'
import styled from 'styled-components'
import bgHero from '@/assets/move-ai2/bg-hero.svg'
import movement from '@/assets/move-ai2/movement.svg'
import { useDialogContext } from '@/providers/DialogProvider'
import logo from '@/assets/move-ai2/logo.svg'
import tableImg from '@/assets/move-ai2/bg-hero-table.svg'

const Wrapper = styled.section`
    padding-bottom: 2rem;
    position: relative;
    overflow: hidden;
    .bg-hero {
        position: absolute;
        object-fit: cover;
        top: 0rem;
        right: 0rem;
        
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
`
const ContentBox = styled.div`
    width: 1040px;
    margin: 5rem auto 0.3rem auto;
    z-index: 999;
    h1 {
        font-family: Inter;
        font-size: 60px;
        font-weight: 800;
        line-height: 72.61px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        letter-spacing: 1.5px;
        @media screen and (max-width: 1040px) {
            font-size: 50px;
            font-weight: 700;
            line-height: 60px;
        }
    }
    h3 {
        font-family: Inter;
        font-size: 30px;
        font-weight: 800;
        line-height: 36.31px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        margin-top: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.2px;
        @media screen and (max-width: 1040px) {
            font-size: 30px;
            font-weight: 600;
            line-height: 40px;
        }
    }
    p {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        margin-top: 2.2rem;
        letter-spacing: 0.1px;
        max-width: 529px;
        @media screen and (max-width: 1040px) {
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
        }
    }
    .bottom-box {
        margin-top: 3.5rem;
        button {
            padding: 1rem 2.5rem;
            background-color: black;
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            border-width: 0px;
            cursor: pointer;
        }
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: black;
            margin: 1rem 0rem;
        }
    }
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
        margin-bottom: 5rem;
        
    }
`
const Hero = () => {
    const { setShowSubMenu } = useDialogContext()
    return (
        <Wrapper onClick={() => setShowSubMenu(false)}>
            <img className='bg-hero' src={bgHero} alt="" />
            <ContentBox>
                <img src={logo} alt="" />
                <h3>Bringing AI to the &nbsp;<span><img src={movement} alt="" /></span>&nbsp; ecosystem</h3>
                <p>MoveAi as a first-mover on movement lets you easily create, deploy, and scale AI agents with our robust engine layer, fueling the next wave of decentralized intelligence innovation.
                </p>
                <div className='bottom-box'>
                    <img className='table-img' src={tableImg} alt="" />
                </div>
            </ContentBox>
        </Wrapper>
    )
}

export default React.memo(Hero)