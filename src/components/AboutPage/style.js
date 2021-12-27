import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 7vh 2vw;
    color:${({ theme }) => theme.text};
    background-color:${({ theme }) => theme.background};
`
export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    width: 100%;
    .profilebox{
        display: flex;
        align-items: center;
        justify-content: center;
        animation: flip-vertical-right 1.1s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1 both;
        @keyframes flip-vertical-right {
            0% {
                -webkit-transform: rotateY(180deg);
                transform: rotateY(180deg);
            }
            100% {
                -webkit-transform: rotateY(0);
                transform: rotateY(0);
            }
        }
        
    }
    .profile{
        border: 2px solid #202945;
        border-radius: 50%;
        margin-bottom: 5vh;
        width: 80%;
    }
    h1{
        margin-bottom: 7vh;
        font-family: 'Reenie Beanie', cursive;
        font-size: 4vw;
        font-weight: 500;
        animation: slide-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both;
        @keyframes slide-right {
            0% {
                transform: translateX(20%);
            }
            100% {
                transform: translateX(0);
            }
        }
        @media (max-width: 500px) {
            font-size: 10vw;
        }
    }
    .badge {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-bottom: 2px solid ${({ theme }) => theme.background};
        padding-bottom: 5vh;
        width: 70%;
        img{
            width: 100%;
            border-radius:10px;
            cursor: pointer;
        }
        .gmail{
            height:50%
        }
        @media (max-width:500px) {
            width: 100%;
            flex-direction: column;
            img{
                margin-bottom: 2vh;
                width: 100%;
            }
            
        }
    }            
`
export const Skills = styled.div`
    padding: 5vh 0;    
    width: 90%;
    .item{
        display: flex;
        align-items: center;
        justify-content: start;
        margin-bottom: 5vh;
        padding: 7vh 5vw;
        p{
            font-family: 'Reenie Beanie', cursive;
            text-align: justify;
            font-size: 4vw;
            color: ${({ theme }) => theme.text};
            @media (max-width: 500px) {
                font-size: 7vw;
            }
        }
    }
    .tech{
        border-radius:50%;
    }
    .left{
        margin-left: 5vw;
        
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`
export const Emoji = styled.img`
    width: 15%;
    margin-right: 5vw;
    @media (max-width: 500px) {
        width: 20%;
    }
`