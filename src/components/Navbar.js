import React from 'react';
import { NavbarContainer,
         RightContainer,
         LeftContainer,
         NavbarInnerContainer,
         NavbarExtendedContainer,
         NavbarLinkContainer,
         NavbarLink }  from '../styles/Navbar.styles';
import About from './About';


function Navbar() {
  return <NavbarContainer>
      <NavbarInnerContainer>
       <LeftContainer >
           <NavbarLinkContainer >
               <NavbarLink to="/">Home</NavbarLink>
               <NavbarLink to="/about">About</NavbarLink>
               <NavbarLink to="/rules">Rules</NavbarLink>
               <NavbarLink to="/contact">Contact</NavbarLink>
           </NavbarLinkContainer>
       </LeftContainer>
       <RightContainer />
       </NavbarInnerContainer>
       <NavbarExtendedContainer ></NavbarExtendedContainer>
      </NavbarContainer>
}

export default Navbar