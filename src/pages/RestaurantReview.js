import React from "react";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/RestaurantComponent/RestaurantContainer";
import RestaurantNav from "../component/RestaurantComponent/RestaurantNav";
import styled from "styled-components";
import AxiosApi from "../api/Axios";
import {useState,useEffect} from "react";

const ReviewContanier = styled.section`

    width: 100%;
	height: 900px;
	display: flex;
	justify-content: center;
	align-items: center;

`;


const Review =() => {
      const [rtReview, setRtReview] = useState("");

	useEffect(() => {
		const rtReview = async()=>{
            const rsp = await AxiosApi.restaurantReview("710-12-12345")
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
                {rtReview&&rtReview.map(rest=>(
                    <div key={rest.reviewTitle}>
                        <p>{rest.reviewTitle}</p>
                        <p>{rest.reviewContent}</p>
                        <p>{rest.reviewRating}</p>
                        <p>{rest.reviewDate}</p>


                    </div>

                ))}

            </ReviewContanier>
			<HomeFooter/>
        </>
    )
}

export default Review;