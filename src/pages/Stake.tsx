import Header from '@/components/home/header'
import Features from '@/components/stake/features'
import Hero from '@/components/stake/hero'
import styled from 'styled-components'

const Wrapper = styled.main`
    width: 100%;
    overflow: hidden;
    background-color: #011038;
    z-index: 10;
    min-height: 100vh;
    .upper-box {
        position: relative;
        background-color: #011038;
        max-width: 1920px;
        overflow: hidden;
        margin: auto auto;
        padding: 0 0;
        @media screen and (max-width: 800px) {
            padding: 0rem 1rem;
            overflow: hidden;
        }

    }
`

const Stake = () => {

    return (
        <Wrapper>
            <div className='upper-box'>
                <Header/>
                <Hero/>
                <Features/>
            </div>
            {/* <Footer/> */}
        </Wrapper>
    )
}

export default Stake