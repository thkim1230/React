import React from "react"
import styled from "styled-components"
import {useState,useEffect,useContext} from "react";
import AxiosApi from "../../api/Axios";
import { RestIdContext } from "../../context/RestaurantId";
import { Await, useNavigate } from "react-router-dom";
import InquiryModal from "../../util/InquiryMod";

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
    .cont{
        border: 1px solid;
        width: 600px;
        height: 300px;
        background-color: white;
        display: flex;
        flex-direction: column;
    }
        
    button{
            font-size: 20px;
            width: 150px;
            background-color: salmon;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        .like{
            position: relative;        
            left: 540px;
            bottom: 180px;
            width: 40px;
            background-color: white;
            border: 1px solid;
        }
        .like:after{
            background-color: salmon;
        }
        .res{
            position: relative;
            left: 410px;
            bottom: 0px;
        }
        .inq{
            position: relative;
            left: 40px;
            bottom: -29px;
        }
        p{
            padding: 10px;
            margin: 0;
            font-size: 20px;
        }
     
`;

const RestaurantContainer =() =>{
    //Context API로 매장 id 받아와서 해당 id 매장 정보 출력
    const {restId} = useContext(RestIdContext);
    const isLogin=localStorage.getItem("isLogin")
    const memId = localStorage.getItem("memId");  // 로컬 스토리지로 로그인 시 회원 id 입력받고
    // 매장 정보 호출
    const [rtInfoFix, setRtInfoFix] = useState("");
 
    useEffect(() => {
		const rtInfoFix = async()=>{
            const rsp = await AxiosApi.restaurantInfoFixed(restId);
            setRtInfoFix(rsp.data);
        };
        rtInfoFix();
    },[]);
   
// 찜 등록 삭제
const [isLiked, setIsLiked] = useState(false);
useEffect(() => {
    const storedIsLiked = window.localStorage.getItem("isLiked");
    if (storedIsLiked) {
      setIsLiked(storedIsLiked === "true");
    }
  }, []);

const addLike = async () => {
    if (isLogin === "TRUE") {
        const rsp = await AxiosApi.addRestLike(restId, memId);
        if (rsp.data === true) {
            setIsLiked(true);
            window.localStorage.setItem("isLiked", "true");

            console.log("찜 등록 성공");
          } else {
            console.log("전송 실패");
          }
    } else {
        alert("로그인이 되어있지 않습니다.")
        navigate("/login");
    }
};

const deleteLike = async () => {
    const rsp = await AxiosApi.delRestLike(restId, memId);

    if (rsp.data === true) {
        setIsLiked(false);
        window.localStorage.setItem("isLiked", "false");

        console.log("찜 삭제 성공");
    } else {
        console.log("전송 실패");
    }
};

const handleLike = () => {
  if (!isLiked) {
    addLike();
    console.log("등록완료");
  } else {
    deleteLike();
    console.log("삭제완료");
  }
};
// 문의 작성 버튼 입력시 팝업 창
const navigate= useNavigate();

const [modalOpen, setModalOpen] = useState(false);

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

    return(
            <FixContent>
                <img src="" alt="이미지" />
                {rtInfoFix&& rtInfoFix.map(rest =>(
                    <div className="cont" key={rest.name}>
                        <p>매장 이름 : {rest.name}</p>
                        <p>전화 번호 : {rest.phone}</p>
                        <p>주소 : {rest.addr}</p>
                        <p>평점 : {rest.avgRating}</p>
                        <button className="like" onClick={handleLike} style={{backgroundColor: isLiked ? "salmon" : "white" }}>찜</button>
                        <button className="inq" onClick={openModal}>문의 하기</button>
                        <InquiryModal open={modalOpen} close={closeModal}></InquiryModal>

                        <button className="res">예약 하기</button>
                    </div>
                ))}
            </FixContent>
    );
}

export default RestaurantContainer;