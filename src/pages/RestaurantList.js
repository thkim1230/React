import React from "react";
import AxiosApi from "../api/Axios";
import {useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { RestaurantIdContext } from "../context/RestaurantId";
import styled from "styled-components";

const ListBox = styled.div`
  border: 1px solid;
  width  : 400px ;
  height: 200px;
  margin: 30px;

`;


const List =() =>{
  //Context api
	const {setSelectedRestaurantId,selectedRestaurantId} = useContext(RestaurantIdContext);
 
  const [rtIdList, setRtIdList] = useState([]);

  const [rtList, setRtList] = useState([]);
  
  useEffect(() => {
    const rtList = async()=>{
    const rsp = await AxiosApi.restaurantList(selectedRestaurantId);
    setRtList(rsp.data);
    };
    rtList();
  },[selectedRestaurantId]);

	useEffect(() => {
		const rtIdList = async()=>{
    const rsp = await AxiosApi.restaurantIdList('');
    setRtIdList(rsp.data);
    };
    rtIdList();
  },[]);
  


    return (
      <>
        {rtIdList.map((restId) => (
        <ListBox key={restId}>
          <Link to={"/info"} onClick={() => setSelectedRestaurantId(restId)}>
            아니
            {rtList.map(rest=>(
            <div key={rest.name}>
              <p>매장 이름 : {rest.name} (주소 : {rest.addr})</p>
              <p>평점 : {rest.avgRating} 리뷰 {rest.reviewCount}개 </p>
            </div>
            ))}
          </Link>
        </ListBox>
      ))}
    </>
      );
};
export default List;