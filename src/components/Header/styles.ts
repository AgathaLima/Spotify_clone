import styled from "styled-components";

export const Container = styled.header`
    background-color: black;
    color: white;
    height: 80px;
    display: flex;
    justify-content: space-evenly;

    div{
        width: 80%;
        margin: 0 auto;
    }
    ul{
        display: flex;
        list-style: none;

        li{
            margin: 20px;
            cursor: pointer;

        }
    }

    .logo{
        margin-left: 10px;
        margin-top: 5px;
    }
`;