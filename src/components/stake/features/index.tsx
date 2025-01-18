import styled from 'styled-components'

const Wrapper = styled.section`
    width: 100%;
    background-image: url('/bg-bottom.svg');
    background-repeat: no-repeat;
    background-size: 50% 100%;
    padding-bottom: 10rem;
    position: relative;
    overflow: hidden; 
    
    .flex-box {    
        width: 100%;
        gap: 8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2.8rem 13rem;
        background-color: #011038;
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


  const GradientBox = styled.div`
        background: linear-gradient(90deg, #011038 0%, #01D3E3 50.5%, #011038 100%);
        padding: 1px 0;
        z-index: 999;
    `
  return (
    <Wrapper>
      <GradientBox>
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
      </GradientBox>
    </Wrapper>
  )
}

export default Features