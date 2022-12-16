import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from 'recoil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { isDarkMode, isLoginPage } from "../../atoms";
import {Container, HeaderRight, Button} from './HeaderStyle';





function Header() {
    const [_isLoginPage, setIsLoginPage] = useRecoilState(isLoginPage);
    const [_isDarkMode, setIsDarkMode] = useRecoilState(isDarkMode);
    return(
            <Container>
                <Link to="/"  style={{ textDecoration: 'none' }}>
                    <h1>footirtions</h1>
                </Link>
                <HeaderRight>
                    {_isDarkMode ? 
                        <FontAwesomeIcon icon={ faSun } onClick={() => setIsDarkMode(prev => !prev)} /> 
                        : <FontAwesomeIcon icon={ faMoon } onClick={() => setIsDarkMode(prev => !prev)} />
                    }                    
                    {_isLoginPage? <></> : 
                    <Link to='/Login' style={{ textDecoration: 'none' }}>
                        <Button onClick={() => setIsLoginPage(true)}>Login</Button>
                    </Link>
                    }
                </HeaderRight>
            </Container>
    )
};

export default Header;