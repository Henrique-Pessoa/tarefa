import styled from "styled-components";

export const Container =styled.div`
    border:1px solid black;
    border-radius:15px;
    padding:10px;
    margin:20px 0px;
    display:flex;
    align-items:center;
    input{
        border:none;
        background-color:transparent;
        outline:0;
        color:white;
        font-size:18px;
        flex:1;
    }
`;
export const Icon = styled.div`
    img{
        margin-right:10px;
        width:40px;
        cursor: pointer;
    }
`;