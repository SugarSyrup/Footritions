import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useForm } from 'react-hook-form';

const Form = styled.form`
    width:100vw;
    height:85vh;

    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};    

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;

    .input-div {
        width:50%;
        margin-top:30px;
        position:relative;

        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;

        input{
            width:100%;
            
            background:transparent;
            border:none;
            border-bottom: solid 1px ${(props) => props.theme.primaryColor};
            padding:20px 0px 5px 0px;
            font-size:14pt;
        }
        input::placeholder{
            color:transparent;
        }
        input:placeholder-shown + label{
            color:${(props) => props.theme.textColor};
            font-size:14pt;
            top:15px;
        }
        input:focus + label, label{
            color:#8aa1a1;
            font-size:10pt;
            pointer-events: none;
            position: absolute;
            left:0px;
            top:0px;
            transition: all 0.2s ease ;
            -webkit-transition: all 0.2s ease;
            -moz-transition: all 0.2s ease;
            -o-transition: all 0.2s ease;
        }
        input:focus, input:not(:placeholder-shown){
            border-bottom: solid 1px #8aa1a1;
            outline:none;
        }
    }

    input[type="submit"] {
        width:50%;
        height:7%;

        margin-top:50px;

        border:none;
        border-radius:10px;
        background-color: #8aa1a1;

        cursor:pointer;
    }
`;

interface IForm{
    username:string;
    password:string;
    password_check:string;
    email:string;

}

function Join() { 
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({username, password, password_check}: IForm) => {
        if(password !== password_check){
            console.log("password incorrect!");
            //pop-up message
        }
        axios({
            url: '/auth/join',
            method:'post',
            data: {
                username, password
            }
        }).then(function(response) {
            console.log(response.data);
        });        
    }

    return(
        <>
            <Form onSubmit={handleSubmit(handleValid)}>
                <div className="input-div">
                    <input id="username" type="text" placeholder='username' {...register("username", {
                        required: "Please Enter your username",
                    })}></input>
                    <label htmlFor="username">ID</label>
                </div>
                <div className="input-div">
                    <input id="password" type="password" placeholder='password' {...register("password", {
                        required: "Please Enter your password",
                    })}></input>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-div">
                    <input id="password_check" type="password_check" placeholder='password_check' {...register("password_check", {
                        required: "Please Enter your password",
                    })}></input>
                    <label htmlFor="password_check">Password Check</label>
                </div>
                <input type="submit" value="회원가입!"></input>
            </Form>
        </>
    );
};

export default Join;