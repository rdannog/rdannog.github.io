import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./global";
import styled from "styled-components";

const ButtonChange = styled.button`
position: relative;
display: inline-block;
border: solid 2px #202945;
padding: 2vh 1vw;
background-color:#B6BDDB;        
font-size: 1.2vw;
color: #303030;
transition: all 1s ease;
&:hover{
    color: #fff;
    background-color:#202945;
    transition: all 0.8s ease 0s;
    animation: 5s ease 0s 1 normal none running;
    cursor:pointer;
}
@media (max-width: 768px) {
    font-size: 2.3vw;
}
@media (max-width: 425px) {
    font-size: 3.2vw;
}
@media (max-width: 320px) {
    font-size: 4.5vw;
}
`;


export default function Themes() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      if (theme === "light") {
        window.localStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        window.localStorage.setItem("theme", "light");
        setTheme("light");
      }
    }
      useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
      }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme/>
        <ButtonChange onClick={toggleTheme}>Switch theme</ButtonChange>
      </Fragment>
    </ThemeProvider>
  );
}

