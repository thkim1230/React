import React from "react";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/restaurantComponent/RestaurantContainer";
import RestaurantNav from "../component/restaurantComponent/RestaurantNav";
import styled from "styled-components";
import AxiosApi from "../api/Axios";
import {useState,useEffect,useContext} from "react";
import { RestaurantIdContext } from "../context/RestaurantId";

const ReviewContanier = styled.section`

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
    const {selectedRestaurantId} = useContext(RestaurantIdContext);

      const [rtReview, setRtReview] = useState("");

	useEffect(() => {
		const rtReview = async()=>{
            const rsp = await AxiosApi.restaurantReview(selectedRestaurantId)
            setRtReview(rsp.data);
        };
        rtReview();
    },[]);

    return (
        <>
        	<Header/>
			<RestaurantContainer/>
            <RestaurantNav/>
            <ReviewContanier>
                <div className="cont">
                {rtReview&&rtReview.map(rest=>(
                    <div className="box" key={rest.reviewId}>
                        <p>{rest.reviewTitle}</p>
                        <p>{rest.reviewContent}</p>
                        <p>평점 : {rest.reviewRating}</p>
                        <p>작성일 : {rest.reviewDate}</p>
                    </div>
                ))}
                </div>
            </ReviewContanier>
			<HomeFooter/>
        </>
    )
}

export default Review;