import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import Button from '@mui/material/Button';
import {FaBars} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Logo from 'C:/Users/fragm/Documents/cv websiTE/idriss/src/images/Logo';
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const HideAppBar = (props) =>  {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{
        bgcolor: '#0a192f',
        height:70,
        boxShadow: 13,
        display: 'flex',
      }}>
          <Toolbar sx={{display:'flex', justifyContent:'space-between',mb:10,}}>
          <Fade top duration={1200}>
          <Logo className='logo' style={{cursor:'pointer',}}>
          
          </Logo>
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
                        <NavLinks to='contact'>04. Contact</NavLinks>
                    </NavItem>
                    <Button variant="outlined" size='small' style={{
                        color:'#fff',
                        borderColor:'#fff',
                        fontSize: '0.7rem',
                        border: '1px solid #fff',
                    }}
                    sx={{m:3,p: 1,}}>Resume</Button>
                
                </NavMenu>
                </Fade>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default HideAppBar;