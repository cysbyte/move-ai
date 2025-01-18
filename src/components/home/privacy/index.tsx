import styled from 'styled-components'
import privacy from '@/assets/home/privacy.svg'

const Wrapper = styled.section`
.container {
    position: relative;
    width: 1040px;
    margin: auto auto;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: start;
    margin-top: 13rem;
    @media screen and (max-width: 1040px) {
        width: 100%;
        flex-direction: column;
        justify-content: start;
        gap: 1rem;
    }
        .left-box {
            h2 {
                font-family: Inter;
                font-size: 44px;
                font-weight: 600;
                line-height: 53.25px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: white;
                letter-spacing: 1px;
                span {
                    color: #E75F00;
                }
                @media screen and (max-width: 1040px) {
                    font-size: 30px;
                    line-height: 36px;
                    font-weight: 500;
                }
            }
            .desc {
                font-family: Inter;
                font-size: 24px;
                font-weight: 400;
                line-height: 29.05px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #FFFFFF80;
                margin-top: 2.5rem;
                letter-spacing: 0.6px;
                @media screen and (max-width: 1040px) {
                    font-size: 16px;
                    line-height: 24px;
                }

            }
            .cta {
                font-family: Inter;
                font-size: 16px;
                font-weight: 400;
                line-height: 19.36px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #FFFFFF80;
                margin-top: 5rem;
            }
        }
    }
    img {
        margin-right: -7.5rem;
        margin-top: -2.5rem;
        @media screen and (max-width: 1040px) {
            width: 100%;
            margin-right: 0rem;
            margin: 4rem 0rem 8rem 0rem;

        }
    }
`
const Privacy = () => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='left-box'>
                    <h2>Privacy-Preserving AI Leveraging Zero-Knowledge Proofs for Secure AI</h2>
                    <p className='desc'>Neural Network integrates Zero-Knowledge Proofs and Federated Learning, allowing privacy-focused AI training for sensitive sectors like healthcare.</p>
                    <p className='cta'>CTA: Start building on the Neural Network</p>
                </div>
                <img src={privacy} alt="" />
            </div>
        </Wrapper>
    )
}

export default Privacy