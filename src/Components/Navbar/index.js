import React, {useState, useEffect} from 'react'
import { FaBars, FaWindows } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

function Navbar({ toggle }) {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY <= 80) {
            setScrollNav(false);
        } else {
            setScrollNav(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>

            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Rocio`s </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Contact me</NavBtnLink>
                    </NavBtn>
            
                </NavbarContainer>
            </Nav>
 
        </>
    )
}

export default Navbar
