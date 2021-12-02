import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 5vh 2vw;
    color:#202945;
`
export const About = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #202945;
    background-color: #f0faf0;
`
export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    width: 35%;
    
    .profilebox{
        display: flex;
        align-items: center;
        justify-content: center;
        animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1 both;
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
        border: 1px solid #202945;
        border-radius: 50%;
        margin-bottom: 5vh;
        width: 80%;
    }
    h1{
        margin-bottom: 5vh;
        font-size: 2vw;
        font-weight: 500;
        animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both;
        @keyframes slide-right {
            0% {
                transform: translateX(20%);
            }
            100% {
                transform: translateX(0);
            }
        }
    }
    
              
`
export const Skills = styled.div`
    padding: 5vh 0;    
    width: 45%;
    text-align: justify;
    li{
        margin-bottom: 1.7vh;
        font-size: 1.3vw;
        font-weight: 300;
        animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        @keyframes slide-top {
            0% {
                transform: translateY(50%);
            }
            100% {
                transform: translateY(0);
            }
          }
    }
    h2{
        margin-bottom: 3vh;
        text-align: center;
        text-transform: uppercase;
        font-size: 2vw;
        font-weight: 500;
    }
`
