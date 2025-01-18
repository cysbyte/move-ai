import styled from 'styled-components'
import icon1 from '@/assets/build-with-us/hero-icon1.svg'
import icon2 from '@/assets/build-with-us/hero-icon2.svg'
import icon3 from '@/assets/build-with-us/hero-icon3.svg'
import { useDialogContext } from '@/providers/DialogProvider'

const Wrapper = styled.section`
    padding-bottom: 2rem;
    position: relative;
    overflow: hidden;

    `
const ContentBox = styled.div`
    width: 1040px;
    margin: 5rem auto 0.5rem auto;
    z-index: 999;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    h1 {
        font-family: Inter;
        font-size: 50px;
        font-weight: 600;
        line-height: 60.51px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
        @media screen and (max-width: 1040px) {
            font-size: 40px;
            text-align: left;
        }
    }
    h6 {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFD012;
        margin-top: 1rem;
        letter-spacing: 0.25px;
        @media screen and (max-width: 1040px) {
            text-align: left;
        }
    }
    h3 {
        font-family: Inter;
        font-size: 34px;
        font-weight: 400;
        line-height: 41.15px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFCB06;
        text-transform: uppercase;
        margin-top: 4rem;
    }
    .middle-box {
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
        @media screen and (max-width: 1040px) {
            width: 100%;
            padding: 1rem;
            flex-direction: column;
            align-items: start;
        }
        .item-card {
            flex: 1;
            h5 {
                font-family: Inter;
                font-size: 18px;
                font-weight: 600;
                line-height: 21.78px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
                margin-top: 2rem;
                letter-spacing: 0.6px;
            }
            p {
                font-family: Inter;
                font-size: 16px;
                font-weight: 300;
                line-height: 19.36px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #FFFFFF80;
                margin-top: 1.4rem;
                letter-spacing: 0.1px;
            }
        }
    }
    .bottom-box {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 2rem;
        margin-top: 7.5rem;
        @media screen and (max-width: 1040px) {
            flex-direction: column;
            align-items: start;
        }
        .submit {
            font-family: Inter;
            font-size: 34px;
            font-weight: 400;
            line-height: 41.15px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFCB06;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .ready {
            font-family: Inter;
            font-size: 24px;
            font-weight: 400;
            line-height: 29.05px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            text-transform: uppercase;
        }
    }

`

const Hero = () => {

  const data = [
    {
      id: 1,
      title: 'Innovative Technology',
      desc: 'Utilize our AI Agent Engine Layer to create smart, decentralized applications',
      icon: icon1,
    },
    {
      id: 2,
      title: 'Collaborative Community',
      desc: 'Be part of a vibrant community dedicated to advancing AI and blockchain technologies',
      icon: icon2,
    },
    {
      id: 3,
      title: 'Comprehensive Support',
      desc: 'Access a wealth of resources and support to bring your ideas to life',
      icon: icon3,
    },
  ]
    
  const {setShowSubMenu} = useDialogContext()

  return (
    <Wrapper onClick={()=>setShowSubMenu(false)}>
      <ContentBox>
        <div className='top-box'>
          <h1>Build with MoveAI</h1>
          <h6>Join Us in Shaping the Future of Decentralized AI</h6>
        </div>
        <h3>Why Build with MoveAI?</h3>
        <div className='middle-box'>
          {
            data.map((item)=>(
              <div className='item-card'>
                <img src={item.icon} alt="" />
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))
          }
        </div>
        <div className='bottom-box'>
          <p className='submit'>Submit Your Project</p>
          <p className='ready'>Ready to make an impact?</p>
        </div>
      </ContentBox>
    </Wrapper>
  )
}

export default Hero