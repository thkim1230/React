import React from "react";
import AxiosApi from "../api/Axios";
import {useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { RestIdContext } from "../context/RestaurantId";
import styled from "styled-components";

const ListBox = styled.div`
  border: 1px solid;
  width  : 450px ;
  height: 150px;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    font-size: 20px;
    text-decoration: none;
    color: black;
    padding: 20px;
  }
  p{
    float: left;
  }
  .rat{
    margin-right: 200px;
  }
`;

const List =() =>{
  window.localStorage.setItem("isLogin","FALSE")

  //Context API로 매장 id 받아와서 해당 id 매장 정보 출력
  const {setRestId} = useContext(RestIdContext);

  // 매장 리스트 정보 호출
  const [rtList, setRtList] = useState([]);

	useEffect(() => {
		const rtList = async()=>{
    const rsp = await AxiosApi.restaurantList('');
    setRtList(rsp.data);
    };
    rtList();
  },[]);
  
    return (
      <>
        {rtList.map(rest => (
        <ListBox key={rest.id}>
          <Link to={"/info"} onClick={() => setRestId(rest.id)}>
              <p>{rest.name} (주소 : {rest.addr})</p>
              <p className="rat">평점 : {rest.avgRating} </p> 
              <p className="rev">리뷰 {rest.reviewCount}개 </p>
          </Link>
        </ListBox>
        ))}
      </>
    );
};

export default List;