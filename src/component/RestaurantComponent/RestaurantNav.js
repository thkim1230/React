import Nav from 'react-bootstrap/Nav';

function RtNav() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/Restaurant/Info">
      <Nav.Item>
        <Nav.Link href="/Restaurant/Info">매장 상세 정보</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/Restaurant/menu">메뉴 설명</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/Restaurant/review">리뷰 및 평점</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default RtNav;