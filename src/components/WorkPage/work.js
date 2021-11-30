import React from 'react'
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby'

export default function Work() {
    const data = useStaticQuery(graphql`
        query {
           alldata{
            works {
                carshop {
                  url
                }
                danflix {
                  url
                }
                pokedex {
                  url
                }
                recipes {
                  url
                }
                strytegy {
                  url
                }
                uloax {
                  url
                }
                worktitle
                ziggy {
                  url
                }
              }
          }
        }
    `)
    const { carshop, danflix, pokedex, recipes, strytegy, uloax, worktitle, ziggy } = data.alldata.works[0]
    return (
        <S.Container>
            <S.Title>
                <h1>{worktitle}</h1>
            </S.Title>
            <S.Pages>
                <img src={ziggy.url} alt=""/>
                <img src={recipes.url} alt=""/>
                <img src={uloax.url} alt=""/>
                <img src={strytegy.url} alt=""/>
                <img src={danflix.url} alt=""/>
                <img src={carshop.url} alt=""/>
                <img src={pokedex.url} alt=""/>
                <img src="" alt=""/>
            </S.Pages>
        </S.Container>
    )
}
