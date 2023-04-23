import styled from "styled-components";

const Info = styled.div`
	width: 50%;
`;


const RestaurantInfo = () => {
	return (
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
	);
};
export default RestaurantInfo;