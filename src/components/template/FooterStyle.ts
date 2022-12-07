import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterContainer = styled.div`
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    transition-duration:0.5s;

    width:100vw;
    height:5vh;
    padding-right:2vw;

    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;

    position:fixed;
    bottom:0;

    svg {
        font-size:28px;
        margin-left:20px;
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`
    
`;