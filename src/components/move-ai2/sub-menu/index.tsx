import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`

  width: 100%;
  background-color: #FFCB06;
  position: absolute;
  left: 0;
  top: 4rem;
  z-index: 99999;
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

`

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

const Submenu = () => {

  return (
    <Wrapper>
      {
        products.map((item) => (
          <Link className='menu-item' to={item.link} key={item.id}>{item.name}
          </Link>
        ))
      }
    </Wrapper>
  )
}

export default Submenu