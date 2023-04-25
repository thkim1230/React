import styled from "styled-components";
import { useNavigate,Link } from "react-router-dom";


const Nav = styled.div`

  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ivory;
  a{
    color : black;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    background-color: salmon;
    border: 1px solid;
    font-size: 30px;
  }
`;



const RestaurantNav = () => {
  return(
    <Nav>
      <Link to="/">상세 정보</Link>
      <Link to="/menu">메뉴 설명</Link>
      <Link to="/review">리뷰 및 평점</Link>
    </Nav>
  );
}

export default RestaurantNav;