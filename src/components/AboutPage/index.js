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
                    <div className="profilebox">
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
            </S.About>
        </S.Container>
    )
}
