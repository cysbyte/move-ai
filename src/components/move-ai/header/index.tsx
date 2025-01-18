import disconnectIcon from "@/assets/home/disconnect.svg";
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.7rem 5rem;
    @media screen and (max-width: 1040px) {
        padding: 1rem;
    }
  .logo {
    font-family: Inter;
    font-size: 26px;
    font-weight: 900;
    line-height: 31.47px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    z-index: 999;
  }
  .right-box {
      display: flex;
      gap: 1.3rem;
      justify-content: center;
      align-items: center;
      position: relative;
      @media screen and (max-width: 800px) {
          display: none;
      }
      .connect-button {
          background-color: #0337FF;
          padding: 1rem 2rem;
          font-family: Inter;
          font-size: 16px;
          font-weight: 300;
          line-height: 19.36px;
          text-align: left;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          color: white;
          border-width: 0px;
          z-index: 999;
          cursor: pointer;
      }
      .disconnect {
          position: absolute;
          left: 0;
          top: 3.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 178px;
          gap: 1rem;
          background-color: #191F20;
          border-radius: 8px;
          padding: 0.8rem 1.5rem;
          cursor: pointer;
          z-index: 999999;
          p {
              font-family: Inter;
              font-size: 16px;
              font-weight: 400;
              line-height: 19.36px;
              text-align: left;
              text-underline-position: from-font;
              text-decoration-skip-ink: none;
              color: white;
              cursor: pointer;
          }
      }
  }
`
const Header = () => {
  const [showDisconnect, setShowDisconnect] = useState(false)

  const handleClick = () => {
    setShowDisconnect(prev => !prev)
  }

  const handleDisconnect = () => {
    setShowDisconnect(false)
  }

  const handleBlur = ()=>{
    setShowDisconnect(false)
  }

  return (
    <Wrapper>
      <h2 className='logo'>MoveAI</h2>
      <div className='right-box'>
        <button className='connect-button'
                tabIndex={0}
                onClick={handleClick}
                onBlur={handleBlur}
        >
          Connect Wallet
        </button>
        {showDisconnect &&
          <div className='disconnect' onMouseDown={handleDisconnect}>
            <img src={disconnectIcon} alt=""/>
            <p style={{cursor: 'pointer'}}>Disconnect</p>
          </div>
        }
      </div>
    </Wrapper>
  )
}

export default Header