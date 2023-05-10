import React from "react";
import Header from "../header/RTheader";
import HomeFooter from "../footer/Foot";

const ResCheck = () =>{

    return(
        <>  
            <Header/>
                <p>정보들</p>
                <button>예약 신청</button>
                <button>취소</button>
            <HomeFooter/>
        </>
    )

}

export default ResCheck;