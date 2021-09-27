import React from 'react'
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import Button from '@mui/material/Button';


const Navbar = () => {
    
    return (
        <>
        <Nav id='navbar'>
            <NavBarContainer>
                <NavLogo>
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>01. About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='experience'>02. Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='work'>03. Work</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'>04. contact</NavLinks>
                    </NavItem>
                    <Button variant="outlined" size='small' style={{
                        color:'#fff',
                        borderColor:'#fff',
                        fontSize: '0.6rem',
                        border: '1px solid #fff',

                    }}
                    sx={{m:3,p: 1,}}>Resume</Button>
                </NavMenu>
            </NavBarContainer>
        </Nav>
        </>
    )
}

export default Navbar