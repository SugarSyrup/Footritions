import React, {useState} from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useForm, SubmitHandler } from "react-hook-form";

import {userData} from "../atoms";

const Container = styled.div`
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
    }

    img{
        position:absolute;
        right:0;
        margin-top:50px;
        border-radius:100%;
    }
`

const InputContainer = styled.div`
    margin-top:100px;

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
`;

const StyledLink = styled(Link)`
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


// useForm Type 정의
enum GenderEnum {
    female="female",
    male = "male"
}
interface IFormInput {
    gender: GenderEnum,
    age: number,
}

const UserInfo = () => {
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(-1);
    const setUserData = useSetRecoilState(userData);

    
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  console.log(watch("gender"))

    return (
        <Container>
            <span>사용자의 나이(0~64세까지)와 성별에 맞춰서</span>
            <span>필요로 하는 영양성분을 계산해 드립니다.</span> 
            <span>정확하고 상세한 계산을 위해 나이와 성별을 알려주세요.</span>
            <InputContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                </form>
                <select value={gender} {...register("gender")}>
                    <option value="man">남</option>
                    <option value="woman">여</option>
                </select>
                <input type="number" placeholder='나이를 입력해주세요!' onChange={(event) => {
                    setAge(Number(event.target.value));
                }}></input>
            </InputContainer>
            <StyledLink to="/analysis">
                <span className="start-button" onMouseEnter={(event) => {
                    if(age === -1) {
                        window.alert("나이를 입력해 주세요!");
                        return;
                    }
                    setUserData({gender, age});
                }}>식사 입력하러 가기 &rarr;</span>
            </StyledLink>
            <img src="https://backend-prod.absurd.design/uploads/ckvtk1ad5000v14r0fokhdwuh.jpg" />
        </Container>
    )
}

export default UserInfo;