import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 10px #e6e6e6;
    height: 15vh;
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
`
export const StyledLink = styled(Link)`
    padding:15% 10%;
    &:hover{
        border: 2.2px solid #303030;
        animation: mymove 0.8s ease-in-out;
        animation-timing-function: ease;
    }
    @keyframes mymove {
        from {padding:0 0;}
        to {padding:15% 10%;}
      }
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
`
export const BlackLogo = styled.img`
    width: 100%;
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
`
export const HelloBtn = styled.div`
    button{
        position: relative;
        display: inline-block;
        border: solid 2px #303030;
        padding: 2.5vh 2vw;
        background: #fff;
        text-transform: uppercase;
        font-size: 1.2vw;
        color: #303030;
        transition: all 1s ease;
        &:hover{
            color: #fff;
            background-color:#000;
            transition: all 0.8s ease 0s;
            animation: 5s ease 0s 1 normal none running;
            cursor:pointer;
        }
    }
    }
`
export const Intro = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 85vh;
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
        height: 90%;
        background: #303030;
        transform:translateX(-120%);
        animation: 3s slide 0s forwards;
        @keyframes slide {
            to {
            transform:translateX(0);
            }
        }
    }
`
export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 50%;
    height: 70%;

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
    }
    h3{
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 3.5vw;
        width: 90%;
    }
    p{
        font-size: 1.6vw;
    }
    
`