import React,{useContext,useState}from "react";
import { RestIdContext } from "../context/RestaurantId";
import HomeFooter from "../component/footer/Foot";
import Header from "../component/header/RTheader";
import { useNavigate } from "react-router-dom";
import ResSeat from "../component/restaurantComponent/ResSeat";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from "react-calendar";
import moment from "moment/moment";
import ko from "date-fns/locale/ko";

const Reservation =() =>{
    const navigate = useNavigate();
	const[type,setType] = useState("booking");
    const onClickSeat = () => {
        setType("seat");
      }
    
// 캘린더 
    const [value, setValue] = useState(new Date());// 날짜 저장
    const [time,setTime] = useState(new Date());// 시간 저장
// 인원 수
    const people = Array(9)
    .fill()
    .map((_, index) => {
    return 1 + index;
    }); 

    
    return(
        <>
            <Header/>
            {type ==="booking"&&(
                <div>
                    <Calendar 
                    onChange={setValue} 
                    value={value}
                    calendarType="US"
                    minDate={new(Date)}
                    />
                    <DatePicker
                    selected={time}
                    onChange={(date) => setTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    minTime={new Date().setHours(11, 0)}
                    maxTime={new Date().setHours(20, 0)}
                    timeCaption="Time"
                    dateFormat="aa h:mm"
                    locale={ko}
                    />
                    <button onClick={onClickSeat}>다음</button>
                    <button onClick={()=>navigate(-1)}>취소</button>
                </div>
            )}
            {type==="seat"&& (
                <ResSeat/>
            )}
            <HomeFooter/>        
        </>
    );
}

export default Reservation;