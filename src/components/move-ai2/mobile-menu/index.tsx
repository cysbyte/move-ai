import React from 'react'
import styled from 'styled-components'
import { menu, products } from '../header'
import closeIcon from '@/assets/move-ai2/close.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDialogContext } from '@/providers/DialogProvider'

const Wrapper = styled.article`
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 100;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 1rem 0rem;
    .close-box {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: end;
      .close-button {
          width: 30px;
          margin-right: 1rem;
          cursor: pointer;
      } 
    }
    .menu-item {
      padding: 1rem;
      color: white;
      text-decoration: none;
      cursor: pointer;
      font-size: 20px;
      .sub-menu-box {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin-top: 1rem;
        padding-left: 1.6rem;
        gap: 0.7rem;
        .sub-menu-item {
          font-size: 16px;
          text-decoration: none;
          color: white;
        }
      }
    }
`

const MoblieMenu = () => {
  const { setShowMobileMenu, showSubMenu, setShowSubMenu } = useDialogContext()

  const navigate = useNavigate()
  const handleMenuItemClick = (name: string, link: string) => {
    if (name === 'Litepaper') {
      setShowMobileMenu(false)
      window.location.href = link
    } else if (name === 'Product') {
      setShowSubMenu((prev) => !prev)
    }
    else {
      navigate(link)
      setShowMobileMenu(false)
    }
  }
  return (
    <Wrapper>
      <div style={{ width: '100%' }}>
        <div className='close-box'>
          <img onClick={() => setShowMobileMenu(false)} className='close-button' src={closeIcon} alt="" />
        </div>
        {
          menu.map((item) => (
            <div className='menu-item'>
              <p onClick={() => handleMenuItemClick(item.name, item.link)}>{item.name}</p>
              {
                item.name === 'Product' && showSubMenu &&
                <div className='sub-menu-box' onClick={()=>{
                  setShowSubMenu(false)
                  setShowMobileMenu(false)
                }
                }>
                  {
                    products.map((item) => (
                      <Link className='sub-menu-item' to={item.link} key={item.id}>{item.name}
                      </Link>
                    ))
                  }
                </div>
              }
            </div>
          ))
        }
      </div>
    </Wrapper>
  )
}

export default React.memo(MoblieMenu)