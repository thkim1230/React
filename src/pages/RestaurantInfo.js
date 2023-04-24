import styled from "styled-components";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/RestaurantComponent/RestaurantContainer";
import React from "react";
import RestaurantNav from "../component/RestaurantComponent/RestaurantNav";

const Info = styled.div`
	width: 50%;
`;
const RestaurantInfo = () => {
	return (
		<>
			<Header/>
			<RestaurantContainer/>
			<RestaurantNav/>
			<Info>
                <h2>공지사항</h2>
				<p>불러온 데이터</p>
                <h2>전화번호</h2>
                <p>불러온 데이터</p>
                <h2>주소</h2>
				<p>불러온 데이터</p>
                <h2>매장 소개</h2>
                <p>불러온 데이터</p>
                <h2>영업 시간</h2>
				<p>불러온 데이터</p>
			</Info>
			<HomeFooter/>
		</>
	);
};
export default RestaurantInfo;