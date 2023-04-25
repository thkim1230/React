import styled from "styled-components";
import { useNavigate,Link } from "react-router-dom";


const Nav = styled.div`

  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ivory;
  p{
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    width: 300px;
    height: 100px;
    background-color: salmon;
  }

`;



const RestaurantNav = () => {

  return(
    <Nav>
      <p>매장 상세 정보</p>
      <p>메뉴</p>
      <p>리뷰 및 평점</p>
    </Nav>
  );
}

export default RestaurantNav;