import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 15vh;
    width: 100%;
    background-image:linear-gradient(transparent,  rgba(212, 244, 198, 0.7));
    button{
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
    }
    @media (max-width: 320px) {
        height: 17vh;
    }
`
export const Copyright = styled.section`
    width:100%;
    height:7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#202945;
    p{
        font-family: 'Reenie Beanie', cursive;
        font-weight:100;
        font-size:1.4vw;
        color:rgb(212, 244, 198);
        @media (max-width: 425px) {
            font-size: 2vw;
        }
        @media (max-width: 320px) {
            font-size: 3.5vw;
        }
    }
`
