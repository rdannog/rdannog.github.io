import styled from "styled-components";

export const Container = styled.section`
    height: 17vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 10px #e6e6e6;
`
export const Navigation =styled.nav`
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    ul{
        width: 80%;
        display:flex;
        justify-content: space-around;
    }
    li{
        font-size: 1.4vw;
        text-transform: uppercase;
        &:hover{
            font-weight: bold;
        }
    }
`
export const LogoContainer = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        cursor: pointer;
    }
`
export const Socialmedia = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const IconContainer = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
        cursor: pointer;
        &:hover{
            margin-bottom:1vh;
        }
    }
`
export const HelloBtn = styled.div`
    button{
        padding: 2.5vh 2vw;
        cursor: pointer;
        border: solid 2px #303030;
        font-size: 1.2vw;
        background: #fff;
        color: #303030;
        text-transform: uppercase;
        &:hover{
            background: #303030;
            color: #fff;
        }
    }
`