import React from "react";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/RestaurantComponent/RestaurantContainer";
import RestaurantNav from "../component/RestaurantComponent/RestaurantNav";

const Review =() => {
    return (
        <>
        	<Header/>
			<RestaurantContainer/>
            <RestaurantNav/>
            <div>
                <p>리뷰요</p>
            </div>
			<HomeFooter/>
        </>
    )
}

export default Review;