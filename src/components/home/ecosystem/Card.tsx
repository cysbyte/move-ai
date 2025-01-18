import styled from 'styled-components'

const Card = ({id, title, desc}: 
    {id: number, title: string, desc: string}) => {
    const Wrapper = styled.div`
        width: 100%;
        h6 {
            font-family: Inter;
            font-size: 24px;
            font-weight: 500;
            line-height: 29.05px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            width: ${id<=4?'100%':'68%'};
        }
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300 !important; 
            line-height: 19.36px;
            text-align: left !important;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFFFFF80 !important;
            width: 100%;
        }
    `
  return (
    <Wrapper key={id}>
        <h6>{title}</h6>
        <p>{desc}</p>
    </Wrapper>
  )
}

export default Card