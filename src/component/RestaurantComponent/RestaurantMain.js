import React from "react";
import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    height: 1000px;
`;

const Section = styled.section`
    img{
        width: 15%;
        height: 50%;
        background-color: white;
        margin-right: 5%;
    }
    div{
        width: 30%;
        height: 70%;
        background-color: white;
        display: flex;
        align-items: center;
        p{
            position: absolute;
            top: 100px;
        }
        button{
        position: relative;
        top: 100px;
        left:16px;
        width: 300px;
        height: 60px;
        margin-right: 10%;
        background-color: #ffa07a;
        color: black;
        font-size: 1rem;
        border: none;
        box-shadow: 1px 1px 5px;
        cursor: pointer;
    }
        .like {
        position: relative;
        width: 30px;
        height: 30px;
        left: 550px;
        top: -100px;
    }
    }
    
    width: 100%;
    height: 40%;
    background-color: #faebd7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;


const RestaurantMain = () => {
    
    return (
    <>
            <Main>
            <Section>
                    <img src="./image/Re.ex.jpg" alt="매장 사진" />
                    <div>
                        <p>
                            간단 매장 정보들
                        </p>
                        <button className="like">찜</button>
                        <button>예약하기</button>
                        <button>1:1 문의하기</button>
                    </div>
            </Section>
            </Main>
    </>
  )
}

export default RestaurantMain;