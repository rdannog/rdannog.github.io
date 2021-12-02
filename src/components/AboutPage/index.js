import React from 'react'
import * as S from './style'

export default function About() {
    return (
        <S.Container>
            <S.About>
                <S.Intro>
                    <div className="profilebox">
                        <img className="profile" src="https://avatars.githubusercontent.com/u/49248176?v=4" alt=""/>
                    </div>
                    <div>
                        <h1>Hi there 👋, I'm Dandaro</h1>
                    </div>
                    <div>
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
                            src="https://img.shields.io/badge/Linkedin-B6BDDB?style=for-the-badge&amp;logo=LinkedIn&amp;logoColor=202945" 
                            alt="linked-in"/>
                        </a>
                    </div>
                </S.Intro>

                <S.Skills>
                    <h2>More about me</h2>
                    <ul>
                        <li>🧑🏾‍💻 Front-end developer React.js and also a person.</li>
                        <li>🌱 Going deeper into HTML5, CSS3 and JavaScript.</li>
                        <li>🚀 Currently teaching HTML, CSS and React JS to begginer students.</li>
                        <li>🎓 Undergraduate student in Social Sciences, with major in digital sociology studies.</li>
                        <li>🤓 I'm learning front-end development with technologies: ReactJS, GatsbyJS, Styled-Components, GraphQL, and Git flow.</li>
                        <li>🇺🇸 Practicing english to achieve fluency.</li>
                        <li>🤔 I'm looking to help with social impact projects.</li>
                        <li>💬 Any help or tips is always welcome! (seriously)</li>
                        <li>❤️ Interests: watch video essays on youtube, <b>David Bowie</b>, documental series, Drag Race, listen to music and read books.</li>
                        <li>🎨 I love doing analog collages, watercolor paintings, singing and checking if my cactus are growing (they are growing nice)</li>
                        <li>😇 I'm 23, identify myself as a non-binary person and I'm also a gemini. My pronoums are he/they.</li>
                    </ul>
                </S.Skills>
            </S.About>
        </S.Container>
    )
}
