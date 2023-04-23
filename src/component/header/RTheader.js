import React from "react";
import styled from "styled-components";

const Headerbar = styled.div`
background-color: salmon;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        width: 500px;
        height: 30px;
    }
`;



const Header = () => {
    return(
        <>
            <Headerbar>
                <input type="text" name="" id="" />
            </Headerbar>
        </>
    )
}
export default Header;