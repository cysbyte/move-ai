import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    border-top: 1px solid #FFFFFF80;
`
const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1040px;
    margin: 0rem auto;
    z-index: 999;
    padding: 2.1rem 0rem;
    
    p, a {
        font-family: Inter;
        font-size: 14px;
        font-weight: 300;
        line-height: 16.94px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        text-decoration: none;
        z-index: 9999;
    }
    @media screen and (max-width: 1040px) {
        width: 80%;
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
        
`

const Footer = () => {
  return (
    <Wrapper>
        <ContentBox>
            <p>Reach out to form alliances, share insights, and co-create the future of on-chain AI</p>
            <a target='_blank' href="https://t.me/moveaiofficial">Contact us</a>
        </ContentBox>
    </Wrapper>
  )
}

export default Footer