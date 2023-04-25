import React from "react"
import styled from "styled-components"
import imgLogo from "../images/rt.png"
import {useState,useEffect} from "react";
import AxiosApi from "../api/Axios";

const FixContent = styled.section`

    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ivory;
    border-bottom: 1px solid;

    img{
        width: 300px;
        margin-right: 100px;
        height: 250px;
    }
    div{
        border: 1px solid;
        width: 500px;
        height: 250px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            position: relative;
            top: 80px;
            left: 0;
            margin-right: 100px;
            width: 100px;
            height: 50px;
            background-color: salmon;
            border: none;
            box-shadow: 1px 1px 5px;
        }
        p{
            position: relative;
            bottom:100px

        }
    }
`;

const RestaurantContainer =() =>{
    const [rtInfo, setRtInfo] = useState([]);

	useEffect(() => {
	  const fetchRtInfo = async () => {
		try {
		  const rsp = await AxiosApi.restaurantInfo("710-12-12345");
		  setRtInfo(rsp.data);
		} catch (e) {
		  console.error(e);
		}
	  };
	  fetchRtInfo();
	}, []);

    return(
        <>
            <FixContent>
                <img src={imgLogo} alt="이미지" />
                {rtInfo.map(restaurant =>(
                    <div key ={restaurant.id}>
                        <h1>매장 이름: {restaurant.restaurantName}</h1>
                        <p>전화번호 : {restaurant.restaurantPhone}</p>
                        <p>매장주소 : {restaurant.restaurantAddr}</p>
                        <p>평점: {restaurant.rating}</p>
                    </div>
                ))}
                <button>예약하기</button>
                <button>문의하기</button>
            </FixContent>
        </>
    )
}

export default RestaurantContainer;