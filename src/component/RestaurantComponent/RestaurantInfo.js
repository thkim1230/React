import styled from 'styled-components';

const RestaurantItemBlock = styled.div`
    display: flex;
    .contents {
			p {
				margin: 0;
				line-height: 1.5;
				margin-top: 0.5rem;
				white-space: normal;
			}
    }
`;

const RestaurantInfo = ({article}) => {
	const { notice, phone, addr,introduce,hours} = article;
	return (
		<RestaurantItemBlock>
			<div className='contents'>
                <h2>공지사항</h2>
				<p>{notice}</p>
                <h2>전화번호</h2>
                <p>{phone}</p>
                <h2>주소</h2>
				<p>{addr}</p>
                <h2>매장 소개</h2>
                <p>{introduce}</p>
                <h2>영업 시간</h2>
				<p>{hours}</p>
			</div>
		</RestaurantItemBlock>
	);
};
export default RestaurantInfo;