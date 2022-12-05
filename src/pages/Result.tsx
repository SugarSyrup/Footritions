import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useRecoilValue } from 'recoil';
import { inputFoods, userData } from "../atoms";
import { Link } from "react-router-dom";

const Container = styled.div`
    width:100vw;
    height:90vh;

    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};

    position:relative;
    transition:0.5s;
    div{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;

        padding-left:5vw;
        padding-top:5vh;

        font-size:34px;
        font-weight:600;
        span{
            z-index:5;
            margin-bottom:10px;
        }
        span.total{
            span{
                color:${(props) => props.theme.primaryColor};
            }
        }
        span.total_small{
            color:grey;
            font-size:24px;
            font-weight:600;

            margin-left:20px;
            margin-bottom:50px;
        }
        span.user{
            span{
                color:${(props) => props.theme.primaryColor};
                margin-left:10px;
            }
        }

        span.energy{
            margin-top:50px;
            margin-left:30px;
            span{
                color:${(props) => props.theme.primaryColor};
                margin-left:10px;
            }
        }
        span.carboh{
            margin-top:10px;
            margin-left:30px;
            span{
                color:${(props) => props.theme.primaryColor};
                margin-left:10px;
            }

        }
        span.protein{
            margin-top:10px;
            margin-left:30px;
            span{
                color:${(props) => props.theme.primaryColor};
                margin-left:10px;
            }

        }
        span.trs{
            margin-top:10px;
            margin-left:30px;
            span{
                color:${(props) => props.theme.primaryColor};
                margin-left:10px;
            }

        }
        span.fibs{
            margin-top:10px;
            margin-left:30px;
            span{
                color:${(props) => props.theme.primaryColor};
            }

        }

    }
    img{
        border-radius:100%;
    }
    img.lbImg {
        position:absolute;
        right:15vw;
        bottom:0;

        width:500px;
    }
    img.rtImg{
        position:absolute;
        right:50px;
        top:0;
        width:400px;
    }
`


const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    position:absolute;
    bottom:20vh;

    span.start-button{
        font-size:36px;
        font-weight:700;

        background-color:${(props) => props.theme.primaryColor};
        color:white;

        padding: 20px 30px;

        margin-left:80px;
        margin-top:200px;
        margin-bottom:-300px;

        border-radius:25px;
    }
`;

const Result = () => {
    const inputFoodsList = useRecoilValue(inputFoods);
    const UserInfo = useRecoilValue(userData);
    const [foodObj, setFoodObj] = useState<{
        _carbohydrate:number,
        _energy:number,
        _fibtg:number,
        _ntrfs:number,
        _prot:number,
    }>({
        _carbohydrate:0,
        _energy:0,
        _fibtg:0,
        _ntrfs:0,
        _prot:0,
    });

    const countAllFoods = () => {
        inputFoodsList.forEach(async (food) =>{
            let data = {
                carbohydrate:0,
                energy:0,
                fibtg:0,
                ntrfs:0,
                prot:0,
            };
            await axios({
                url:'https://backend-server.fly.dev/api/getFoodResource',
                method:'POST',
                data:{
                    foodCode:food.code
                }
            }).then(async (response) => {
                console.log('response', response);
                data = response.data.data;
                console.log(data);
            })
            var multi = 1;
            if(food.much == '0.3인분') {
                multi = 0.3;
            } else if(food.much == '0.5인분') {
                multi = 0.5;
            } else if(food.much == '2인분') {
                multi = 2;
            } 
            console.log(food.value, data);
            setFoodObj({
                    _carbohydrate : foodObj._carbohydrate + (data.carbohydrate * multi),
                    _energy: foodObj._energy + (data.energy * multi),
                    _fibtg: foodObj._fibtg + (data.fibtg * multi),
                    _ntrfs: foodObj._ntrfs + (data.ntrfs * multi),
                    _prot: foodObj._prot + (data.prot * multi),
            })
        });
    }
    

    const [_user, setUser] = useState<{
        Age:number,
        carbohydrate:number,
        energy:number,
        fibtg:number,
        gender:String
        ntrfs:number,
        prot:number,
        _id:String,
    }>({
        Age:0,
        carbohydrate:0,
        energy:0,
        fibtg:0,
        gender:"1",
        ntrfs:0,
        prot:0,
        _id:"1",});
    const getUser = async () => {
        await axios({
            url:'https://rusnabiserver.herokuapp.com/api/getUserInfo',
            method:'POST',
            data:{
                age:UserInfo.age,
                gender:UserInfo.gender,
            }
        }).then((response) => {
            setUser(response.data.data);
        })
    };   

    const getTotalScore = () => {
        let totalScore = 0;
        totalScore += (foodObj._energy / _user.energy) * 20 > 20 ? 20 : (foodObj._energy / _user.energy) * 20;
        totalScore += (foodObj._carbohydrate / _user.carbohydrate) * 20 > 20 ? 20 : (foodObj._carbohydrate / _user.carbohydrate) * 20;
        totalScore += (foodObj._fibtg / _user.fibtg) * 20 > 20 ? 20 : (foodObj._fibtg / _user.fibtg) * 20;
        totalScore += (foodObj._ntrfs / _user.ntrfs) * 20 > 20 ? 20 : (foodObj._ntrfs / _user.ntrfs) * 20;
        totalScore += (foodObj._prot / _user.prot) * 20 > 20 ? 20 : (foodObj._prot / _user.prot) * 20;
        return totalScore.toFixed(0);
    }

    const effect = () => {
        getUser(); 
        countAllFoods();
    }
    useEffect(() => {
        effect();
    },[]);
    return (
        <Container>
            <div>
                <span className="total">총 영양소 점수는...? <span>{getTotalScore()}</span>점 입니다!</span>
                <span className="total_small">세부 영양소의 점수는 아래와 같습니다.</span>

                <span className="user">입력하신 <span>{UserInfo.age}</span>세 <span>{UserInfo.gender == "man" ? "남성" : "여성"}</span>! 기준입니다.</span>
                <span className="energy">에너지:<span>{String(foodObj["_energy"].toFixed(0))}</span>/<span>{String((_user["energy"]/3).toFixed(2))}</span>g</span>
                <span className="carboh">탄수화물:<span>{String(foodObj["_carbohydrate"].toFixed(0))}</span>/<span>{String((_user["carbohydrate"]/3).toFixed(2))}</span>g</span>
                <span className="protein">단백질:<span>{String(foodObj["_prot"].toFixed(0))}</span>/<span>{String((_user["prot"]/3).toFixed(2))}</span>g</span>
                <span className="trs">지방:<span>{String(foodObj["_ntrfs"].toFixed(0))}</span>/<span>{String((_user["ntrfs"]/3).toFixed(2))}</span>g</span>
                <span className="fibs">식이섬유:<span>{String(foodObj["_fibtg"].toFixed(0))}</span>/<span>{String((_user["fibtg"]/3).toFixed(2))}</span>g</span>
            </div>
            <img className="lbImg" src="https://backend-prod.absurd.design/uploads/ckwf4xz9u009516o99n6b3evd.jpg"></img>
            <img className="rtImg" src="https://backend-prod.absurd.design/uploads/ckw6iz8ca003l16o994c09f8v.jpg"></img>
            <StyledLink to="/">
                <span className="start-button">다시 분석하기!</span>
            </StyledLink>
        </Container>
    )
}

export default Result;