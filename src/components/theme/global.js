import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*,
*::after,
*::before {
box-sizing: border-box;  
}
body {
  background: ${({ theme }) => theme.background} ;
  color: ${({ theme }) => theme.color};
  margin: 0;    
  padding: 0;    
  font-family: sans-serif;
}
a{
    color: ${({ theme }) => theme.hover}} ;
}
path{
    fill: ${({ theme }) => theme.color};
}
h3{
    color: ${({ theme }) => theme.text};
}
`;