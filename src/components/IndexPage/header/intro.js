import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export default function Intro() {
    const data = useStaticQuery(graphql`
        query {
           alldata{
            headers {
                photo {
                  url
                }
                intro
                subtitle
                description
                contact
              }
          }
        }
    `)
    const { description, intro, photo, subtitle} = data.alldata.headers[0]
    return (
        <S.Intro>
            <S.IntroContainer>
                <img src={photo.url} alt=""/>
            </S.IntroContainer>
            <S.IntroText>
                <h1>{intro} ✨</h1>
                <h3>{description}</h3>
                <p>{subtitle}</p>
            </S.IntroText>
        </S.Intro>
    )
}
