import React from 'react';
import Wrapper from './Wrapper';

/* Styles */
import { shadow } from '../styles/utils';
import styled from '@emotion/styled';
const NavStyled = styled.nav`
   color: var(--black-color);
   padding: .2em 0;
   ${shadow}

   h1 {
      font-weight: 300;
   }
`

const Navbar = () => {
   return (
      <NavStyled>
         <Wrapper>
            <div>
               <h1>Dashboard</h1>
            </div>
         </Wrapper>
      </NavStyled>
   )
}

export default Navbar;
