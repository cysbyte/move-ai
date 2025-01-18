import React from 'react'
const Build = React.lazy(() => import('@/components/home/build'))
const Ecosystem = React.lazy(() => import('@/components/home/ecosystem'))
const Footer = React.lazy(() => import('@/components/home/footer'))
const Hero = React.lazy(() => import('@/components/home/hero'))
const Incentive = React.lazy(() => import('@/components/home/incentive'))
const Join = React.lazy(() => import('@/components/home/join'))
const KeyFeatures = React.lazy(() => import('@/components/home/key-features'))
const Header = React.lazy(() => import('@/components/home/header'))
const Privacy = React.lazy(() => import('@/components/home/privacy'))
const Technology = React.lazy(() => import('@/components/home/technology'))
const Stake = React.lazy(() => import('@/components/home/stake'))
import styled from 'styled-components'
import bgHero from '@/assets/home/bg-hero.svg'
import bgGradient1 from '@/assets/home/bg-gradient1.svg'
import bgGradient2 from '@/assets/home/bg-gradient2.svg'

const Wrapper = styled.main`
    width: 100%;
    overflow: hidden;
    background-color: #011038;
    z-index: 10;
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
        .bg-gradient1 {
            position: absolute;
            top: 130rem;
            right: 0;
        }
        .bg-gradient2 {
            position: absolute;
            top: 250rem;
            left: 0;
        }
    }
`

const HeaderHeroWrapper = styled.div`
    position: relative;
    .bg-hero {
        position: absolute;
        width: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
`

const Home = () => {
    return (
        <Wrapper>
            <div className='upper-box'>
                <img className='bg-gradient1' src={bgGradient1} alt="" />
                <img className='bg-gradient2' src={bgGradient2} alt="" />
                <HeaderHeroWrapper>
                    <img className='bg-hero' src={bgHero} alt="" />
                    <Header />
                    <Hero />
                </HeaderHeroWrapper>
                <Stake/>
                <KeyFeatures />
                <Technology />
                <Build />
                <Ecosystem />
                <Incentive />
                <Privacy />
                <Join />
                <Footer />
            </div>
            {/* <Footer/> */}
        </Wrapper>
    )
}

export default Home