import arrow from '@/assets/build-with-us/arrow.svg'
import bg from '@/assets/build-with-us/bg-form.svg'
import React from 'react'
import styled from 'styled-components'
import { useToast } from "../../../providers/ToastProvider"
import Input from './Input'

const Wrapper = styled.section`
    padding-bottom: 2rem;
    position: relative;
    overflow: hidden;
    background-color: #1D1D1D;
    .bg-img {
        position: absolute;
        right: 0;
        top: 0;
        object-fit: cover;
    }
`
const ContentBox = styled.div`
    width: 1040px;
    margin: 5rem auto 0.5rem auto;
    z-index: 999;
    position: relative;
    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
    h3 {
        font-family: Inter;
        font-size: 24px;
        font-weight: 300;
        line-height: 29.05px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
    }
    .explore-box {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;
        margin-top: 3.5rem;
        .square {
            width: 9px;
            height: 9px;
            background-color: #FFD828;
        }
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFD828;
        }
    }

    .form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }
`

const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFCB06;
    padding: 0.85rem 2rem 0.85rem 2.4rem;
    border-width: 0px;
    gap: 0.4rem;
    margin-top: 3.5rem;
    cursor: pointer;
    p {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: black;
    }
`

const Form = () => {
  const fields = [
    {
      id: 1,
      name: 'Full Name',
      value: '',
      optional: false,
      googleFormId: '2122176562',
    },
    {
      id: 2,
      name: 'Email Address',
      value: '',
      optional: false,
      googleFormId: '116949916',
    },
    {
      id: 3,
      name: 'Project Name',
      value: '',
      optional: true,
      googleFormId: '1565000701',
    },
    {
      id: 4,
      name: 'Project Description',
      value: '',
      optional: true,
      googleFormId: '1615624166',
    },
    {
      id: 5,
      name: 'Twitter',
      value: '',
      optional: false,
      googleFormId: '583997916',
    },
    {
      id: 6,
      name: 'GitHub/Portfolio Link',
      value: '',
      optional: true,
      googleFormId: '1436889486',
    },
    {
      id: 7,
      name: 'Additional Comments',
      value: '',
      optional: true,
      googleFormId: '640981566',
    },
  ]

  const { addToast } = useToast();

  const validateAndSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log(',,,', formData)

    const getInputName = (name: string) =>
      fields.find((item) => item.googleFormId === name.replace('entry.', ''))?.name;

    const getOptional = (name: string) =>
      fields.find((item) => item.googleFormId === name.replace('entry.', ''))?.optional;

    function validEmail(email: string) {
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return pattern.test(email);
    }

    // Validation
    for (const [name, value] of formData.entries()) {
      if(getOptional(name)) continue
      const fieldName = getInputName(name);
      if(fieldName === 'GitHub/Portfolio Link' || fieldName === 'Additional Comments')
        continue; 
      if (fieldName === 'Email Address' && !validEmail(value as string)) {
        addToast("Please provide a valid email address.", "success", 3000)
        return;
      }
      if (!value) {
        addToast(`Please fill out the ${fieldName} field.`, "warning", 3000)
        return;
      }
    }

    try {
      const response = await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdgEmUayj3zWgMDr686anKhjQzLiuo_sLPmrxsQrdN0F2lnfA/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );

      if (response.status === 0) {
        addToast("Form submitted successfully!", "success", 3000)
        form.reset(); 
      } else {
        addToast("Something went wrong. Please try again.", "error", 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      addToast("An error occurred. Please try again later.", "error", 3000)
    }
  };

  return (
    <Wrapper>
      <img className='bg-img' src={bg} alt="" />¿
      <ContentBox>
        <h3>Fill out the form below to submit your project proposal. Our team will review your submission and reach out with collaboration opportunities</h3>
        <div className='explore-box'>
          <div className='square'></div>
          <p>Explore Use Cases</p>
        </div>
        <form className='form' 
          action="https://docs.google.com/forms/d/e/1FAIpQLSdgEmUayj3zWgMDr686anKhjQzLiuo_sLPmrxsQrdN0F2lnfA/formResponse"
          method="POST"
          onSubmit={(e)=>validateAndSubmitForm(e)}
        >
          {
            fields.map((item) => (
              <div style={{width: '100%', margin: '1.5rem 0rem'}}>
                <Input title={item.name} placeholder='' optional={item.optional} googleFormId={item.googleFormId} fields={fields}/>
              </div>
            ))
          }
          <SubmitButton>
            <p>Submit</p>
            <img src={arrow} alt="" />
          </SubmitButton>
        </form>
      </ContentBox>
    </Wrapper>
  )
}

export default Form