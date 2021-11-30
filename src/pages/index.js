import React from "react"
import * as S from "../settings/GlobalStyle"
import { Settings } from "../settings/settings.js"
import Menu from "../components/IndexPage/header/menu.js"
import Intro  from "../components/IndexPage/header/intro"
import Footer from "../components/IndexPage/footer/index.js"


export default function Index() {
  return (
    <div>
      <S.GlobalStyle />
      <Settings />
      <Menu/>
      <Intro />
      <Footer />
    </div>
  )
}

