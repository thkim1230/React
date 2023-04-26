import React from "react";
import styled from "styled-components";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/RestaurantComponent/RestaurantContainer";
import RestaurantNav from "../component/RestaurantComponent/RestaurantNav";
import AxiosApi from "../api/Axios";
import {useState,useEffect} from "react";

const MenuContanier = styled.section `
        width: 100%;
		height: 900px;
		display: flex;
		justify-content: center;
		align-items: center;
    .cont{
        position: relative;
		bottom:5px;
		padding: 30px;
		background-color: white;
		height: 750px;
		width: 845px;
		border: 1px solid;
    
        .box{
            padding: 10px;
            width: 300px;
            height: 200px;
            border: 1px solid;
            margin-bottom: 40px;
            position: relative;
            left:500px;
            p{
                font-size: 20px;
                margin-bottom: 40px;
            }
        }
}
`;

const Menu =() => {
    const [rtMenu, setRtMenu] = useState("");

	useEffect(() => {
		const rtMenu = async()=>{
            const rsp = await AxiosApi.restaurantMenu("710-12-12345")
            setRtMenu(rsp.data);
        };
        rtMenu();
    },[]);

    return (
        <>
        	<Header/>
			<RestaurantContainer/>
            <RestaurantNav/>
            <MenuContanier>
                <div className="cont">
                    {rtMenu&&rtMenu.map(rest =>(
                        <div className="box" key={rest.menuName}>
                            <p>메뉴 이름 : {rest.menuName} </p>
                            <p>설명 : {rest.menuDesc}</p>
                            <p>가격 : {rest.menuPrice} </p>
                        </div>
                    ))}
                </div>
            </MenuContanier>
            <HomeFooter/>
        </>
    )
}

export default Menu;