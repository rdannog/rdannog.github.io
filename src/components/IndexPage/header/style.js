import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.1vh solid #202945;
    height: 15vh;
    background-color:#B6BDDB;    
`
export const Navigation =styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 100%;
    ul{
        display:flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        height: 100%;
    }
    li{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        height: 50%;
        text-transform: uppercase;
        font-size: 1.4vw;
    }
    @media (max-width: 500px) {
        display: none;
    }
`
export const StyledLink = styled(Link)`
    padding:10% 10%;
    &:hover{
        color:#202945 ;
        background-color: rgb(212, 244, 198);
        border: 2.2px solid #202945;
        animation: mymove 0.8s ease-in-out;
        animation-timing-function: ease;
    }
    @keyframes mymove {
        from {padding:0 0;}
        to {padding:10% 10%;}
      }
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    @media (max-width: 500px) {
        width: 50%;
    }
`
export const BlackLogo = styled.img`
    width: 100%;
    background-color: rgb(212, 244, 198);
    cursor: pointer;
`

export const WhiteLogo = styled.div`
    display: none;
    position: absolute;
    top: 2.3%;
    cursor: pointer;
`
export const Socialmedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30%;
`
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 35%;
    svg{
        border-radius: 50%;
        transition: all 0.2s ease;
        &:hover{
            margin-bottom:1vh;
            transition: all 0.5s ease 0s;
            animation: 5s ease 0s 1 normal none running;
        }
    }
    @media (max-width: 500px) {
        display: none;
    }
`
export const HelloBtn = styled.div`
    button{
        position: relative;
        display: inline-block;
        border: solid 2px #202945;
        padding: 2.5vh 2vw;
        background-color: rgb(212, 244, 198);
        text-transform: uppercase;
        font-size: 1.2vw;
        color: #303030;
        transition: all 1s ease;
        &:hover{
            color: rgb(212, 244, 198);
            background-color:#202945;
            transition: all 0.8s ease 0s;
            animation: 5s ease 0s 1 normal none running;
            cursor:pointer;
        }
    }
    @media (max-width: 500px) {
        display: none;
    }
`
export const Intro = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 85vh;
    background-color:#B6BDDB;
    @media (max-width: 500px) {
        flex-direction: column;
        height: 100vh;   
    }
`
export const IntroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
    img{
        border: solid 2px #303030;
        border-radius: 50%;
        width: 80%;
        background-color: rgb(212, 244, 198);
        transform:translateX(-120%);
        animation: 3s slide 0s forwards;
        @keyframes slide {
            to {
            transform:translateX(0);
            }
        }
    }
    @media (max-width: 500px) {
        margin-top:5vh;
        width: 60%;
        height: 60%;
    }
    @media (max-width: 320px) {
        width:100%;
    }
`
export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 50%;
    height: 70%;
    color:#202945;

    transform:translateY(-30%);
    animation: 3s slide 0s forwards;
    @keyframes slide {
        to {
          transform:translateY(0);
        }
    }

    h1{
        font-size: 2.8vw;
        font-weight: lighter;
        @media (max-width: 768px) {
            font-size: 3.5vw;
        }
        @media (max-width: 500px) {
            font-size: 5vw;
        }
        @media (max-width: 320px) {
            font-size: 10vw;
        }
    }
    h3{
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 3.5vw;
        width: 90%;
        @media (max-width: 768px) {
            font-size: 4vw;
        }
        @media (max-width: 500px) {
            font-size: 4.5vw;
            width: 80%;
            text-align: center;
        }
        @media (max-width: 320px) {
            width:100%;
            font-size: 6.5vw;
        }
    }
    p{
        font-size: 1.6vw;
        @media (max-width: 768px) {
            font-size: 1.9vw;
        }
        @media (max-width: 500px) {
            font-size: 2.5vw;
            font-weight: bold;
        }
        @media (max-width: 320px) {
            font-size: 5vw;
            text-align: center;
        }
    }
    @media (max-width: 768px) {
        height: 60%;
    }
    @media (max-width: 500px) {
        margin-bottom: 7vh;
        align-items: center;
        justify-content: space-evenly;
        width: 75%;
        height: 40%;
    }
    @media (max-width: 320px) {
       height: 80%;
    }
    
`
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
export const Anchor = styled(Link)`
    padding: 0% 10%;
    color:rgb(212, 244, 198);
    animation: mymove 0.8s ease-in-out;
    animation-timing-function: ease;
    @keyframes mymove {
        from {padding:0 0;}
        to {padding:10% 10%;}
      }
`
export const Social = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height:100%;
`
export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
        border-radius: 50%;
        width:15vw;
        transition: all 0.2s ease;
        &:hover{
            margin-bottom:1vh;
            transition: all 0.5s ease 0s;
            animation: 5s ease 0s 1 normal none running;
        }
    }
`
export const Hello = styled.div`
    button{
        position: relative;
        display: inline-block;
        border: solid 2px #202945;
        padding: 4vh 10vw;
        background-color: rgb(212, 244, 198);
        text-transform: uppercase;
        font-size: 5vw;
        color: #303030;
        transition: all 1s ease;
        &:hover{
            color: rgb(212, 244, 198);
            background-color:#202945;
            transition: all 0.8s ease 0s;
            animation: 5s ease 0s 1 normal none running;
            cursor:pointer;
        }
    }
`