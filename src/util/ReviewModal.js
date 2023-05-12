import React from "react";
import styled from "styled-components";
import { useState,useContext } from "react";
import AxiosApi from "../api/Axios";
import { RestIdContext } from "../context/RestaurantId";
import { storage } from "../firebase/firebase";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage";
import { v4 } from "uuid"; // 이름이 같지 않게 랜덤함수 불러오기

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
    const {restId} = useContext(RestIdContext); // context api로 매장 id 입력 받음
    const memId= localStorage.getItem("userId");
// props로 전달 받아서 팝업 열고 닫음
    const {open,close} = props;
    // 팝업창 초기화
    const resetInput = () => {
        setInputTitle("");
        setInputContent("");
        setInputRating("");
        setImageUrl(null);
        setImageUpload(null);
      }
    
// 이미지 업로드 기능
const [imageUplod, setImageUpload] = useState(null);// 이미지 파일 저장 
const [imageUrl,setImageUrl] =useState(null);//url 저장

const onChangeImage =(e) =>{
    setImageUpload(e.target.files[0])
}

const uploadImage=()=>{ // 이미지 업로드 하는 함수
    if(imageUplod===null) return;

    const imageRef = ref(storage,`images/${imageUplod.name + v4() }`) //폴더 생성 (이름이 같지 않게 파일 일름뒤에 랜덤함수를 붙임)
    uploadBytes(imageRef,imageUplod).then((snapshot)=>{ // 이미지 파이어 베이스에 보내기 
        return getDownloadURL(snapshot.ref).then((url)=>{ 
            setImageUrl(url);
          });
    })
};
    // 리뷰 데이터 입력 받고 데이터 추가 전송
    const [inputTttle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");
    const [inputRating,setInputRating] = useState("");

    const onChangeTitle = e =>{
        setInputTitle(e.target.value)
    }
    const onChangeContent = e =>{
        setInputContent(e.target.value)
    }
    const onChangeRating = e =>{
        setInputRating(e.target.value)
    }
    const addReview = async() =>{
        await uploadImage();
        const rsp = await AxiosApi.addReview(restId,memId,inputTttle,inputContent,inputRating,imageUrl);

        if(rsp.data === true) {
            alert("리뷰가 등록되었습니다.")
            resetInput();
            close();

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
                        <p>리뷰 작성</p>
                        <button onClick={close}>&times;</button>
                    </header>
                    <main>
                        <input className="title" value={inputTttle} type="text" onChange={onChangeTitle} placeholder="제목을 입력해 주세요"/>
                        <textarea className="content" cols="30" rows="10"  value={inputContent} onChange={onChangeContent} placeholder="내용을 입력해 주세요"></textarea>
                        <input type="number" value={inputRating} onChange={onChangeRating} placeholder="평점을 입력하세요 (0 ~ 5)"/>
                        <input type="file" className="file" onChange={onChangeImage} multifle accept="image/gif, image/jpeg, image/png"/>
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