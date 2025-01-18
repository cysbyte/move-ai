import styled from 'styled-components'
import separator from '@/assets/home/separator.svg'

const Wrapper = styled.section`
    width: 100%;
    padding-bottom: 0rem;
    position: relative;
    margin-top: 6rem;
    margin-bottom: 6rem;
    .flex-box {    
        width: 1040px;
        margin: auto auto;
        gap: 8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2.8rem 0rem;
        z-index: 999;
        .feature-card {
            z-index: 999;
            h5 {
                font-family: Inter;
                font-size: 24px;
                font-weight: 400;
                line-height: 29.05px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
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
                margin-top: 0.6rem;
            }
        }
    }

`
const Features = () => {

  const data = [
    {
      id: 1,
      title: 'High Returns',
      desc: 'The more you stake, the greater your rewards'
    },
    {
      id: 2,
      title: 'Bonus Reward Program',
      desc: 'Enjoy extra earnings in addition to the base rate'
    },
    {
      id: 3,
      title: 'Worry-Free Flexibility',
      desc: 'No minimum threshold—anyone can participate'
    },
  ]

  const Container = styled.div`
        width: 100%;
        position: relative;
        .top-border {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }
        .bottom-border {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
        }
    `
  return (
    <Wrapper>
      <Container>
        <img className='top-border' src={separator} alt="" />
        <img className='bottom-border' src={separator} alt="" />
        <div className='flex-box'>
          {
            data.map((item) => (
              <div key={item.id} className='feature-card'>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))
          }
        </div>
      </Container>

    </Wrapper>
  )
}

export default Features