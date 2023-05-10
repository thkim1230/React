import React from "react";
import { useNavigate } from "react-router-dom";

const ResSeat =() =>{
        const nav = useNavigate();
    return(
        <>
            <p>좌석 선택</p>
            <button onClick={()=> nav("/check")}>다음</button>
            <button>취소</button>
        </>
    )
}
export default ResSeat;