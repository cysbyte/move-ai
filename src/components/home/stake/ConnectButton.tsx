import React from 'react'
import styled, { keyframes } from 'styled-components'
import IconLoading from '@/assets/icon_loading2.png'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.4rem;
  animation: ${rotate} 1.6s linear infinite;
`;

const ConnectButton = ({ onClick, children, loading }: { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined, children: React.ReactNode, loading: boolean }) => {
  const Wrapper = styled.button`
        padding: 0.8rem 3.2rem;
        background: linear-gradient(180deg, #00D7E6 0%, #001348 100%);
        color: white;
        font-family: Inter;
        font-size: 26px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        border-radius: 40px;
        border-color: white;
        border-width: 0px;
        cursor: pointer;
    `

  return (
    <Wrapper onClick={loading ? undefined : onClick}>
      { loading && <LoadingIcon src={IconLoading} alt="loading" /> }
      {children}
    </Wrapper>
  )
}

export default React.memo(ConnectButton)