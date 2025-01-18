import styled from 'styled-components'
import twitter from '@/assets/home/social/twitter.svg'
import telegram from '@/assets/home/social/telegram.svg'
import github from '@/assets/home/social/github.svg'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
const SocialLinks = () => {
  return (
    <Wrapper>
        <Link to=''><img src={twitter} alt="" /></Link>
        <Link to=''><img src={telegram} alt="" /></Link>
        <Link to=''><img src={github} alt="" /></Link>
    </Wrapper>
  )
}

export default SocialLinks