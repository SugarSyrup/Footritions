import React from "react";
import styled from "styled-components";

import { useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

import {isLoginPage} from '../atoms';

const Main = styled.div`
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

const StyledLink = styled(Link)`
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

function Home() {
    const setIsLoginPage = useSetRecoilState(isLoginPage);
    setIsLoginPage(false);
    
    return(
            <Main>
                <span className="main-content">방금 먹은 식사의</span>
                <span className="main-content">영양성분을</span>
                <span className="main-content">분석해 드려요 </span>
                <StyledLink to="/user">
                    <span className="start-button">분석 시작하기!</span>
                </StyledLink>
            </Main>
    )
};

export default Home;