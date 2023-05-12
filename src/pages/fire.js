import React from "react";
import { useState,useEffect } from "react";
import { storage } from "../firebase/firebase";
import {ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import { v4 } from "uuid"; // 이름이 같지 않게 랜덤함수 불러오기
const Fire =() =>{
    const [imageUplod, setImageUpload] = useState(null);// 이미지 파일 저장 
    const[imageList,setImageList]=useState([]); // 이미지 url을 저장
    const imageListRef = ref(storage,"images/"); // firebase 스토리지 경로 참조

    // const uploadImage=()=>{ // 이미지 업로드 하는 함수
    //     if(imageUplod===null) return;

    //     const imageRef = ref(storage,`images/${imageUplod.name + v4() }`) //폴더 생성 (이름이 같지 않게 파일 일름뒤에 랜덤함수를 붙임)
    //     uploadBytes(imageRef,imageUplod).then(()=>{ // 이미지 파이어 베이스에 보내기 
    //         alert("image upload"); // 업로드 성공시 메세지

    //     });
    // };

    const uploadImage=()=>{ // 이미지 업로드 하는 함수
        if(imageUplod===null) return; // 업로드하는 파일이 없으면 그냥 종료

        const imageRef = ref(storage,`images/${imageUplod.name + v4() }`) // 경로 참조
        uploadBytes(imageRef,imageUplod).then((snapshot)=>{  // 파일 업로드 할때마다 화면에 바로 사진 뿌리기
          getDownloadURL(snapshot.ref).then((url)=>{ 
            setImageList((prev)=>[...prev,url]);
          })
        });
    };

    useEffect (()=>{ // 화면에 이미지 불러오기
        listAll(imageListRef).then((response)=>{// 참조하는 모든 이미지 리스트 불러오기
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev,url])
                })
            })
        })
    },[]); 
    return(
        <div>
            <input type="file" onChange={event=>{setImageUpload(event.target.files[0])}}/>
            <button onClick={uploadImage}>Upload</button>

            {imageList.map((url)=>{
                return <img src={url}/>
            })}
        </div>

    )
}
export default Fire;
