import React from "react";
import styled from "styled-components";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/restaurantComponent/RestaurantContainer";
import RestaurantNav from "../component/restaurantComponent/RestaurantNav";
import AxiosApi from "../api/Axios";
import {useState,useEffect,useContext} from "react";
import { RestaurantIdContext } from "../context/RestaurantId";

const MenuContanier = styled.section `
        width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
    .cont{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
		bottom:5px;
		padding: 30px;
		background-color: white;
		width: 845px;
		border: 1px solid;
         button {
            background-color: #fff;
            font-size: 20px;
            border:none;
            cursor: pointer;
        }
        .box{
            padding: 10px;
            width: 300px;
            height: 200px;
            border: 1px solid;
            margin-bottom: 40px;
            position: relative;
            left:250px;
            p{
                font-size: 20px;
                margin-bottom: 40px;
            }
        }
}
`;

const Menu =() => {
    const {selectedRestaurantId} = useContext(RestaurantIdContext);

    const [rtMenu, setRtMenu] = useState("");
    const [visibleReviews, setVisibleReviews] = useState([]); // 현재까지 불러온 리뷰 데이터
    const [loadedCount, setLoadedCount] = useState(3); // 현재까지 불러온 리뷰 데이터 개수
    const [reviewContainerHeight, setReviewContainerHeight] = useState();

	useEffect(() => {
		const rtMenu = async()=>{
            const rsp = await AxiosApi.restaurantMenu(selectedRestaurantId)
            setRtMenu(rsp.data);
        };
        rtMenu();
    },[]);
// 화면에 나올 메뉴 수
    useEffect(() => {
        setVisibleReviews(rtMenu.slice(0, loadedCount));
    }, [rtMenu, loadedCount]);

// onClick 으로 클릭시 3개씩 화면에 나올 데이터 개수 추가 + 화면 높이 증가
    function handleLoadMore() {
        setLoadedCount(loadedCount + 3);  // 개수 추가
        setReviewContainerHeight(reviewContainerHeight + 300); // 높이를 300px 증가시킴
    }
    return (
        <>
        	<Header/>
			<RestaurantContainer/>
            <RestaurantNav/>
            <MenuContanier>
                <div className="cont">
                    {visibleReviews&&visibleReviews.map(rest =>(
                        <div className="box" key={rest.menuName}>
                            <p>메뉴 이름 : {rest.menuName} </p>
                            <p>설명 : {rest.menuDesc}</p>
                            <p>가격 : {rest.menuPrice} </p>
                        </div>
                    ))}
                    <button onClick={handleLoadMore}>더보기</button>

                </div>
            </MenuContanier>
            <HomeFooter/>
        </>
    )
}


export default Menu;