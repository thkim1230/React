import React from "react";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/restaurantComponent/RestaurantContainer";
import RestaurantNav from "../component/restaurantComponent/RestaurantNav";
import styled from "styled-components";
import AxiosApi from "../api/Axios";
import {useState,useEffect,useContext} from "react";
import { RestIdContext } from "../context/RestaurantId";
import Modal from "../util/Modal";
import { useNavigate } from "react-router-dom";

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
            border-radius: 5px;
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
            height: 350px;
            border: 1px solid;
            margin-bottom: 40px;
            p {
                font-size: 20px;
                margin-bottom: 10px;
            }
            .title {
                    font-weight: bold;
                    font-size: 23px;
                }
            .rating{
                font-size: 20px;
            }
            .content{
                font-size: 20px;
            }
            .nick{
                font-size: 17px;
            }
            .date{
                font-size: 10px;
            }
        img{
            width: 200px;
            height: 100px;
            margin-left: 55px;
            margin-top: 10px;
        }
        .imgBox{
            position: relative;
            bottom: 20px;
            border: 1px solid;
            width: 100%;
            height: 120px;
        }
        }
        .like{
        position: relative;
        left:750px;
        bottom:200px;
        border: 1px solid;
        background-color: white;
    }
    }
`;

const Review =() => {
//Context API로 매장 id 받아와서 해당 id 매장 정보 출력
    const {restId} = useContext(RestIdContext);
    const isLogin=localStorage.getItem("isLogin")
    const memId = localStorage.getItem("memId");  // 로컬 스토리지로 로그인 시 회원 id 입력받고
// 리뷰 데이터 입력
    const [rtReview, setRtReview] = useState(""); // 모든 리뷰 데이터
    const [visibleReviews, setVisibleReviews] = useState([]); // 화면에 보이는 리뷰 데이터
    const [rvCount, setRvCount] = useState(3); // 현재까지 불러온 리뷰 데이터 개수

// onClick 으로 클릭시 3개씩 화면에 나올 데이터 개수 추가 + 화면 높이 증가
    const [rvHeight, setRvHeight] = useState();

// 모든 리뷰 데이터 불러오는 axios 호출
    useEffect(() => {
	        const rtReview = async()=>{
            const rsp = await AxiosApi.restaurantReview(restId)
            setRtReview(rsp.data);
        };
        rtReview();
    },[]);
    
// 화면에 나올 리뷰 수 관리
    useEffect(() => {
        setVisibleReviews(rtReview.slice(0, rvCount));
    }, [rtReview, rvCount]);

// onClick 으로 클릭시 3개씩 화면에 나올 데이터 개수 추가 + 화면 높이 증가
    function handleLoadMore() {
        setRvCount(rvCount + 3);  // 개수 추가
        setRvHeight(rvHeight + 300); // 높이를 300px 증가시킴
    }

// 리뷰 작성 버튼 입력시 팝업 창
    const [modalOpen, setModalOpen] = useState(false);
    const navigate= useNavigate();

    const openModal = () => {

        console.log(isLogin,memId);
        if (isLogin === "TRUE") {
            setModalOpen(true);
        } else {
            alert("로그인이 되어있지 않습니다.")
            navigate("/login");
        }
    }

    const closeModal = () => {
        setModalOpen(false);
    }
// 공감 버튼 기능
const [isLiked, setIsLiked] = useState({});
// 로컬스토리지에 저장해서 페이지 이동시 초기화를 막음
useEffect(() => {
    const storedIsLiked = window.localStorage.getItem("isRevLiked");
    if (storedIsLiked !== null) {
      setIsLiked(JSON.parse(storedIsLiked));
    }
  }, []);

const addLike = async (reviewId) => {
    if (isLogin === "TRUE") {
        const rsp = await AxiosApi.addRevLike(reviewId, memId);
        if (rsp.data === true) {
            setIsLiked((prevIsLiked) => ({
                ...prevIsLiked,
                [reviewId]: true,
              }));            
            window.localStorage.setItem("isRevLiked", JSON.stringify({
                ...isLiked,
                [reviewId]: true,
              }));
            console.log("공감 등록 성공");
          } else {
            console.log("전송 실패");
          }
    } else {
        alert("로그인이 되어있지 않습니다.")
        navigate("/login");
    }
};

const deleteLike = async (reviewId) => {
    const rsp = await AxiosApi.delRevLike(reviewId, memId);
    if (rsp.data === true) {
        setIsLiked((prevIsLiked) => ({
            ...prevIsLiked,
            [reviewId]: false,
          }));
        window.localStorage.setItem("isRevLiked", JSON.stringify({
            ...isLiked,
            [reviewId]: true,
          }));

        console.log("공감 삭제 성공");
    } else {
        console.log("전송 실패");
    }
};

const handleLike = (reviewId) => {
  if (!isLiked[reviewId]) {
    addLike(reviewId);
    console.log("등록완료");
  } else {
    deleteLike(reviewId);
    console.log("삭제완료");
  }
};
    return (
        <>
        	<Header/>
			<RestaurantContainer/>
            <RestaurantNav/>
            <ReviewContanier>
                <div className="cont" style={{height: rvHeight}}>

                    <button className="modalBtn" onClick={openModal}>리뷰 작성 하기</button>
                    <Modal open={modalOpen} close={closeModal}></Modal>

                    {visibleReviews&&visibleReviews.map(rest=>(
                        <div className="box" key={rest.reviewId}>
                            <p className="nick">{rest.nickName}</p>
                            <p className="date">작성일 : {rest.reviewDate}</p>
                            <p className="title">{rest.reviewTitle}</p>
                            <p className="content">{rest.reviewContent}</p>
                            <p className="rating">평점 : {rest.reviewRating}</p>
                            <button className="like" onClick={handleLike} style={{ backgroundColor: isLiked[rest.reviewId] ? "salmon" : "white" }}>공감</button>
                            <div className="imgBox">
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                 
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