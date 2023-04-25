import styled from "styled-components";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/RestaurantComponent/RestaurantContainer";
import {useState,useEffect} from "react";
import RestaurantNav from "../component/RestaurantComponent/RestaurantNav";
import AxiosApi from "../api/Axios";

const InfoContainer = styled.div`
margin-top:1px;
background-color: ivory;
display: flex;
justify-content: center;
align-items: center;
	width: 100%;
	div{
		padding: 30px;
		background-color: white;
		width: 845px;
		height: auto;
		border-left: 1px solid;
		border-right: 1px solid;
		p{
			margin: 10px;
			font-size: 20px;
		}
	}
	
`;


const RestaurantInfo = () => {
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

	return (
		<>
			<Header/>
			<RestaurantContainer/>
			<RestaurantNav/>
			<InfoContainer>
				{rtInfo.map(restaurant =>(
					<div key ={restaurant.id}>
						<h2>공지사항</h2>
						<p>{restaurant.restaurantNotice}</p>
						<h2>전화번호</h2>
						<p>{restaurant.restaurantPhone}</p>
						<h2>매장소개</h2>
						<p>{restaurant.restaurantIntroduce}</p>
						<h2>영업시간</h2>
						<p>{restaurant.restaurantHours}</p>
						<h2>매장주소</h2>
						<p>{restaurant.restaurantAddr}</p>
					</div>
				))}
			</InfoContainer>
			<HomeFooter/>
		</>
	);
};
export default RestaurantInfo;