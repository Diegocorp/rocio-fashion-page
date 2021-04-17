import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import { 
    SidebarContainer,
    Icon,
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from './SidebarElements'

const toggleHome = () => {
    scroll.scrollToTop();
}

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen = { isOpen } onClick={ toggle }>
            <Icon onClick={toggle}>
              <CloseIcon/>
            </Icon>
            <SidebarWrapper> 
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle} >
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={ toggle }>
                        About
                    </SidebarLink>
                    <SidebarLink to="services" onClick={ toggle }>
                        Services
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={ toggle }>
                        Projects
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin"> Contact me </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
