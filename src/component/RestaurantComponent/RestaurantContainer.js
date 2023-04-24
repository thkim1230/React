import React from "react"
import styled from "styled-components"

const FixContent = styled.section`

    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 200px;
        height: 200px;
    }
    div{
        width: 500px;
        height: 400px;


        button{
            width: 100px;
            height: 50px;
        }
    }
`;

const RestaurantContainer =() =>{
    return(
        <>
            <FixContent>
                <img src="" alt="" />
                <div>
                    <p>대충 불러온 데이터</p>
                    <button>예약하기</button>
                    <button>문의하기</button>
                </div>
            </FixContent>
        </>
    )
}

export default RestaurantContainer;