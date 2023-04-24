import React from "react";
import styled from "styled-components";
import Header from "../component/header/RTheader";
import HomeFooter from "../component/footer/Foot";
import RestaurantContainer from "../component/RestaurantComponent/RestaurantContainer";
import RestaurantNav from "../component/RestaurantComponent/RestaurantNav";
const MenuContanier = styled.div `
    width: 1500px;
`;

const MenuBox = styled.div`
    width: 800px;
    height: 300px;
    img{
        width: 100px;
        height: 100px;
    }
    div{
        width: 200px;
        height: 100px;
    }
`;


const Menu =() => {
    return (
        <>
        	<Header/>
			<RestaurantContainer/>
            <MenuContanier>
            <RestaurantNav/>
                <MenuBox>
                    <img src="" alt="" />
                    <div>
                        <p>메뉴 테이블에서 불러온 데이터</p>
                    </div>
                </MenuBox>

                <MenuBox>
                    <img src="" alt="" />
                    <div>
                        <p>메뉴 테이블에서 불러온 데이터</p>
                    </div>
                </MenuBox>
            </MenuContanier>
            <HomeFooter/>
        </>
    )
}

export default Menu;