import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    background-color: black;
    padding: 5%;

    justify-content: space-between;


    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
    }

    li{
        margin: 10px ;
        color: #919496;
    }

    div{
        justify-content: right;
        display: flex;
        flex-direction: column;
        color: #919496;
    }





`;