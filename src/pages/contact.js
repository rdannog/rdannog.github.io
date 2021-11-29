import React from "react"
import { Link } from "gatsby"
import * as S from "../settings/GlobalStyle"
import { Settings } from "../settings/settings.js"
import Menu from "../components/IndexPage/header/menu.js"
import Footer from "../components/IndexPage/footer/index.js"


export default function Contact() {
  return (
    <div>
      <S.GlobalStyle />
      <Settings />
      <Menu />
      <h1>ContactPage is Under Construction</h1>
      <Link to="/"><h2>Go home</h2></Link>
      <Footer />
    </div>
  )
}
