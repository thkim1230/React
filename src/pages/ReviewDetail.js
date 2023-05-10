import { useEffect,useState,useContext } from "react";
import AxiosApi from "../api/Axios";
import { ReviewIdContext } from "../context/RestaurantId";
import styled from "styled-components";

const ReviewPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ivory;
    height: 1020px;
    width: 1980px;
    .like{
        position: relative;
        left:650px;
        bottom: 200px;
        width: 100px;
        height: 50px;
        font-size: 20px;
        border-radius: 5px;
    }
    .box{
        width: 800px;
        height: 500px;
        border: 1px solid;
        background-color: white;
        border: 1px solid;
        padding:10px;
        .date{
            font-size: 10px;
        }
        img{
            position: absolute;
            width: 200px;
            height: 100px;
            margin-left: 55px;
            margin-top: 10px;
            border: 1px solid;
        }
        .img1{
            left: 250px;
        }
        .img2{
            left: 500px;
        }
        .imgBox{
            position: relative;
            top:50px;
            border: 1px solid;
            width: 100%;
            height: 120px;
        }
    }
    .title{
        font-size: 25px;
        font-weight: bold;
    }

`;

const ReviewDetail = () =>{
    const {reviewId} = useContext(ReviewIdContext);
    const memId = localStorage.getItem("memId");  // 로컬 스토리지로 로그인 시 회원 id 입력받고

    const [rtReview, setRtReview] = useState(""); // 리뷰 데이터 불러오기
    console.log(reviewId);
    useEffect(() => {
        const rtReview = async()=>{
        const rsp = await AxiosApi.reviewDetail(reviewId)
        setRtReview(rsp.data);
    };
    rtReview();
    },[]);

    // 리뷰 공감 기능
    const [revLikeList,setRevLikeList] = useState([]); // 공감 리스트 배열
    const [isRevLike, setIsRevLike] = useState(false); // 최종 공감 상태 
    useEffect(()=>{ // 로그인한 회원id를 기준으로 공감 리뷰 리스트를 db에서 불러와 확인하고 배열에 삽입
        const liked = async() => {
            const rsp = await AxiosApi.revLiked(memId);
            setRevLikeList(rsp.data);
        }
        liked();
    },[memId]);

    useEffect(() => {
        if (revLikeList.some(item => item.reviewId === reviewId)) { // 배열을 확인하며 해당 리뷰에 공감이 등록되어 있으면 true 아니면 false
        setIsRevLike(true);
        } else {
        setIsRevLike(false);
        }
      }, [revLikeList, reviewId]);

    const addLike = async () => { 
        const rsp = await AxiosApi.addRevLike(reviewId, memId);
        if (rsp.data === true) {
            console.log("공감 등록 성공");
            setRevLikeList([...revLikeList, {reviewId, memId}]); // 찜등록 성공시 배열에도 추가
            setIsRevLike(true); // 최종 찜 상태를 true 로 전달
            console.log(revLikeList);
            } else {
                console.log(" 등록 전송 실패");
            }
        };

    const deleteLike = async () => {
        const rsp = await AxiosApi.delRevLike(reviewId, memId);
        if (rsp.data === true) {
            console.log("공감 삭제 성공");
            setRevLikeList(revLikeList.filter(item => !(item.reviewId === reviewId && item.memId === memId))); // 찜 삭제 성공시 배열에도 삭제
            setIsRevLike(false); // 최종 찜 상태를 false 로 전달
            console.log(revLikeList);

            } else {
            console.log("삭제 전송 실패");
            }
        };

    const onClickLiked = () =>{
        if (!isRevLike) {
            addLike();
        }else{
            deleteLike();
        }
    }
    return(
        <ReviewPage>
             {rtReview&&rtReview.map(rest=>(
                    <div className="box" key={rest.reviewId}>
                        <p className="nick">{rest.nickName}</p>
                        <p className="date">작성일 : {rest.reviewDate}</p>
                        <p className="title">{rest.reviewTitle}</p>
                        <p className="content">{rest.reviewContent}</p>
                        <p className="rating">평점 : {rest.reviewRating}</p>
                        <p>공감수 : </p>
                        <button className="like" onClick={()=>onClickLiked()} style={{backgroundColor : isRevLike ? "salmon" : "white"}}>공감</button>

                        <div className="imgBox">
                            <img src="" alt="이미지"/>
                            <img src="" alt="이미지" className="img1"/>
                            <img src="" alt="이미지" className="img2"/>
                        </div>
                    </div>
                ))}
        </ReviewPage>
    )

}

export default ReviewDetail;