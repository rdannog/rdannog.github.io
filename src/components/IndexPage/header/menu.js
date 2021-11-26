import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import { Socialmedia } from './socialmedia'

export function Menu() {
    const data = useStaticQuery(graphql`
        query {
           alldata{
            headers {
                about
                blacklogo {
                  url
                }
                blog
                contact
                description
                home
                intro
                photo {
                  url
                }
                subtitle
                whitelogo {
                  url
                }
                work
            }
          }
        }
    `)
    const {about, blacklogo, whitelogo, blog, contact, description, home, intro, photo, subtitle, work} = data.alldata.headers[0]
    return (
        <S.Container>
          <S.Navigation>
            <ul>
              <li><Link to="/">{home}</Link></li>
              <li><Link to="/work">{work}</Link></li>
              <li><Link to="/about">{about}</Link></li>
              <li><Link to="/blog">{blog}</Link></li>
            </ul>
          </S.Navigation>
          <S.LogoContainer>
            <Link to="/">
            <img src={blacklogo.url} alt=""/>
            </Link>
          </S.LogoContainer>
          <Socialmedia/>
      </S.Container>
    )
}
