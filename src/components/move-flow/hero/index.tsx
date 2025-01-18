import React from 'react'
import styled from 'styled-components'
import bg from '@/assets/move-flow/bg-hero.svg'
import { useDialogContext } from '@/providers/DialogProvider'

const Wrapper = styled.section`
    background-color: white;
    padding: 0.1rem 0rem;
    position: relative;
    background-color: black;   
    overflow: hidden;
    .bg-img {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        object-fit: cover;
        white-space: nowrap;
    }
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 9.5rem auto 12em auto;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
        flex-direction: column;
        gap: 3rem;
    }
    h1 {
        font-family: Inter;
        font-size: 50px;
        font-weight: 600;
        line-height: 60.51px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        @media screen and (max-width: 1040px) {
            font-size: 40px;
            line-height: 50px;
        }
    }
    .desc {
        font-family: Inter;
        font-size: 18px;
        font-weight: 300;
        line-height: 21.78px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        letter-spacing: 0.5px;
        padding: 2.5rem 0rem 5rem 0rem;
    }
     .try-button {
        background-color: #FFD828;
        padding: 1rem 2.3rem;
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
        text-decoration: none;
        margin-top: 1rem;
        .link {
            cursor: pointer;
        }
    }
        
    
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    
`


const Hero = () => {
    const {setShowSubMenu} = useDialogContext()
  return (
    <Wrapper onClick={()=>setShowSubMenu(false)}>
        <img className='bg-img' src={bg} alt="" />
        <ContentBox>
            <h1>Build smart contracts effortlessly with MoveFlow</h1>
            <p className='desc'>Empower your ideas with a platform that turns concepts into blockchain applications. No coding required—fast, intuitive, and ready to deploy</p>
            <a href='#/move-desk' className='try-button'>Get Started</a>
        </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Hero)