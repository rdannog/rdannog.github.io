import React from 'react'
import * as S from './style'
import { useStaticQuery, graphql } from 'gatsby'

export default function About() {
    const data = useStaticQuery(graphql`
        query {
           alldata{
            abouts {
                avatar {
                  url
                }
                emoji1 {
                  url
                }
                emoji10 {
                  url
                }
                emoji11 {
                  url
                }
                emoji12 {
                  url
                }
                emoji2 {
                  url
                }
                emoji3 {
                  url
                }
                emoji4 {
                  url
                }
                emoji6 {
                  url
                }
                emoji5 {
                  url
                }
                emoji7 {
                  url
                }
                emoji8 {
                  url
                }
                emoji9 {
                  url
                }
                text1
                text10
                text11
                text12
                text2
                text3
                text4
                text5
                text6
                text7
                text8
                text9
                title
              }
          }
        }
    `)
    const { text1,text10,text11,text12,text2,text3,text4,text5,text6,text7,text8, text9, title, avatar, emoji1, emoji10,emoji11,emoji12, emoji2, emoji3, emoji4,emoji6, emoji5,emoji7, emoji8, emoji9 } = data.alldata.abouts[0]
    return (
        <S.Container>
            
            <S.About>
                <S.Intro>
                    <div id='top' className="profilebox">
                        <img className="profile" src={avatar.url} alt=""/>
                    </div>
                    <div>
                        <h1>{title}</h1>
                    </div>
                    <div className="badge">
                        <a href="mailto:dandaro.nogueira@gmail.com">
                            <img 
                            src="https://img.shields.io/badge/Gmail-F85C46?style=for-the-badge&amp;logo=Gmail&amp;logoColor=202945" alt="gmail"/>
                        </a>
                        <a href="https://www.instagram.com/rdannog/">
                            <img
                            src="https://img.shields.io/badge/Instagram-D4F4C6?style=for-the-badge&amp;logo=instagram&amp;logoColor=202945" 
                            alt="instagram"/>
                        </a>
                        <a href="https://www.linkedin.com/in/dandaronogueira/">
                            <img 
                            src="https://img.shields.io/badge/Linkedin-9D66D0?style=for-the-badge&amp;logo=LinkedIn&amp;logoColor=202945" 
                            alt="linked-in"/>
                        </a>
                    </div>
                </S.Intro>

                <S.Skills>
                    <div>
                        <div className='item'>
                            <p>{text1}</p>
                            <S.Emoji className='left' src={emoji1.url} alt=""/>
                        </div>
                        <div className='item'>
                            <S.Emoji className="tech" src={emoji2.url} alt=""/>
                            <p>{text2}</p>
                        </div>
                        <div className='item'>
                            <p>{text3}</p>
                            <S.Emoji className='left' src={emoji3.url} alt=""/>
                        </div>
                        <div className='item'>
                            <S.Emoji src={emoji4.url} alt=""/>
                            <p>{text4}</p>
                        </div>
                        <div className='item'>
                            <p>{text5}</p>
                            <S.Emoji className='left' src={emoji5.url} alt=""/>
                        </div>
                        <div className='item'>
                            <S.Emoji src={emoji6.url} alt=""/>
                            <p>{text6}</p>
                        </div>
                        <div className='item'>
                            <p>{text7}</p>
                            <S.Emoji className='left' src={emoji7.url} alt=""/>
                        </div>
                        <div className='item'>
                            <S.Emoji src={emoji8.url} alt=""/>
                            <p>{text8}</p>
                        </div>
                        <div className='item'>
                            <p>{text9}</p>
                            <S.Emoji className='left' src={emoji9.url} alt=""/>
                        </div>
                        <div className='item'>
                            <S.Emoji src={emoji10.url} alt=""/>
                            <p>{text10}</p>
                        </div>
                        <div className='item'>
                            <p>{text11}</p>
                            <S.Emoji className='left' src={emoji11.url} alt=""/>
                        </div>
                        <div className='item'>
                            <S.Emoji src={emoji12.url} alt=""/>
                            <p>{text12}</p>
                        </div>
                    </div>
                </S.Skills>
            <a href='#top' className='back'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAJ5UlEQVRoge2bbUxUVxrHf+cOM8CADFC1A6JFUcQSUaQookXZdq2icTUbtq2KUtuafmrcdnfTpptds8nup9aX3a3dNg1FsU1Tsta0alSM7yiv40viW5ViURi0rQoIAzN3ztkPiGlggBnmYruJv2Q+Pc9zzvPPOffec85zBh7xiEf8PyMeVkep+fmW0NbQcYSYbAIVBaAQrejelq6orobzpaXuh5HHsAnOXLx2gvLqv0aQC2QAiUBIP+66gnoBDoE4JLyyrOpASf1w5GWo4NT5+ZFh4dYCgSoAZgNoJo2EsTHY42OIi7MRZrUQHm4BoLPDjcvlxulswdl0hxsNt1FS9TR3Sgm13aNTcu5ASbtRORoieNailVESbb1CvA48Fm61MDMrifSZiUyeEvdA4GC4XG4uX2jCUf0d1RV1uDrcAD8oJbaEWUxbyr8qags216AFP7VwzYsI9S4QHzcmmsW/mc6s7EmYLaag2vW4dSpO1rHny9M0O++ioFET4o3qvdu+CKbdIQueunhFTKg0F4FaFmWz8vyqLGbnTEITxr4WpFKcPHqZLz6tpLXFBYKdukV7+cyu4rtDaW9I2WXmFU5XSu4Cnpg7P4UVhdlYrf5N26HS3t7FZ8XllB/9BgT1UrLMsW/7uUDbCVhwZt6aHKXUV5bQEFvhqzlk5yQH2kRQnDhymW0fH8fj1u9KKZc69u84Hkh8QA/afbH7IiJCI994O4/pGYmBZWsA4xJHkpo2BkfVtTCPx/uCPWnqMWfduQZ/4/0W3D2N1f6IiNDItzYsZcLE0UPL2ABiYyOZOn0sVSfrzLoul8clp+91Xjlzy59YvwRPXbwiRlPicGhoiP0P7yxmfNLPJ7YHW7SVSSl2KsrrwqT0Lhydmr6t+dKZzsHiNH8aD5XmIgGJa17JYWKyPfhsDSI5JY7VrzwNivEhXd6P/YkZdITvf2ffmTs/hWX5GcFnaTBPJI7k1s1Wrn93+8m4iWkXnFfPXRjIf8ARnrVoZRRCvRdls7KiMNuwJB0113DUXDOsvZUvzSHKFg5CbJqzdO2IgXwHFCzR1gNxz6/KMuw766i5xtaNZWzdWGaY6IiIUPJXZiFgTJfH8/pAvv0KTp2fH6kQr9vjo5mdM8mQxM46Gvhg0wE8urfRo3sb3994gNpqYzZFc3OSscdFA2J92oKCiP78+hUcFm4tAB5bsmy6IcvF2up6/vXuftwe2Rhi0nJDTFqursvGDzYdNES00ASLl6cDjDSHUNCfX7+CNdTq8HALs7InBp3MWUcD/9lchkf3NoaYtNzK3cVXKncXXwkxabke3du4dVOZIaKzsiditVoQUgQmOGPRmiQFWTOzkzBb+tuz+8dZRwP/fm/fg5Gt3F18pcfWI1rXZePWTWU4qoITbbaYyJg1AQSzZy4oGO/Lx6dgodSzADMyfcb4zUBie/ip6Pc3By96RmYigFAmnvVl9z2lBbmaSSN5ytAXGb3F6p2WW5kLV6/KWLQmqccnY9GapMyFq1fpnZZbRolOeTIeoQmUELm+7D4FK5iRMDbG75OK3vR+QUlJm7B0VihBiUCdzswrtGfmFdoF6rQSlAhLZ4WUtD2Y3puH/iILt1pIGBsLihm+7H0Ep+bnWwSMt8fHDKnD2up6Pth08MELSkraFPKwQKSkpo0FGOGV3mle6Z0GjEhNG4tApCjk4R7RHt0b1Ns7Lj4aYEJGxjpzb1sfwZGuiCeAELs9KuCOBhJbuC6HOfe/55oQmiaEBjAnZxKF63IMFT3abgMwM7prXG9bH8Ee1X1mbI0MDagT6ZV8+Xk1uu4F+LC32HnPTOk3dt4zU/qIBj7UdS9ffl6N9MqAconoyV16bb1tfQRrXjECICwssOdXM2n86S9LiE+IRcAGpWS1QKQUrJ07oNge5j0zhbWvzUNDpHTHsuFxu40331mCZvJrU/eAsLDumaxpos+6OrCWBiHKZuWtvy4hPiFWE0IkFKydy6+eS/U7/uncFF56bR6aEAmP223a2xuWEhNrNTLFvpUAaVJtmoTOzqFVPqJsVv745yVcvtBE1tzAV2lP56ZgNocw+cl4oocotrPTA4CUqs85dt9llO5tQdPouNc1pM4AYmKtQxLbQzCxAO09uWumlt62PlO6K6qrAdCbm1uD6vTn5KbzLoCHW6F9Dvf6CD5fWupWUO9suvMwchsWnE13Ab6trf3I09vmey0NjhsNt+noeCgVTEPp6HDTeOMOCBy+7P0IFoeUVHxzyTm82Q0Dly40oaRCwSFfdt+fJc10EFCnq4w7d3pYnO7eeCiz1A76svsUXL2n6FugoupUHe4ufRjTMxaPW6emW/DJin3FPker34WHEmq7y+Wm8lTdcOVnOBXlV7tryoqS/nz6FezRKQF+2L3T8dOqvFEU3f8ZhpKKPbvOAHzvlmpHf379Cj53oKRdKbHlZnML5ccuG5JURGQYiRNGkThhlP3+j4jIMEPaPn7kEs3OuwghNg10RWLAA6swi2lLp0d/7YtPK8ekZ44nIiKwHVRvps0Yx7QZfXZsQdN+r4vSzyoBrnd0dPxrIN8BNw/lXxW1afBma4uLz4rLjczRUHZ8coK21k4Q4vfnj5TeG8h30NpS09Wz5+OTp6Vdv/bjlJGjRjAucaRxmRrA0UMX+XqnAyFEac3ebX8bzN+v7aFu0V5GUL/t4+NcvvjLWYxcvuhkR9EJgDrpDn3Vnxi/6sPNl8502pOmHVZSvni6+lpYWvo4bNHG7lMD5fq1H3n377txd+p3hBQLasqKrvsT5/cNAOfVszftSVNP6rp8obL8qnniZDsjRw1YqBs2rl65xXv/2EN7e5dLKfJq9m+v9Tc2oDsezrpzDfakqcd0XS6vPFkXFhtrfejP9LFDF9m6uYwul+eOUuTV7tt+IpD4gG+POevONcQlp++VXv05R/V3MbdutpKSGo8lyJLMYLTf6+KTD4/y9U4H0qvqhBQLAhnZHoZcFpy+rDC6+5qB+G2ULZz8lVnMzUlGaMZeTFNScfzIJUo/raKtzYUQolS6Q1+tPfhRn9MMfwg6u8y8Nb+TSm0UMMYeF83i5elkGVCE87h1Tp24wp5dZ7jZ3AJwAyHW1+zd9t9g2jVkOOYsXTuiu/Iu1gMjw60Wnpo1gYyZiUyeEk+4n7cHOjruXy6tqqemsh6Xyw3wPbDZ5XL9c7BFhT8YOv/SFhREWDSxCliNIBu6C9UJY2OJi4/GHmcj3Goh3Nq9RHV1dNHR4eGm8y5NjXdovHGnZ6OigJMoStxS7fjFXR/2xcwFBeOViWeVELkoMoDxQJ9az308dF8Qr5GCw2apHexvPxssD+0vABkZ68ymx1wJulmL7aluSJNqC/HI294fw2/4OnB7xCMe8Yje/A9z7iHQAOscpAAAAABJRU5ErkJggg==" alt=''/>
            </a>
            </S.About>
        </S.Container>
    )
}
