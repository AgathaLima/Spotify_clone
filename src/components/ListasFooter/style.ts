import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 40%;
    margin-top: 20px;
    
    div{
        margin: 0 auto;
    }
    
    ul{
    display: flex;
    flex-direction: column;
    text-align: left;
    }

    a{
        cursor: pointer;
        padding: 10% 0;
    }
    
    small{
        color: #919496;
    }
`;