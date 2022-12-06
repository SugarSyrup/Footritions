import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
    width:90vw;
    height:90vh;

    padding-left:10vw;;

    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    transition-duration:0.5s;    

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    span.main-content{
        margin-bottom:30px;
        
        font-size:56px;
        font-weight:900;
        color:${(props) => props.theme.textColor};
    }
`;


export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    margin-top:80px;

    span.start-button{
        font-size:36px;
        font-weight:700;

        background-color:${(props) => props.theme.primaryColor};
        color:white;

        padding: 20px 30px;

        margin-top:60px;

        border-radius:25px;
    }
`;
