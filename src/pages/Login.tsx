import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { isLoginPage } from "../atoms";

const Content = styled.div`
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};    

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100vw;
    height:90vh;
`

const Form = styled.form`
    width:50vw;
    height:70vh;

    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};    

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;

    .input-div {
        margin-top:30px;
        position:relative;

        display:flex;
        flex-direction:column;
        justify-content:flex-start;

        width:100%;
        input{
            width:80%;
            
            background:transparent;
            border:none;
            border-bottom: solid 1px ${(props) => props.theme.primaryColor};
            padding:20px 0px 5px 0px;
            font-size:14pt;
            width:100%;
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
        width:80%;
        height:7%;

        margin-top:50px;

        border:none;
        border-radius:10px;
        background-color: #8aa1a1;

        cursor:pointer;
    }
`;

const SmallTexts = styled.div`
    width:100%;
    margin-top:20px;
    
    font-size:12pt;
    text-align: right;

    display:flex;
    justify-content:flex-end;
    a{
        margin-left:10px;
        color:rgb(164, 164, 164);
    }
`;

interface IForm{
    username:string;
    password:string;
}

function Login() {
    const setIsLoginPage = useSetRecoilState(isLoginPage);
    setIsLoginPage(true);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = async ({username, password}: IForm) => {
        console.log("onCLick/");
        axios({
            url: 'https://backend-server.fly.dev/auth/login',
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
            <Content>
                <div>
                    <Form onSubmit={handleSubmit(handleValid)}>
                        <div className="input-div">
                            <input id="username" type="text" placeholder='username' {...register("username", {
                                required: "Please Enter your username",
                            })}></input>
                            <label htmlFor="username">ID</label>
                        </div>
                        <div className="input-div">
                            <input id="password" type="password" placeholder='password' {...register("password", {
                                required: "Please Enter your Password",
                            })}></input>
                            <label htmlFor="password">PW</label>
                        </div>
                        <SmallTexts>
                            <Link to='/Join' style={{ textDecoration: 'none' }}>
                                <span>회원가입</span>
                            </Link>
                            <Link to="/find_password" style={{ textDecoration: 'none' }}>
                                <span>비밀번호 찾기</span>
                            </Link>
                        </SmallTexts>
                        <input type="submit" value="Login"></input>
                    </Form>
                </div>
                <span> Login using Google, gitHub</span>
                <span> Login using Naver, kakao (passport js)</span>
            </Content>

        </>
    );
}

export default Login;