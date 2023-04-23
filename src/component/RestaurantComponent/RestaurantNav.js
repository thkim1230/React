import styled, {css} from 'styled-components';
const nav = [
    {
        name: 'info',
        text: '매장 상세 정보'
    },
    {
        name: 'menu',
        text: '메뉴 설명'
    },
    {
        name: 'review',
        text: '리뷰 및 평점'
    },
]

const NavBlock = styled.div`
    background-color: ivory;
    position: absolute;
    top: 410px;
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: 1999px;
    margin: 0 auto;
		// 화면 너비가 768픽셀 이하 적용
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;
const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre; // 공백이나 줄바꿈이 있는 경우 그대로 표시
    text-decoration: none;
    color: inherit; // 부모의 컬러값을 그대로 가져옴
    padding-bottom: .25rem;

    &:hover {
        color: #495057;
    }
    ${props => 
        props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22bbcf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    `}

    & + & {
        margin-left: 1rem;
    }
`;

const RestaurantNav = ({onSelect, category}) => {
    return (
        <NavBlock>
            {nav.map(c=>(
                <Category key={c.name} active={category===c.name} onClick={()=>onSelect(c.name)}>
                    {c.text}
                </Category>
            ))}
        </NavBlock>
    );
};
export default RestaurantNav;
