import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AxiosApi from "../api/Axios";

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
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show 0.8s;
    }
    button {
        outline: none;
        cursor: pointer;
        margin-right: 10px;
        border: 0;
    }

    section {
        width: 900px;
        height: 500px;
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
        height: 360px;
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

    section > footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section > footer button {
        background-color: salmon;
        width: 200px;
        height: 30px;
        margin-top: 13px;
        margin-left:100px;
        margin-right: 100px;
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

const Modal = (props) => {
    // 팝업 열고 닫음
    const {open,close} = props;

    // 리뷰 데이터 입력 받고 데이터 추가 전송
    const [inputTttle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    const onChangeTitle = e =>{
        setInputTitle(e.target.value)
    }
    const onChangeContent = e =>{
        setInputContent(e.target.value)
    }

    const addReview = async() =>{
        const add = await AxiosApi.addReview(inputTttle,inputContent);
        add();
    }

    return (
        <ModalStyle>
            <div className={open ? "openModal modal" : "modal"}>
            {open && 
                <section>
                    <header>
                        <p>리뷰 작성</p>
                        <button onClick={close}>&times;</button>
                    </header>
                    <main>
                        <input className="title" value={inputTttle} type="text" onChange={onChangeTitle} placeholder="제목을 입력해 주세요"/>
                        <textarea className="content" cols="30" rows="10"  value={inputContent} onChange={onChangeContent} placeholder="내용을 입력해 주세요"></textarea>
                        <input type="file" className="file"/>
                    </main>
                    <footer>
                        <button onClick={addReview}>리뷰 등록</button>
                        <button onClick={close}>취소</button>
                    </footer>
                </section>
            }
            </div>
        </ModalStyle>
    );
  }
  

export default Modal;