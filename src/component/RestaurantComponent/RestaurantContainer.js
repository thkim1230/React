import React from "react"
import styled from "styled-components"
import {useState,useEffect,useContext} from "react";
import AxiosApi from "../../api/Axios";
import { RestIdContext } from "../../context/RestaurantId";


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
        background-color: white;
    }
    div{
        border: 1px solid;
        width: 600px;
        height: 300px;
        background-color: white;
        display: flex;
        flex-direction: column;
    
        button{
            position: absolute;
            font-size: 20px;
            width: 150px;
            background-color: salmon;
            border: none;
            cursor: pointer;
        }
        .res{
            
            position: relative;
            left: 410px;
            bottom: 90px;
        }
        .inq{
            position: relative;
            left: 410px;
            bottom: 250px;
        }
        p{
            padding: 10px;
        }
     
    }
`;

const RestaurantContainer =() =>{
    //Context API로 매장 id 받아와서 해당 id 매장 정보 출력
    const {restId} = useContext(RestIdContext);
    
    // 매장 정보 호출
    const [rtInfoFix, setRtInfoFix] = useState("");
 
    useEffect(() => {
		const rtInfoFix = async()=>{
            const rsp = await AxiosApi.restaurantInfoFixed(restId)
            setRtInfoFix(rsp.data);
        };
        rtInfoFix();
    },[]);

    return(
            <FixContent>
                <img src="" alt="이미지" />
                {rtInfoFix&& rtInfoFix.map(rest =>(
                    <div key={rest.name}>
                        <p>매장 이름 : {rest.name}</p>
                        <p>전화 번호 : {rest.phone}</p>
                        <p>주소 : {rest.addr}</p>
                        <p>평점 : {rest.avgRating}</p>
                        <button className="inq">문의 하기</button>
                        <button className="res">예약 하기</button>
                    </div>
                ))}
            </FixContent>
    );
}

export default RestaurantContainer;