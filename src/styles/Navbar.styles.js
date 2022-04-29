import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavbarContainer = styled.nav`
   width: 100%;
   height: 80px;
   background-color: black;
   display: flex;
   flex-direction: column;
`
export const LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left: 5%;
`
export const RightContainer = styled.div`
flex: 30%;
display: flex;
justify-content: flex-end;
padding-right: 50px;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
` 
export const NavbarLinkContainer = styled.div`
   display: flex;
`

export const NavbarLink = styled(Link)`

   color: white;
   font-size: 20px;
   font-family: Arial, Helvetica, sans-serif;
   text-decoration: none;
   margin: 10px 20px;
`

export const NavbarExtendedContainer = styled.div`

` 