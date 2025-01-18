import disconnectIcon from "@/assets/home/disconnect.svg";
import down from '@/assets/move-ai2/down.svg';
import logo from '@/assets/move-ai2/logo.svg';
import menuIcon from '@/assets/move-ai2/menu.svg';
import { useDialogContext } from '@/providers/DialogProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5rem;
  border-bottom: 1px solid black;
  position: relative;
  width: 100%;
  background-color: #FFCB06;
  @media screen and (max-width: 1040px) {
      padding: 1rem;
  }
  .menu-button {
    width: 20px;
    cursor: pointer;
    @media screen and (max-width: 800px) {
          display: block;
      }
    @media screen and (min-width: 800px) {
          display: none;
      }
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
    text-decoration: none;
    color: black;
  }
  .left-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5.5rem;
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
          background-color: black;
          padding: 1rem 2.4rem;
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

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .menu-item {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.36px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: black;
      text-decoration: none;
      cursor: pointer;
      display: flex;
      justify-content: start;
      align-items: center;
      .down {
        margin-left: 0.4rem;
      }
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const SubmenuBox = styled.div`
  width: 100%;
  background-color: #FFCB06;
  position: absolute;
  left: 0;
  top: 5rem;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 491px !important;
  gap: 1.1rem;
  padding: 0rem 0rem 1.5rem 0rem;
  @media screen and (max-width: 800px) {
        display: none;
    }
  .menu-item {
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 19.36px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: black;
      text-decoration: none;
      cursor: pointer;
      display: flex;
      justify-content: start;
      align-items: center;
      .down {
        margin-left: 0.4rem;
      }
    }
`

export const menu = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'Move Desk',
    link: '/move-desk',
  },
  {
    id: 3,
    name: 'Product',
    link: '/about',
  },
  {
    id: 4,
    name: 'About',
    link: '/about',
  },
  {
    id: 5,
    name: 'Docs',
    link: 'https://move-ai.gitbook.io/move-ai-docs',
  },
  {
    id: 6,
    name: 'Build with us',
    link: '/build-with-us',
  },
]

export const products = [
  {
    id: 1,
    name: 'FusionX Suite',
    link: '/fusionx',
  },
  {
    id: 2,
    name: 'ShieldCore Suite',
    link: '/shield-core',
  },
  {
    id: 3,
    name: 'Move flow',
    link: '/move-flow',
  },
]

const Header = () => {

  const [showDisconnect, setShowDisconnect] = useState(false)
  const { setShowMobileMenu, showSubMenu, setShowSubMenu } = useDialogContext()

  const handleClick = () => {
      setShowDisconnect(prev => !prev)
  }

  const handleDisconnect = () => {
    setShowDisconnect(false)
  }

  const handleBlur = () => {
    setShowDisconnect(false)
  }

  const handleShowSubmenu = () => {
    setShowSubMenu((prev) => !prev)
  }

  return (
    <Wrapper>
      <div className='left-box'>
        <a href='/' className='logo'><img width={131} src={logo} alt="" /></a>
        <MenuWrapper>
          {
            menu.map((item) => (
              <div>
                {item.name !== 'Product' ?
                  <Link className='menu-item' to={item.link} key={item.id}>{item.name}
                  </Link>
                  :
                  <p
                    onClick={handleShowSubmenu}
                    className='menu-item' key={item.id}>{item.name}<img className='down' src={down} alt='' /></p>
                }
              </div>
            ))
          }
        </MenuWrapper>
      </div>
      <img onClick={() => setShowMobileMenu(true)} className='menu-button' src={menuIcon} alt="" />
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
            <img src={disconnectIcon} alt="" />
            <p style={{ cursor: 'pointer' }}>Disconnect</p>
          </div>
        }
      </div>

      {
        showSubMenu &&
        <SubmenuBox
          onClick={() => setShowSubMenu(false)}
          onBlur={() => setShowSubMenu(false)}
        >
          {
            products.map((item) => (
              <Link className='menu-item' to={item.link} key={item.id}>{item.name}
              </Link>
            ))
          }
        </SubmenuBox>
      }

    </Wrapper>
  )
}

export default Header