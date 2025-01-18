import styled from 'styled-components'

const Wrapper = styled.p`
    text-align: left !important;
    width: 100%;
    & > span: nth-child(1) {
        font-family: Inter;
        font-size: 30px;
        font-weight: 500;
        line-height: 36.31px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #01A9C4;
    }
    & > span: nth-child(2) {
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
    }
    & > span: nth-child(3) {
        font-family: Inter;
        font-size: 30px;
        font-weight: 500;
        line-height: 36.31px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #01A9C4;
    }
    & > span: nth-child(4) {
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
    }
`
const Desc4 = () => {
  return (
    <Wrapper>
        <span>3.8</span><span> billion tokens mined over </span><span>18</span><span> months through network uptime</span>
    </Wrapper>
  )
}

export default Desc4