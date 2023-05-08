import styled from "styled-components";
import React from "react";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/restaurantComponent/RestaurantContainer";
import {useState,useEffect, useContext} from "react";
import RestaurantNav from "../component/restaurantComponent/RestaurantNav";
import AxiosApi from "../api/Axios";
import { RestIdContext } from "../context/RestaurantId";
import Menu from "../component/restaurantComponent/RestaurantMenu";
import Review from "../component/restaurantComponent/RestaurantReview";

const InfoContainer = styled.section`
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 30px;

		.cont{
        position: relative;
		bottom:5px;
		padding: 30px;
		background-color: white;
		width: 845px;
		border: 1px solid;
		p{
			margin: 10px;
			font-size: 20px;
		}
		.box{
			margin-bottom: 80px;
		}
	}
	
`;


const Info = () => {
	// Context Api 사용
	const {restId} = useContext(RestIdContext);
	// 데이터 호출 
	const [rtInfo, setRtInfo] = useState("");
	
	const[type,setType] = useState("default");

	const handleType = (e) =>{
		setType(e);

	}

	useEffect(() => {
		const rtInfo = async () => {
		const rsp = await AxiosApi.restaurantInfo(restId);
		setRtInfo(rsp.data);
		};
		rtInfo();
	}, []);

	return (
		<>
			<Header/>
			<RestaurantContainer/>

			<RestaurantNav  handleType={handleType}/>

			{type === "default" && (
				<InfoContainer>
				{rtInfo&&rtInfo.map(rest =>(
					<div className="cont" key ={rest.restaurantNotice}>
						<div className="box">
							<h2>공지사항</h2>
							<p>{rest.restaurantNotice}</p>
						</div>
						<div className="box">
							<h2>전화번호</h2>
							<p>{rest.restaurantPhone}</p>
						</div>
						<div className="box">
							<h2>매장소개</h2>
							<p>{rest.restaurantIntroduce}</p>
						</div>
						<div className="box">
							<h2>영업시간</h2>
							<p>{rest.restaurantHours}</p>
						</div>
						<div className="box">
							<h2>매장주소</h2>
							<p>{rest.restaurantAddr}</p>
						</div>
					</div>
				))}			
			</InfoContainer>
			)}

			{type === "menu" && (
				<Menu/>
			)}
			{type === "review" && (
				<Review/>
			)}
			<HomeFooter/>
		</>
	);
};
export default Info;