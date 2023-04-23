import React from "react";
import styled from "styled-components";

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
        </>
    )
}

export default Menu;