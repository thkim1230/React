import React,{useContext,useState}from "react";
import { RestIdContext } from "../context/RestaurantId";
import HomeFooter from "../component/footer/Foot";
import Header from "../component/header/RTheader";
import { useNavigate } from "react-router-dom";
import ResSeat from "../component/restaurantComponent/ResSeat";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/esm/locale";
import Calendar from "react-calendar";


const Res = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .box{
        border: 1px solid;
        width: 50%;
        padding: 30px;
        height: 50%;
    }
    .date{
        font-size: 20px;
        width: 120px;
        height: 30px;
    }   
    .time{
        font-size: 20px;
        width: 150px;
        height: 30px;
    }
    .cont1{
        display: flex;

        height:100px;
        p {
            width: 400px;
            font-size: 20px;
        }
    }
    .cont2{
        display: flex;
        p {
            width: 400px;
            font-size: 20px;
        }
    }
    button{
        position: relative;
        margin-left: 100px;
    }
`;

const Reservation =() =>{
    const {restId} = useContext(RestIdContext); // context api로 매장 id 입력 받음
    const memId = localStorage.getItem("memId");  // 로컬 스토리지로 로그인 시 회원 id 입력받고
    const [peo,setPeo] = useState(""); // 인원수 저장
    const [value, setValue] = useState(new Date());// 날짜 저장
    const navigate = useNavigate();
	const[type,setType] = useState("booking");
    const onClickSeat = () => {
        setType("seat");
      }
    
// 캘린더
  
    const [date, setDate] = useState(new Date());
    const [time,setTime] = useState("");
    return(
        <>
            <Header/>
            {type ==="booking"&&(
                <Res>
                    <div className="box">
                        <div className="cont1">
                            <p>날짜를 선택해 주세요 : </p>
                            <Calendar
                                className="date"
                                locale={ko}
                                selected={date}
                                onChange={(date) => setDate(date)}
                                dateFormat="yyyy-MM-dd"
                                />
                        </div>
                        <div className="cont2">
                            <p>시간을 선택해 주세요:</p>
                            <DatePicker
                                className="time"
                                selected={time}
                                locale={ko}
                                onChange={(date) => setTime(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={30}
                                timeCaption="Time"
                                dateFormat="aa h:mm "
                            />
                        </div>
                        <p>인원 선택</p>
                        <button onClick={onClickSeat}>다음</button>
                        <button onClick={()=>navigate(-1)}>취소</button>
                    </div>
                </Res>
            )}
            {type==="seat"&& (
                <ResSeat/>
            )}
            <HomeFooter/>        
        </>
    );
}

export default Reservation;