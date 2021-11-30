import React from "react"
import * as S from "../settings/GlobalStyle"
import { Settings } from "../settings/settings.js"
import Menu from "../components/IndexPage/header/menu.js"
import Footer from "../components/IndexPage/footer/index.js"
import Work from "../components/WorkPage/work"

export default function WorkPage() {
  return (
    <div>
      <S.GlobalStyle />
      <Settings />
      <Menu />
      <Work />
      <Footer />
    </div>
  )
}
