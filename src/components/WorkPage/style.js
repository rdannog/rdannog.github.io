import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`
export const Title = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width:100%;
    height:25vh;
    h1{
        text-transform:uppercase;
        font-size:2.5vw;
        font-weight:500;
        color:#202945;
    }
`
export const Pages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width:100%;
    .box{
        position: relative;
        margin-bottom:10vh;
        width:45%;
        &:hover div{
            visibility: visible;
            border: 5px solid #B6BDDB;
            border-radius: 5px;
            padding: 8vh 5vw;
            width: 100%;
            height:100%;
            opacity: 0.8; 
            cursor:pointer;
        }
        div{
            display:flex;
            align-items:center;
            justify-content:center;
            position: absolute;
            bottom: 0;
            right: 0;
            margin-bottom: 5px;
            background: rgb(212, 244, 198);
            color: #202945;
            text-transform: uppercase;
            font-size:2.3vw;
            font-weight:900;
            opacity: 0;
            visibility: hidden;
            -webkit-transition: visibility 0s, opacity 0.5s linear; 
            transition: visibility 0s, opacity 0.5s linear;

        }
        img{
            border-radius: 5px;
            width:100%;
        }
    }
`