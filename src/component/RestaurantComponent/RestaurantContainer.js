import React from "react"
import styled from "styled-components"
import imgLogo from "../images/rt.png"
import {useState,useEffect} from "react";
import AxiosApi from "../../api/Axios";


const FixContent = styled.section`

    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ivory;
    border-top: 3px solid;
    border-color: #eee;
    img{
        width: 400px;
        margin-right: 100px;
        height: 300px;
    }
    div{
        border: 1px solid;
        width: 600px;
        height: 300px;
        background-color: white;
        display: flex;
        flex-direction: column;
    
        button{
            font-size: 20px;
            position: absolute;
            width: 150px;
            height: 80px;
            background-color: salmon;
            border: none;
            box-shadow: 1px 1px 5px;
        }
        .res{
          
            position: absolute;
            left: 1300px;
            bottom: 550px;
        }
        .inq{
            position: absolute;
            left: 1300px;
            bottom: 700px;
        }
        p{
            padding: 10px;
        }
     
    }
`;

const RestaurantContainer =() =>{
    const [rtInfoFix, setRtInfoFix] = useState("");
 
    useEffect(() => {
		const rtInfoFix = async()=>{
            const rsp = await AxiosApi.restaurantInfoFixed("710-12-12345")
            setRtInfoFix(rsp.data);
        };
        rtInfoFix();
    },[]);

    return(
            <FixContent>
                <img src={imgLogo} alt="이미지" />
                {rtInfoFix&& rtInfoFix.map(rest =>(
                    <div key={rest.name}>
                        <p>매장 이름 : {rest.name}</p>
                        <p>전화 번호 : {rest.phone}</p>
                        <p>주소 : {rest.addr}</p>
                        <p>평점 : {rest.rating}</p>
                        <button className="inq">문의 하기</button>
                        <button className="res">예약 하기</button>
                    </div>
                ))}
            </FixContent>
    );
}

export default RestaurantContainer;