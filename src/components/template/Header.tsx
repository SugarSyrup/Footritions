import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { isDarkMode, isLoginPage } from "../../atoms";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    transition-duration:0.5s;

    width:100vw;
    height:10vh;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    h1{
        font-family: 'Anton', sans-serif;
        margin-left:40px;
        font-size:46px;
        font-weight:bolder;
    }
`;

const HeaderRight = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;  
  margin-right:60px;

  svg{
    font-size:36px;
    cursor:pointer;
  }
`;

const Button = styled.div`
    width:100px;
    height:50px;
    border:2px solid ${(props) => props.theme.primaryColor};
    border-radius:24px;
    margin-left:60px;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:18px;
    font-weight:bolder;
    color:${(props) => props.theme.textColor};

    transition-duration:0.5s;
    &:hover {
        background-color:${(props) => props.theme.primaryColor};
        border-color:${(props) => props.theme.textColor};
        cursor:pointer;
    }
`

function Header() {
    const _isLoginPage = useRecoilValue(isLoginPage);
    const setIsLoginPage = useSetRecoilState(isLoginPage);
    const setIsDarkMode = useSetRecoilState(isDarkMode);
    const _isDarkMode = useRecoilValue(isDarkMode);
    return(
            <Container>
                <Link to="/"  style={{ textDecoration: 'none' }}>
                    <h1>footirtions</h1>
                </Link>
                <HeaderRight>
                    {_isDarkMode ? <FontAwesomeIcon icon={ faSun } onClick={() => setIsDarkMode(prev => !prev)} /> :
                    <FontAwesomeIcon icon={ faMoon } onClick={() => setIsDarkMode(prev => !prev)} />
                    }                    
                    {/* {_isLoginPage? <></> : 
                    <Link to='/Login' style={{ textDecoration: 'none' }}>
                        <Button onClick={() => setIsLoginPage(true)}>Login</Button>
                    </Link>
                    }                     */}
                </HeaderRight>
            </Container>
    )
};

export default Header;