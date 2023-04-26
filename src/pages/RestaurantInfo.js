import styled from "styled-components";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/RestaurantComponent/RestaurantContainer";
import {useState,useEffect} from "react";
import RestaurantNav from "../component/RestaurantComponent/RestaurantNav";
import AxiosApi from "../api/Axios";

const InfoContainer = styled.section`
		width: 100%;
		height: 900px;
		display: flex;
		justify-content: center;
		align-items: center;
		.cont{
        position: relative;
		bottom:5px;
		padding: 30px;
		background-color: white;
		height: 750px;
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


const RestaurantInfo = () => {
	const [rtInfo, setRtInfo] = useState("");

	useEffect(() => {
		const rtInfo = async()=>{
            const rsp = await AxiosApi.restaurantInfo("710-12-12345")
            setRtInfo(rsp.data);
        };
        rtInfo();
    },[]);


	return (
		<>
			<Header/>
			<RestaurantContainer/>
			<RestaurantNav/>
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
			<HomeFooter/>
		</>
	);
};
export default RestaurantInfo;