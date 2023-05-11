import React from "react";
import { useState,useEffect } from "react";
import { storage } from "../firebase/firebase";
import {ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import { v4 } from "uuid"; // 이름이 같지 않게 랜덤함수 불러오기
const Fire =() =>{
    const [imageUplod, setImageUpload] = useState(null);// 이미지 파일 저장 함수
    const[imageList,setImageList]=useState([]);
    const imageListRef = ref(storage,"images/");

    // const uploadImage=()=>{ // 이미지 업로드 하는 함수
    //     if(imageUplod===null) return;

    //     const imageRef = ref(storage,`images/${imageUplod.name + v4() }`) //폴더 생성 (이름이 같지 않게 파일 일름뒤에 랜덤함수를 붙임)
    //     uploadBytes(imageRef,imageUplod).then(()=>{ // 이미지 파이어 베이스에 보내기 
    //         alert("image upload"); // 업로드 성공시 메세지

    //     });
    // };

    const uploadImage=()=>{ // 이미지 업로드 하는 함수
        if(imageUplod===null) return;

        const imageRef = ref(storage,`images/${imageUplod.name + v4() }`) 
        uploadBytes(imageRef,imageUplod).then((snapshot)=>{  // 파일 업로드 하면서 화면에 바로 사진 뿌리기
          getDownloadURL(snapshot.ref).then((url)=>{ 
            setImageList((prev)=>[...prev,url]);
          })
        });
    };

    useEffect (()=>{ // 화면에 이미지 불러오기
        listAll(imageListRef).then((response)=>{
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