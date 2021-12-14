import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import { Socialmedia } from './socialmedia'
import Navbar from '../MobileNav/navbar'

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
              <li><S.StyledLink to="/about">About</S.StyledLink></li>
              {/* <li><S.StyledLink to="/blog">Blog</S.StyledLink></li> */}
              <li><S.StyledLink to="/work">Work</S.StyledLink></li>
            </ul>
          </S.Navigation>
          <Navbar />
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
