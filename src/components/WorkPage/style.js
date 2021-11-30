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
        font-weight:100;
    }
`
export const Pages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width:100%;
    img{
        margin-bottom:10vh;
        width:45%;
    }
`