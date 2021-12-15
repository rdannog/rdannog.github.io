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
                    <a href="https://ziggy-stardust.netlify.app/" target="_blank" rel="noreferrer noopener" >
                        <div className="mask">
                            <h1>Ziggy Stardust</h1>
                            <div className="badge">
                                <img 
                                src="https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white" 
                                alt="gatsby"/>
                                <img 
                                src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" 
                                alt="styled-components"/>
                                <img 
                                src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" 
                                alt="graphql"/>
                                <img 
                                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" 
                                alt="npm"/>
                                <img 
                                src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white"
                                alt="Git" />
                                <img 
                                src="https://img.shields.io/badge/Netlify-30C8C9?style=for-the-badge&amp;logo=netlify&amp;logoColor=white" 
                                alt="Netlify"/>
                            </div>
                        </div>
                        <img className="preview" src={ziggy.url} alt=""/>
                    </a>
                </div>
                <div className="box">
                    <a href="https://recipes-gatsby.netlify.app/" target="_blank" rel="noreferrer noopener">
                        <div className="mask">
                            <h1>Recipes Page</h1>
                            <div  className="badge">
                                <img 
                                src="https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white" 
                                alt="gatsby"/>
                                <img 
                                src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" 
                                alt="styled-components"/>
                                <img 
                                src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" 
                                alt="graphql"/>
                                <img 
                                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" 
                                alt="npm"/>
                                <img 
                                src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white"
                                alt="Git" />
                                <img 
                                src="https://img.shields.io/badge/Netlify-30C8C9?style=for-the-badge&amp;logo=netlify&amp;logoColor=white" 
                                alt="Netlify"/>
                            </div>

                        </div>
                        <img className="preview" src={recipes.url} alt=""/>
                    </a>
                
                </div>
                <div className="box">
                    <a href="https://uloax.netlify.app/" target="_blank" rel="noreferrer noopener">
                    <div className="mask">
                            <h1>Uloax Landing Page</h1>
                            <div  className="badge">
                                <img 
                                src="https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white" 
                                alt="gatsby"/>
                                <img 
                                src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" 
                                alt="styled-components"/>
                                <img 
                                src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" 
                                alt="graphql"/>
                                <img 
                                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" 
                                alt="npm"/>
                                <img 
                                src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white"
                                alt="Git" />
                                <img 
                                src="https://img.shields.io/badge/Netlify-30C8C9?style=for-the-badge&amp;logo=netlify&amp;logoColor=white" 
                                alt="Netlify"/>
                            </div>

                        </div>
                        <img className="preview" src={uloax.url} alt=""/>
                    </a>
                </div>
                <div className="box">
                    <a href="https://strytegy-clone.netlify.app/" target="_blank" rel="noreferrer noopener">
                    <div className="mask">
                            <h1>Strytegy Clone</h1>
                            <div  className="badge">
                                <img 
                                src="https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white" 
                                alt="gatsby"/>
                                <img 
                                src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" 
                                alt="styled-components"/>
                                <img 
                                src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" 
                                alt="graphql"/>
                                <img 
                                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" 
                                alt="npm"/>
                                <img 
                                src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white"
                                alt="Git" />
                                <img 
                                src="https://img.shields.io/badge/Netlify-30C8C9?style=for-the-badge&amp;logo=netlify&amp;logoColor=white" 
                                alt="Netlify"/>
                            </div>

                        </div>
                        <img className="preview" src={strytegy.url} alt=""/>
                    </a>
                </div>
                <div className="box">
                    <a href="https://rdannog.github.io/DanFlix-react-app/" target="_blank" rel="noreferrer noopener">
                        <img className="preview" src={danflix.url} alt=""/> 
                        <div className="mask">
                            <h1>DanFlix</h1>
                            <div  className="badge">
                                <img 
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" 
                                alt="react"/>
                                <img 
                                src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" 
                                alt="styled-components"/>
                                <img 
                                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" 
                                alt="npm"/>
                                <img 
                                src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white"
                                alt="Git" />
                                <img 
                                src="https://img.shields.io/badge/GH_Pages_Deploy-Published-22272E?style=for-the-badge&logo=github" 
                                alt="ghpages"/>
                            </div>

                        </div>
                    </a>
                </div>
                <div className="box">
                    <a href="https://rdannog.github.io/desafio-final-shopping-car/" target="_blank" rel="noreferrer noopener">
                    <div className="mask">
                            <h1>Car Shop</h1>
                            <div  className="badge">
                                <img 
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" 
                                alt="react"/>
                                <img 
                                src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" 
                                alt="styled-components"/>
                                <img 
                                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" 
                                alt="npm"/>
                                <img 
                                src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white"
                                alt="Git" />
                                <img 
                                src="https://img.shields.io/badge/GH_Pages_Deploy-Published-22272E?style=for-the-badge&logo=github" 
                                alt="ghpages"/>
                            </div>

                        </div>
                        <img className="preview" src={carshop.url} alt=""/>
                    </a>
                </div>
                <div className="box">
                    <a href="https://rdannog.github.io/react-pokedex-app/" target="_blank" rel="noreferrer noopener">
                    <div className="mask">
                            <h1>Pokédex Api</h1>
                            <div  className="badge">
                                <img 
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" 
                                alt="react"/>
                                <img 
                                src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" 
                                alt="styled-components"/>
                                <img 
                                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" 
                                alt="npm"/>
                                <img 
                                src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white"
                                alt="Git" />
                                <img 
                                src="https://img.shields.io/badge/GH_Pages_Deploy-Published-22272E?style=for-the-badge&logo=github" 
                                alt="ghpages"/>
                            </div>

                        </div>
                        <img className="preview" src={pokedex.url} alt=""/>
                    </a>
                </div>
                <div className="box"></div>
            </S.Pages>
        </S.Container>
    )
}
