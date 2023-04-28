import React from "react";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/restaurantComponent/RestaurantContainer";
import RestaurantNav from "../component/restaurantComponent/RestaurantNav";
import styled from "styled-components";
import AxiosApi from "../api/Axios";
import {useState,useEffect,useContext} from "react";
import { RestaurantIdContext } from "../context/RestaurantId";
import Modal from "../util/Modal";

const ReviewContanier = styled.section`
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
        
        a {
            
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            position: relative;
            right:320px;
            text-decoration: none;
            width: 200px;
            height: 50px;
            background-color: salmon;
            color: black;
            border: 1px solid;
            margin-bottom: 30px;

        }
        button {
            background-color: #fff;
            font-size: 20px;
            border:none;
            cursor: pointer;
        }
        .modalBtn{
            width: 150px;
            height: 50px;
            background-color: salmon;
            margin-bottom: 30px;
            position: relative;
            right: 345px;
        }
        .box{
            padding: 10px;
            padding-top: 0px;
            width: 820px;
            height: 200px;
            border: 1px solid;
            margin-bottom: 40px;
            p{
                font-size: 20px;
                margin-bottom: 10px;
            }
        }
    }
`;

const Review =() => {
//Context API로 매장 id 받아와서 해당 id 매장 정보 출력
    const {selectedRestaurantId} = useContext(RestaurantIdContext);
    const [reviewContainerHeight, setReviewContainerHeight] = useState();

// 리뷰 데이터 입력
    const [rtReview, setRtReview] = useState(""); // 모든 리뷰 데이터
    const [visibleReviews, setVisibleReviews] = useState([]); // 현재까지 불러온 리뷰 데이터
    const [loadedCount, setLoadedCount] = useState(3); // 현재까지 불러온 리뷰 데이터 개수

// 모든 리뷰 데이터 불러오는 axios 호출
    useEffect(() => {
	        const rtReview = async()=>{
            const rsp = await AxiosApi.restaurantReview(selectedRestaurantId)
            setRtReview(rsp.data);
        };
        rtReview();
    },[]);
    
// 화면에 나올 리뷰 수 관리
    useEffect(() => {
        setVisibleReviews(rtReview.slice(0, loadedCount));
    }, [rtReview, loadedCount]);

// onClick 으로 클릭시 3개씩 화면에 나올 데이터 개수 추가 + 화면 높이 증가
    function handleLoadMore() {
        setLoadedCount(loadedCount + 3);  // 개수 추가
        setReviewContainerHeight(reviewContainerHeight + 300); // 높이를 300px 증가시킴
    }
// 리뷰 작성 버튼 입력시 팝업 창
const [modalOpen, setModalOpen] = useState(false);
const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    return (
        <>
        	<Header/>
			<RestaurantContainer/>
            <RestaurantNav/>
            <ReviewContanier>
                <div className="cont" style={{height: reviewContainerHeight}}>

                    <button className="modalBtn" onClick={openModal}>리뷰 작성 하기</button>
                    <Modal open={modalOpen} close={closeModal}></Modal>

                    {visibleReviews&&visibleReviews.map(rest=>(
                        <div className="box" key={rest.reviewId}>
                            <p>{rest.reviewTitle}</p>
                            <p>{rest.reviewContent}</p>
                            <p>평점 : {rest.reviewRating}</p>
                            <p>작성일 : {rest.reviewDate}</p>
                        </div>
                    ))}

                    <button onClick={handleLoadMore}>더보기</button>

                </div>
            </ReviewContanier>
			<HomeFooter/>
        </>
    )
}

export default Review;