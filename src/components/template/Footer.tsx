import React from "react";

import { faGithub, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import { FooterContainer, StyledIcon } from "./FooterStyle";

const Footer = () => {
    return(
        <FooterContainer>
            <StyledIcon icon={ faReact } />
            <StyledIcon icon={ faNodeJs } />
            <StyledIcon icon={ faGithub } onClick={() => window.location.href = 'https://github.com/SugarSyrup'}/>
        </FooterContainer>
    )
};

export default Footer;