import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.article`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    flex-wrap: wrap;
    margin-left: -0.4rem;
    @media screen and (max-width: 1040px) {
        justify-content: center;
        margin-left: 0rem;
    }

    .link {
        text-decoration: none;
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFFFFF80;
        padding: 0rem 0.4rem;
        border-right: 1px solid #FFFFFF80;
    }

    .no-border {
        border-right: none;
    }
`
const BottomLinks = () => {
    const data = [
        {
            id: 1,
            name: 'Docs',
            link: ''
        },
        {
            id: 2,
            name: 'Technology',
            link: ''
        },
        {
            id: 3,
            name: 'Github',
            link: ''
        },
        {
            id: 4,
            name: 'Privacy Policy',
            link: ''
        },
        {
            id: 5,
            name: 'Brand Assets',
            link: ''
        },
        {
            id: 6,
            name: 'Terms of Service',
            link: ''
        },
        {
            id: 7,
            name: 'Partnership Request',
            link: ''
        },

    ]
    return (
        <Wrapper>
            {
                data.map((item) => (
                    <Link key={item.id}
                        className={`link ${item.id === 7 ? 'no-border' : ''}`}
                        to={item.link}
                    >
                        {item.name}
                    </Link>
                ))
            }
        </Wrapper>
    )
}

export default BottomLinks