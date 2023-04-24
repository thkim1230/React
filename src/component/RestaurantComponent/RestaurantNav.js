import styled from "styled-components";
import { useNavigate,Link } from "react-router-dom";


const Nav = styled.div`

  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  Link {
    width: 100px;
    height: 100px;

  }
`;



const RestaurantNav = () => {

  return(
    <Nav>
      <Link to ="/"></Link>
      <Link to ="/Restaurant/menu"></Link>
      <Link to ="/Restaurant/review"></Link>
    </Nav>
  );
}

export default RestaurantNav;