import React from "react";
import styled from "styled-components";
import { useState,useContext } from "react";
import AxiosApi from "../api/Axios";
import { RestIdContext } from "../context/RestaurantId";

const ModalStyle = styled.div`

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
        width: 100%;
        height: 100%;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show 0.8s;
    }
    /* button {
        outline: none;
        cursor: pointer;
        margin-right: 10px;
        border: 0;
    } */

    section {
        width: 900px;
        height: 450px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    section > header{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #f1f1f1;
        font-weight: 700;
        height: 20px;
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
        height: 300px;
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
        .title{
            margin-bottom: 30px;
            width: 800px;
            height: 30px;
        }
        .content{
            width: 800px;
            margin-bottom: 30px;

        }
        .file{
            position: relative;
            right: 275px;
        }
    }
    footer{
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    section > footer button {
        position: absolute;
        left:1200px;
        background-color: white;
        margin-top: 10px;
    }
    .add{
        position: absolute;
        left:550px;
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

const InquiryModal = (props) => {
    const {restId} = useContext(RestIdContext); // context api로 매장 id 입력 받음

    // 팝업 열고 닫음
    const {open,close} = props;

    // 문의 데이터 입력 받고 데이터 추가 전송
    const [inputTttle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    const onChangeTitle = e =>{
        setInputTitle(e.target.value)
    }
    const onChangeContent = e =>{
        setInputContent(e.target.value)
    }

    const addInquiry = async() =>{
        const memId= localStorage.getItem("userId");

        const rsp = await AxiosApi.addInquiry(restId,memId,inputTttle,inputContent);

        if(rsp.data === true) {
            console.log("성공");
            alert("문의가 등록되었습니다.")

        } else {
            console.log("전송 실패");
        }
    }

    return (
        <ModalStyle>
            <div className={open ? "openModal modal" : "modal"}>
            {open && 
                <section>
                    <header>
                        <p>문의 작성</p>
                        <button onClick={close}>&times;</button>
                    </header>
                    <main>
                        <input className="title" value={inputTttle} type="text" onChange={onChangeTitle} placeholder="제목을 입력해 주세요"/>
                        <textarea className="content" cols="30" rows="10"  value={inputContent} onChange={onChangeContent} placeholder="내용을 입력해 주세요"></textarea>
                        <input type="file" className="file"/>
                    </main>
                    <footer>
                        <button className="add" onClick={addInquiry&&close}>문의 등록</button>
                        <button onClick={close}>취소</button>
                    </footer>
                </section>
            }
            </div>
        </ModalStyle>
    );
  }
  

export default InquiryModal;