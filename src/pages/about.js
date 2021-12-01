import React from "react"
import * as S from "../settings/GlobalStyle"
import { Settings } from "../settings/settings.js"
import Menu from "../components/IndexPage/header/menu.js"
import Footer from "../components/IndexPage/footer/index.js"
import About from "../components/AboutPage/index"

export default function AboutPage() {
  return (
    <div>
      <S.GlobalStyle />
      <Settings />
      <Menu />
      <About />
      <Footer />
    </div>
  )
}
