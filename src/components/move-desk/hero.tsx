import bgHero1 from '@/assets/move-desk/bg-hero1.svg'
import { useDialogContext } from '@/providers/DialogProvider'
import styled from 'styled-components'
import data1Icon1 from '@/assets/move-desk/data1/1.svg'
import data1Icon2 from '@/assets/move-desk/data1/2.svg'
import data2Icon1 from '@/assets/move-desk/data2/1.svg'
import data2Icon2 from '@/assets/move-desk/data2/2.svg'
import data3Icon1 from '@/assets/move-desk/data3/1.svg'
import data3Icon2 from '@/assets/move-desk/data3/2.svg'
import data3Icon3 from '@/assets/move-desk/data3/3.svg'
import data4Icon1 from '@/assets/move-desk/data4/1.svg'
import data4Icon2 from '@/assets/move-desk/data4/2.svg'
import data4Icon3 from '@/assets/move-desk/data4/3.svg'

const data1 = [
    {
        id: 1,
        title: 'Boost your content pipeline',
        desc: 'Streamline content creation from idea to publication. Turn videos into blogs, speed up SEO research, and optimize articles for brand voice and keywords',
        icon: data1Icon1,
    },
    {
        id: 2,
        title: 'Create viral videos',
        desc: 'Turn trending topics into viral TikTok videosConvert popular subreddit discussions to short-form content that boosts engagement',
        icon: data1Icon2,
    },
]

const data2 = [
    {
        id: 1,
        title: 'Analyze complex datasets',
        desc: 'Instantly analyze complex data to answer questionswithout lengthy queries. Generate executive-levelinsights rapidly and make data-driven decisions',
        icon: data2Icon1,
    },
    {
        id: 2,
        title: 'Personalize sales prospecting and outreach',
        desc: 'Research prospects and review sites to identify pain points. Craft personalized outreachaddressing specific client needs, not generic pitches',
        icon: data2Icon2,
    },
]

const data3 = [
    {
        id: 1,
        desc: 'Automate market research and prospecting toidentify trends, opportunities, and personalizeoutreach to potential clients faster',
        icon: data3Icon1,
    },
    {
        id: 2,
        desc: 'Generate viral, high-converting content forvarious marketing channels at scale based oncurrent trends',
        icon: data3Icon2,
    },
    {
        id: 3,
        desc: 'Analyze complex customer data to uncoveractionable insights, optimizing campaigns andboosting ROl',
        icon: data3Icon3,
    },

]
const data4 = [
    {
        id: 1,
        desc: 'Build cutting-edge Al agents, pushing theboundaries of autonomous systems andadvanced machine learning',
        icon: data4Icon1,
    },
    {
        id: 2,
        desc: 'Contribute to one of the fastest growing open-source projects of all time. Gain visibility in theAl community and shape industry standards',
        icon: data4Icon2,
    },
    {
        id: 3,
        desc: 'Get hands-on experience in developing stateof-the-art Al technologies and agent architectures',
        icon: data4Icon3,
    },

]

const Wrapper = styled.section`
    padding-bottom: 3rem;
    position: relative;
    overflow: hidden;
    .bg-img {
        position: absolute;
        left: 0;
        bottom: 3.5rem;
        width: 100%;
    }
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
        font-weight: 700;
        line-height: 60.51px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 4rem;
        @media screen and (max-width: 1040px) {
            font-size: 40px;
        }
    }
    h6 {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFD012;
        margin-top: 1rem;
        letter-spacing: 0.25px;
        margin-top: 0.8rem;
    }

    .data-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
        @media screen and (max-width: 1040px) {
            width: 100%;
            flex-direction: column;
        }
    }

    .data3-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
        z-index: 999;
        position: relative;
        @media screen and (max-width: 1040px) {
            width: 100%;
            flex-direction: column;
        }
        .left-box, .right-box {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #FFFFFF3D;
            border-radius: 16px;
            padding: 3rem 3rem;
            height: 647px;
            background-color: #000000D6;
            gap: 0rem;
            @media screen and (max-width: 1040px) {
                gap: 2rem;
            }
        }
    }


    @media screen and (max-width: 1040px) {
        width: 100%;
        padding: 1rem;
    }
`

const Data1Box = styled.div<{ id: number }>`
    width: ${(props) => props.id === 1 ? '543px' : '477px'};
    height: 152px;
    padding: ${(props) => props.id === 1 ? '1rem 1.9rem' : '1rem 2.6rem'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #FFFFFF3D;
    border-radius: 16px;
    gap: ${(props) => props.id === 1 ? '2rem' : '2.6rem'};
    @media screen and (max-width: 1040px) {
        width: 100%;
        height: auto;
        flex-direction: column;
    }
    .right-box {
        h5 {
            font-family: Inter;
            font-size: 18px;
            font-weight: 600;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFD012;
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
            margin-top: 1rem;
            letter-spacing: 0.44px;
        }
    }
`

const Data2Box = styled.div<{ id: number }>`
    width: ${(props) => props.id === 1 ? '476px' : '544px'};
    height: 171px;
    padding: ${(props) => props.id === 1 ? '1rem 1.9rem' : '1rem 2.6rem'};
    display: flex;
    flex-diretion: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #FFFFFF3D;
    border-radius: 16px;
    @media screen and (max-width: 1040px) {
        width: 100%;
        height: auto;
        flex-direction: column;
    }
    gap: ${(props) => props.id === 1 ? '2rem' : '2.6rem'};
    .right-box {
        h5 {
            font-family: Inter;
            font-size: 18px;
            font-weight: 500;
            line-height: 21.78px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFD012;
            letter-spacing: 0.5px;
            width: ${(props) => props.id === 1 ? '100%' : '289px'};
            @media screen and (max-width: 1040px) {
                width: 100%;
                height: auto;
            }
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
            margin-top: 1rem;
            letter-spacing: 0.44px;
        }
    }
`

const ItemCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    p {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFFFFF80;
    }
`

const Hero = () => {
    const { setShowSubMenu } = useDialogContext()
    return (
        <Wrapper onClick={() => setShowSubMenu(false)}>
            <img className='bg-img' src={bgHero1} alt="" />
            <ContentBox>
                <h1>Move AI Engine layer Coming Soon</h1>
                <h6>Unlock the Future of AI-Driven Decentralized Agent Network on Movement
                </h6>
                <div className='data-box' style={{ marginTop: '4rem' }}>
                    {
                        data1.map((item) => (
                            <Data1Box id={item.id} key={item.id}>
                                <img src={item.icon} alt="" />
                                <div className='right-box'>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Data1Box>
                        ))
                    }
                </div>
                <div className='data-box' style={{ marginTop: '1.4rem' }}>
                    {
                        data2.map((item) => (
                            <Data2Box id={item.id} key={item.id}>
                                <img src={item.icon} alt="" />
                                <div className='right-box'>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Data2Box>
                        ))
                    }
                </div>

                <div className='data3-box' style={{ marginTop: '1.4rem' }}>
                    <div className='left-box'>
                        {
                            data3.map((item) => (
                                <ItemCard>
                                    <img src={item.icon} alt="" />
                                    <p>{item.desc}</p>
                                </ItemCard>
                            ))
                        }
                    </div>

                    <div className='right-box'>
                        {
                            data4.map((item) => (
                                <ItemCard>
                                    <img src={item.icon} alt="" />
                                    <p>{item.desc}</p>
                                </ItemCard>
                            ))
                        }
                    </div>
                </div>

            </ContentBox>
        </Wrapper>
    )
}

export default Hero