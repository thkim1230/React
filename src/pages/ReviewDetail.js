import { useEffect,useState,useContext } from "react";
import AxiosApi from "../api/Axios";
import { RestIdContext } from "../context/RestaurantId";

const ReviewDetail = () =>{
    const {restId} = useContext(RestIdContext);
    const [rtReview, setRtReview] = useState(""); // 모든 리뷰 데이터

    useEffect(() => {
        const rtReview = async()=>{
        const rsp = await AxiosApi.restaurantReview(restId)
        setRtReview(rsp.data);
    };
    rtReview();
    },[]);

    return(
        <>
             {rtReview&&rtReview.map(rest=>(
                    <div className="box" key={rest.reviewId}>
                        <p className="nick">{rest.nickName}</p>
                        <p className="date">작성일 : {rest.reviewDate}</p>
                        <p className="title">{rest.reviewTitle}</p>
                        <p className="content">{rest.reviewContent}</p>
                        <p className="rating">평점 : {rest.reviewRating}</p>
                        <button className="like" >공감</button>
                        <div className="imgBox">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                ))}
        </>
    )

}

export default ReviewDetail;