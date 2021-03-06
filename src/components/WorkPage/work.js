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
                            <h1>Pok??dex Api</h1>
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
                <a href='#top' className='back'>
              <img src="data:image/png;base64,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" alt=''/>
            </a>
            </S.Pages>
        </S.Container>
    )
}
