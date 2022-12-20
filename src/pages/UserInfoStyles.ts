import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    width:95vw;
    height:90vh;
    padding-left:5vw;

    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    transition-duration:0.5s;    

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;

    span{
        margin-bottom:30px;
        
        font-size:30px;
        font-weight:900;
        color:${(props) => props.theme.textColor};
        z-index:3;
    }

    img{
        position:absolute;
        right:0;
        margin-top:50px;
        border-radius:100%;
        z-index:2;
    }
`

export const FormContainer = styled.form`
    margin-top:100px;
    z-index:3;

    select{
        width:100px;
        height:50px;
        font-size:20px;
        font-weight:700;

        background-color:${(props) => props.theme.bgColor};
        border:0;
        border-bottom: 3px solid ${(props) => props.theme.primaryColor};

        margin-right:50px;
    }

    input[type="number"] {
        width:200px;
        height:50px;
        
        font-size:20px;
        font-weight:700;

        background-color:${(props) => props.theme.bgColor};
        border:0;
        border-bottom: 3px solid ${(props) => props.theme.primaryColor};
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`;

export const StyledSubmit = styled.input`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    margin-top:80px;

    span.start-button{
        font-size:30px;
        font-weight:700;

        background-color:${(props) => props.theme.primaryColor};
        color:white;

        padding: 20px 30px;

        margin-top:80px;

        border-radius:25px;
    }
`;