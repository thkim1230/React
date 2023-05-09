import React, { useState,useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import styled from 'styled-components';
import { RestIdContext } from "../context/RestaurantId";
import ResModal2 from './ResModal2';


const ModalStyle = styled.div`
    .date{
        margin: 10px;
        font-size: 15px;
        width: 700px;
        height: 300px;
        border: none;
        button{
            background-color: lightsalmon;
            font-size: 15px;
        }
      
    }
    .modal {
        display: none;  // 숨겨진 상태로 시작
        position: fixed;
        top: 0;  // 화면 전체를 덮도록 위치
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99; // 다른 모달 보다 위에 위치하도록 함
        background-color: rgba(0, 0, 0, 0.6); // 배경색을 검정으로 하고 투명도 조절
    }
    .openModal {
        display: flex; // 모달이 보이도록 함
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show 0.8s;
    }
    section > header{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f1f1f1;
        font-weight: 700;
        height: 50px;
    }
    section > header button {
        position: absolute;
        top: 4.5px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
    }
    section > main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 600px;
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
    }
    .select{
        float: left;
        select{
            margin: 10px;
        }
    }
    section {
        display: flex; // 모달이 보이도록 함
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 900px;
        height: 700px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    footer {
        height: 50px;
        button{
            position: relative;
            margin-top: 10px;
        }
        .clo{
            left:100px
        }
        .next{
            right: 100px;
        }
    }
    
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`;
const ResModal = (props) => {
    const {open,close} = props;

    const {restId} = useContext(RestIdContext); // context api로 매장 id 입력 받음
    const memId = localStorage.getItem("memId");  // 로컬 스토리지로 로그인 시 회원 id 입력받고
    const [peo,setPeo] = useState(""); // 인원수 저장
    const [seat,setSeat]=useState(""); // 좌석 저장
    const [value, setValue] = useState(new Date());// 날짜 저장
    const [resReq,setresReq] = useState(""); 

    const peoples = Array(10)
    .fill()
    .map((_, index) => {
      return 1 + index + "명";
    }); 

    const seats = Array(10)
    .fill()
    .map((_, index) => {
      return 1 + index + "번";
    });

    const onChangeResReq = (e) => {
        setresReq(e.target.value);
      };
      
    const handlePeopleChange = (event) => {
        setPeo(event.target.value);
      };
    const handleSeatChange = (event) => {
        setSeat(event.target.value);
      };
// 문의 작성 버튼 입력시 팝업 창

const [modalOpen, setModalOpen] = useState(false);

const openModal = () => {
    setModalOpen(true);
}

const closeModal = () => {
    setModalOpen(false);
}
const change = () =>{
    styled.background = "red";
}
const resData = [restId,memId,value,resReq,seat,peo];
localStorage.setItem("resData", JSON.stringify(resData));

  return (
    <ModalStyle>
        <div className={open ? "openModal modal" : "modal" }>
            {open && 
                <section>
                    <header>
                        <p>예약 하기</p>
                        <button onClick={close}>&times;</button>
                    </header>
                    <main>
                        <div>
                            <Calendar className="date" onClickDay={change} value={value} onChange={setValue}/>              
                        </div>
                        <div className='select'>
                            <select value={peo} onChange={handlePeopleChange}>
                                <option value="">인원을 선택해주세요</option>

                                {peoples.map((peo) => (
                                    <option key={peo} value={peo}>
                                        {peo}
                                    </option>
                                ))}
                            </select>
                            
                            <select value={seat} onChange={handleSeatChange}>
                                <option value="">좌석을 선택해주세요</option>

                                {seats.map((seat) => (
                                    <option key={seat} value={seat}>
                                        {seat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <textarea placeholder='요청사항을 적으세요' value={resReq} onChange={onChangeResReq} cols="100" rows="10"/>
                    </main>
                    <footer>
                        <button onClick={openModal} className='next'>다음</button>
                        <button onClick={close} className='clo'>취소</button>
                        <ResModal2 open={modalOpen} close={closeModal}></ResModal2>
                    </footer>
                </section>
            }
        </div>
    </ModalStyle>
  );
}

export default ResModal;
