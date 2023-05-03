import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  position: relative;
  bottom: 25px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color : black;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 80px;
    background-color: lightsalmon;
    border: 1px solid;
    border-right: none;
    border-bottom:5px solid ;
    font-size: 20px;
  }
  .rev{
    border-right: 1px solid;
  }
`;

const RestaurantNav = () => {
  return(
    <Nav>
      <Link to="/info">매장 상세 정보</Link>
      <Link to="/menu">메뉴 설명</Link>
      <Link className="rev" to="/review">리뷰 및 평점</Link>
    </Nav>
  );
};

export default RestaurantNav;