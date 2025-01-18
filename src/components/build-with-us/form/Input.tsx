import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    background-color: rgba(0,0,0,0);
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    @media screen and (max-width: 1040px) {
        flex-direction: column;
        gap: 0.5rem;
    }
    .name-box {
        display: flex;
        justify-content: start;
        align-items: start;
        .star {
            width: 5px;
            color: #FFD012;
            font-family: Inter;
            font-size: 18px;
            font-weight: 500;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            margin-right: 0.6rem;
        }
        label {
            font-family: Inter;
            font-size: 18px;
            font-weight: 400;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            width: 250px;
        }
        @media screen and (max-width: 1040px) {
            font-size: 16px;
            width: 100%;
        }
    
    }
    input {
        width: 100%;
        border: none;      
        border-radius: 0px;   
        border-bottom: 1px solid #FFFFFF80;  
        outline: none;        
        padding: 0rem 0;     
        margin-top: 0rem;   
        background-color: rgba(0,0,0,0);
        color: white;      
        font-size: 18px;      
        @media screen and (max-width: 1040px) {
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

const Input = ({ title, placeholder, fields, googleFormId, optional }:
    {
        title: string, placeholder: string, googleFormId: string, optional: boolean, fields: {
            id: number;
            name: string;
            value: string;
        }[]
    }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fields.forEach(field => {
      if (field.name === title) {
        field.value = e.target.value
      }
    });
    console.log(fields)
  }
  return (
    <Wrapper>
      <div className='name-box'>
        <p className='star'>{!optional ? '*' : ''}</p>
        <label htmlFor="name">{title} </label>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        id={googleFormId}
        name={'entry.' + googleFormId}
      />
    </Wrapper>
  )
}

export default Input