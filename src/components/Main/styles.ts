import styled from 'styled-components'

export const Container = styled.main` 
    background-color: #2941ab;
    height: 100vh;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #1ed760;
    background-image: url(https://www-growth.scdn.co/static/home/bursts.svg);
    background-position: 46% 4%;
    background-size: 175%;

    h1{
        font-size: 150px;
        font-weight: bolder;
        width: 80%;
    }

    p{
        font-size: 20px;
        width: 70%;

    }
    button{
        background-color: #1ed760;
        border-radius: 50px;
        padding: 10px 30px;
        border: none;
        color: #2941ab;
        font-weight: bold;
        cursor: pointer;

        &:hover{
            padding: 12px 32px;

        }
    }
`;