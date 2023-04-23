import React from "react";
import styled from "styled-components";

const Headerbar = styled.div`
    width: 100%;
    height: 500px;
    input{
        width: 500px;
        height: 100px;
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