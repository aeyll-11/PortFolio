import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import Navbar from '.';



export const Nav = styled.nav`
background:#0a192f;
height: 40px;
width:100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`

export const NavBarContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    height: 50px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
margin-right: 400px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.3rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
    display: flex;
    align-items:center;
    font-family: 'Roboto Mono', monospace;
    list-style:none;
    text-align:center;
    z-index: 1;
    /* margin-right: -22px; */
    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavItem = styled.li`
    font-size: 1rem;
    font-weight: 200;
    height: 30px;
`

export const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding:0 0.5rem;
    height: 100%;
    cursor: pointer;
    z-index:1;


    &.active{
        border-bottom: 3px solid #01bf71;
    }
`
export default Navbar;