import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export default function Intro() {
    const data = useStaticQuery(graphql`
        query {
           alldata{
            headers {
                arrow{
                    url
                }
                photo {
                  url
                }
                intro
                subtitle
                description
                contact
                me
              }
          }
        }
    `)
    const { description, intro, photo, subtitle, arrow, me} = data.alldata.headers[0]
    return (
        <S.Intro>
            <S.IntroContainer>
                <p className='text-intro'>{me}</p>
                <img className='arrow' src={arrow.url} alt='me'/>
                <img className='me' src={photo.url} alt=""/>
            </S.IntroContainer>
            <S.IntroText>
                <h1>{intro} ✨</h1>
                <h3>{description}</h3>
                <p>{subtitle}</p>
            </S.IntroText>
        </S.Intro>
    )
}
