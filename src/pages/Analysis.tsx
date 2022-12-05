import React, {useState, ReactNode} from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useSetRecoilState } from 'recoil';

import FoodInput from "../components/FoodInput";
import { inputFoods } from "../atoms";

const Container = styled.div`
  width:95vw;
  height:90vh;
  
  padding-left:5vw;

  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;

  transition:0.5s;

  span.heading{
    font-size:36px;
    font-weight:bolder;
    
    margin-top:80px;
    margin-bottom:20px;
  }

  span.smallTxt {
    margin-bottom:5px;
    margin-left:10px;

    color:grey;
    span{
        color:red;
        font-weight:bolder;
    }
  }
  
  span.button{    
    margin-right:20px;
    padding: 20px 30px;
    border-radius:25px;

    font-size:20px;
    font-weight:700;

    border:${(props) => props.theme.primaryColor} 2px solid;
    color:${(props) => props.theme.textColor};

    transition:0.5s;
    cursor:pointer;
    &:hover{
        background-color:${(props) => props.theme.primaryColor};
        color:white;
    }
  }

  img{
    position:absolute;
    right:0;
    border-radius:100%;
    margin-top:60px;
  }
`;

const Buttons = styled.div`    
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    
    margin-top:50px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    
    position:absolute;
    right:5vw;
    bottom:10vh;

    padding: 30px 40px;
    border-radius:30px;

    font-size:35px;
    font-weight:700;

    border:${(props) => props.theme.primaryColor} 3px solid;
    color:${(props) => props.theme.textColor};

    transition:0.5s;
    z-index:3;
    &:hover{
        background-color:${(props) => props.theme.primaryColor};
        color:white;
    }
`


const Analysis = () => {
    const [foodInputs, setFoodInputs] = useState<{value:string, code:string, much:string}[]>([{value:"",code:"", much:""}]);
    const setInputFoods = useSetRecoilState(inputFoods);

    const onClickAddFood = (event:React.MouseEvent) => {
        event.preventDefault();
        const props = {value:"", code:"", much:""};
        setFoodInputs(prev => [...prev, props]);
    }

    const foodInputHandler = () => {
        var count = 1;
        return (
            foodInputs.map((item) => {
                const setValues = (_value:string, _code:string, _much:string) => {
                    item.value = _value;
                    item.code = _code;
                    item.much = _much;
                }
                return (<FoodInput setValues={setValues} key={count++}/>);
            })
        )
    }

    const onClickNext = () => {
        setInputFoods(foodInputs);
    }

    return(
        <Container>
            <span className="heading">무엇을 먹었는지 입력해주세요</span>
            <span className="smallTxt">연녹색 칸에 어떤 음식을 먹었는지 입력합니다 (<span>자동완성된 단어를 사용하지 않으면 결과에 반영되지 않습니다!</span>)</span>
            <span className="smallTxt">몇 인분을 입력할수 있는지 칸이 나올것 입니다.</span>
            <span className="smallTxt">보통의 한그릇을 1인분이라고 생각하고 선택해 주시면 됩니다.</span>
            <span className="smallTxt">음식추가! 버튼을 통해 음식을 추가로 입력하고</span>
            <span className="smallTxt">모든 음식을 입력했다면 우측아래 결과보기 버튼을 눌러주세요!</span>
            {foodInputHandler()}
            <Buttons>
                <span className="button" onClick={onClickAddFood}>음식 추가</span>
            </Buttons>
            <StyledLink to="/result" onClick={onClickNext}>
                <span>결과 보기 &rarr;</span>
            </StyledLink>
            <img src="https://backend-prod.absurd.design/uploads/ckvtr6k2h004314r0cbb3cts4.jpg" />
        </Container>
    );
}

export default Analysis;