import styled from "styled-components";

    type ContainerProps={
        done:boolean;
    }

export const Container = styled.div(({done}:ContainerProps)=>(
    `
    color:white;
    display:flex;
    background-color:rgb(90,90,90);
    padding:10px;
    border-radius:10px;
    margin-bottom:10px;
    align-items:center;
    margin-top:10px;

    label{
        text-decoration:${done ? 'line-through' : 'initial'};
        font-family: 'Roboto', sans-serif;
        font-size:20px;
        
    }

    input{
        width:20px;
        height:20px;
        margin-right:5px;
    }

`
))