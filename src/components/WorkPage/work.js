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
                <div className="box">
                    <a href="https://ziggy-stardust.netlify.app/" target="_blank" >
                        <div>Ziggy Stardust</div>
                        <img src={ziggy.url} alt=""/>
                    </a>
                </div>
                <div className="box">
                    <a href="https://recipes-gatsby.netlify.app/" target="_blank">
                        <div>Recipes Page</div>
                        <img src={recipes.url} alt=""/>
                    </a>
                
                </div>
                <div className="box">
                    <a href="https://uloax.netlify.app/" target="_blank">
                        <div>Uloax Landing Page</div>
                        <img src={uloax.url} alt=""/>
                    </a>
                </div>
                <div className="box">
                    <a href="https://strytegy-clone.netlify.app/" target="_blank">
                        <div>Strytegy Clone</div>
                        <img src={strytegy.url} alt=""/>
                    </a>
                </div>
                <div className="box">
                    <a href="https://rdannog.github.io/DanFlix-react-app/" target="_blank">
                        <img src={danflix.url} alt=""/> 
                        <div>DanFlix</div>
                    </a>
                </div>
                <div className="box">
                    <a href="https://rdannog.github.io/desafio-final-shopping-car/" target="_blank">
                        <div>Car Shop</div>
                        <img src={carshop.url} alt=""/>
                    </a>
                </div>
                <div className="box">
                    <a href="https://rdannog.github.io/react-pokedex-app/" target="_blank">
                        <div>Pokédex App</div>
                        <img src={pokedex.url} alt=""/>
                    </a>
                </div>
                <div className="box">
                    <a href="/">
                        <div>Back to home</div>
                        <img src="" alt=""/>
                    </a>
                </div>
            </S.Pages>
        </S.Container>
    )
}
