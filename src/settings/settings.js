import React from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";

export function Settings() {
  return (
    <div>
      <Helmet>
        <title>DAN NOGUEIRA</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
        </style>
        <link rel="shortcut icon" href="" type="image/x-icon" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        {AOS.init()}
      </Helmet>
    </div>
  )
}