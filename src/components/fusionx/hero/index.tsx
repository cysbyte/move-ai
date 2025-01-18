import React from 'react'
import styled from 'styled-components'
import bg from '@/assets/fusionx/bg-hero.svg'
import { useDialogContext } from '@/providers/DialogProvider'

const Wrapper = styled.section`
    background-color: white;
    padding: 0.1rem 0rem;
    position: relative;
    background-color: black;
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 9rem auto 8rem auto;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
        flex-direction: column;
        gap: 3rem;
    }
    .bg-img {
        margin-top: -2rem;
        @media screen and (max-width: 1040px) {
            width: 100%;
            margin-top: 2rem;
        }
    } 
    .left-box {
        width: 470px;
        h1 {
            font-family: Inter;
            font-size: 50px;
            font-weight: 600;
            line-height: 60.51px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            letter-spacing: 1px;
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
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            padding: 2.5rem 0rem 5rem 0rem;
            letter-spacing: 0.3px;
        }
        .note {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            margin-top: 3rem;
        }
    }
    
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    
`

const Hero = () => {
  const { setShowSubMenu } = useDialogContext()
  return (
    <Wrapper onClick={() => setShowSubMenu(false)}>
      <ContentBox>
        <div className='left-box'>
          <h1>Power AI Agents on Movement with FusionX
          </h1>
          <p className='desc'>FusionX is the ultimate platform to create, train, and deploy AI Agents seamlessly on the Movement network. Scale your AI economy, automate interactions, and bring intelligent agents to life—all without complex development</p>
          <p className='note'>FusionX Suite—where innovation meets simplicity</p>
        </div>
        <img className='bg-img' src={bg} alt="" />
      </ContentBox>
    </Wrapper>
  )
}

export default React.memo(Hero)