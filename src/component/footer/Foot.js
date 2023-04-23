import React from "react";
import styled, {css} from "styled-components";
import FooterButtons from "./FoB";

const Container = styled.div`
    background-color: lightsalmon;
    height: 100px;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    position: sticky;
`;

const Box = styled.div`
    width : 600px;
    height : 100px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const HomeFooter = () => {

    return(
    
        <Container>
            <Box>
                <FooterButtons/>
            </Box>
        </Container>
        
       
    );
}

export default HomeFooter;