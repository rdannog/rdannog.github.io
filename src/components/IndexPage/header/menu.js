import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import { Socialmedia } from './socialmedia'

export default function Menu() {
    const data = useStaticQuery(graphql`
        query {
           alldata{
            headers {
                blacklogo {
                  url
                }
                whitelogo {
                  url
                }
            }
          }
        }
    `)
    const {blacklogo, whitelogo} = data.alldata.headers[0]
    return (
        <S.Container>
          <S.Navigation>
            <ul>
              <li><S.StyledLink to="/">Home</S.StyledLink></li>
              <li><S.StyledLink to="/work">Work</S.StyledLink></li>
              <li><S.StyledLink to="/about">About</S.StyledLink></li>
              <li><S.StyledLink to="/blog">Blog</S.StyledLink></li>
            </ul>
          </S.Navigation>
          <S.LogoContainer>
            <Link to="/">
            <S.BlackLogo src={blacklogo.url} alt=""/>
            </Link>
            <S.WhiteLogo>
              <Link to="/">
                <img src={whitelogo.url} alt=""/>
              </Link>
            </S.WhiteLogo>
          </S.LogoContainer>
          <Socialmedia/>
      </S.Container>
    )
}
