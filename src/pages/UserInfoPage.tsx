import React from 'react';

import { useForm, SubmitHandler } from "react-hook-form";
import { Container, FormContainer, StyledSubmit } from './UserInfoStyles';

import { ErrorMessage } from '@hookform/error-message';

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
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  }

//   console.log(watch("gender"))

    return (
        <Container>
            <span>사용자의 나이(0~64세까지)와 성별에 맞춰서</span>
            <span>필요로 하는 영양성분을 계산해 드립니다.</span> 
            <span>정확하고 상세한 계산을 위해 나이와 성별을 알려주세요.</span>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <select {...register("gender")}>
                    <option value="man">남</option>
                    <option value="woman">여</option>
                </select>
                <input type='number' {...register("age", { required: true })} />
                <StyledSubmit type='submit' />
            </FormContainer>
            <ErrorMessage
                errors={errors}
                name="age"
                render={({ messages }) => {
                    window.alert("나이를 입력해야 합니다!");
                    return <></>
                  }}
            />
            <img src="https://backend-prod.absurd.design/uploads/ckvtk1ad5000v14r0fokhdwuh.jpg" />
        </Container>
    )
}

export default UserInfo;