import React, { FC } from 'react';
import styled from '@emotion/styled';

const WrapperStyled = styled.div`
   width: 100%;
   max-width: 1024px;
   margin-left : auto;
   margin-right: auto;
   padding-left : .5em;
   padding-right: .5em;
`

const Wrapper: FC<{ children: JSX.Element }> = ({ children }) => {
   return (
      <WrapperStyled>
         { children }
      </WrapperStyled>
   )
}

export default Wrapper;
