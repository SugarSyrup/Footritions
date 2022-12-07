import styled from "styled-components";

export const Container = styled.div`
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

export const HeaderRight = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;  
  margin-right:60px;

  svg{
    font-size:36px;
    cursor:pointer;
  }
`;

export const Button = styled.div`
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