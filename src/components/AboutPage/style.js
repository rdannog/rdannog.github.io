import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`
export const About = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90%;
    height: 100vh;
`
export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    width: 45%;
    .profilebox{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .profile{
        border-radius: 50%;
        margin-bottom: 5vh;
        width: 80%;
    }
    h1{
        margin-bottom: 5vh;
        font-size: 2vw;
    }
`
export const Skills = styled.div`
    
    text-align: justify;
    li{
        margin-bottom: 1.7vh;
        font-size: 1.3vw;
    }
`
