import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    background-color: rgba(0,0,0,0);
    flex: 2;
    input {
        width: 100%;
        border: none;         
        border-bottom: 1px solid #FFFFFF80;  
        outline: none;        
        padding: 1rem 0;     
        margin-top: 1rem;   
        background-color: rgba(0,0,0,0);
        color: white;            
        @media screen and (max-width: 800px) {
            margin-top: 1rem; 
        }
    }
    input:focus {
        border-bottom-color: white;
    }
    input::placeholder {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFFFFF80;
        @media screen and (max-width: 800px) {
            font-family: Inter;
            font-size: 12px;
            font-weight: 300;
            line-height: 20px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
        }
    }
`
const Input = ({placeholder}:
    {title: string, placeholder: string}) => {
  return (
    <Wrapper>
         {/* <label htmlFor="name">{title}</label> */}
         <input type="text" placeholder={placeholder}/>
    </Wrapper>
  )
}

export default Input