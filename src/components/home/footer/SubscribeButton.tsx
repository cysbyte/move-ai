import styled from 'styled-components'

const Wrapper = styled.article`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid #FFFFFF80;
    background-color: rgba(0,0,0,0);
    color: white;
    flex: 1;
    padding: 1rem 0rem;
    margin-top: 0.5rem;
    p {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
    }
`
const SubscribeButton = () => {
  return (
    <Wrapper>
      <p>Subscribe</p>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12H2.99997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15 6L21 12L15 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </Wrapper>
  )
}

export default SubscribeButton