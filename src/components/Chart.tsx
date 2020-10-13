import React, { FC } from 'react'
import styled from '@emotion/styled';
import { shadow } from '../styles/utils';

const ChartStyled = styled.div`
   width: 100%;
   border-radius: 1em;
   padding: 1em;
   ${shadow}
`


const Chart: FC<{id: string, children: JSX.Element}> = ({ id, children }) => {
   return (
      <ChartStyled id={id}>
         { children }
      </ChartStyled>
   )
}

export default Chart;
