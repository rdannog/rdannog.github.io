import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d6d6d6;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 15vh;
    width: 100%;
    background-color: #f5f5f5;
    button{
        position: relative;
        display: inline-block;
        border: solid 2px #202945;
        padding: 2vh 1vw;
        background: #fff;
        font-size: 1.2vw;
        color: #303030;
        transition: all 1s ease;
        &:hover{
            color: #fff;
            background-color:#303030;
            transition: all 0.8s ease 0s;
            animation: 5s ease 0s 1 normal none running;
            cursor:pointer;
        }
    }
    }
`
export const Copyright = styled.section`
    width:100%;
    height:7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#303030;
    p{
        font-weight:100;
        font-size:1vw;
        color:#fff;
    }
`
