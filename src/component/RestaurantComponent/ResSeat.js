import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    .box{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
        width: 100px;
        height: 100px;
        border: 1px solid;
        margin: 10px;
        pointer-events: ${props => props.disabled ? 'none' : 'initial'};

    }

`;



const ResSeat =(props) =>{
    const nav = useNavigate();
    const [seatInfo,setSeatInfo]=useState();
    const [seatNum,setSeatNum] = useState([1]);

    useEffect(() => {
		const checkSeat = async () => {
		const rsp = await AxiosApi.resSeat(props.data.resDate,props.data.restId,seatNum[0]);
		setSeatInfo(rsp.data);
		};
		checkSeat();
	}, []);

    const selectSeat = (e) => {
        console.log(seatInfo);
        // 이미 선택한 좌석인 경우, 해당 좌석의 정보를 배열에서 삭제합니다.
        if (seatNum.includes(e)) {
            setSeatNum(seatNum.filter((num) => num !== e));
            console.log(seatNum[0]);
        }
        // 아직 선택하지 않은 좌석인 경우, 해당 좌석의 정보를 배열에 추가합니다.
        else {
            setSeatNum([...seatNum, e]);
            console.log(seatNum[0]);

        }
      };
    return(
        <Box>
            {/* <p>좌석 선택</p>
            <div className="box" style={{backgroundColor : seatNum.includes(1) ? "salmon" : "white"}} disabled={seatInfo} onClick={() => selectSeat(1)}>1</div>
            <div className="box" style={{backgroundColor : seatNum.includes(2) ? "salmon" : "white"}} disabled={seatInfo} onClick={() => selectSeat(2)}>2</div>
            <div className="box" style={{backgroundColor : seatNum.includes(3) ? "salmon" : "white"}} disabled={seatInfo} onClick={() => selectSeat(3)}>3</div>
            <div className="box" style={{backgroundColor : seatNum.includes(4) ? "salmon" : "white"}} disabled={seatInfo} onClick={() => selectSeat(4)}>4</div>
            <div className="box" style={{backgroundColor : seatNum.includes(5) ? "salmon" : "white"}} disabled={seatInfo} onClick={() => selectSeat(5)}>5</div>
            <div className="box" style={{backgroundColor : seatNum.includes(6) ? "salmon" : "white"}} disabled={seatInfo} onClick={() => selectSeat(6)}>6</div>
            <div className="box" style={{backgroundColor : seatNum.includes(7) ? "salmon" : "white"}} disabled={seatInfo} onClick={() => selectSeat(7)}>7</div> */}

            <button onClick={()=> nav("/check")}>다음</button>
            <button onClick={()=> nav("/info")}>취소</button>
        </Box>
    )
}
export default ResSeat;