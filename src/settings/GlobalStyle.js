//import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  cursor:default;  
  scroll-behavior: smooth;
  font-family: 'Roboto', sans-serif;
  list-style:none;
}
body{
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #fff; 
}
::-webkit-scrollbar-thumb {
  background: #9B9B9B; 
}
::-webkit-scrollbar-thumb:hover {
  background: #202945; 
}
}
a{
  text-decoration:none;
  cursor:pointer;
  color:#202945;
}
button:hover{
  transition:0.7s ease-in;
}
`