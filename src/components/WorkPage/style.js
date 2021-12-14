import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    background-color:#B6BDDB;
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
        @media (max-width: 500px) {
            font-size: 7vw;
        }
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
        &:hover .mask{
            visibility: visible;
            border: 4px solid #202945;
            border-radius: 5px;
            padding: 8vh 5vw;
            width: 100%;
            height:100%;
            opacity: 0.9; 
            cursor:pointer;
        }
        .preview{
            border-radius: 5px;
            width:100%;
        }
        .mask{
            display:flex;
            flex-direction: column;
            flex-wrap: wrap;
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
            transition: visibility 0s, opacity 0.5s linear;
            h1{
                font-size:3vw;
                margin-bottom:5vh;
            }
            .badge{
                display:flex;
                flex-wrap:wrap;
                align-items:center;
                justify-content:center;
                width:90%;
                img{
                    margin:0.5vh 0.2vw;
                    cursor:pointer;
                }
            }
            
        }
        @media (max-width: 500px) {
            width:90%;
        }
    }
`