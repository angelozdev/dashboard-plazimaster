import React from 'react';

/* Styles */
import styled from '@emotion/styled';

/* Componenst */
import Chart from '../components/Chart'
import Wrapper from '../components/Wrapper';
import LineChart from '../components/LineChart';
import PieChart from '../components/BarChart';
import StackedChart from '../components/StackedAreaChart';

const ChartContainerStyled = styled.div`
   margin-top: 2em;
`

const ChartContainerGrid = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr 1fr;
   grid-gap: 20px;

   #first {
      grid-column: 1 / span 2;
   }

   #second {
      grid-column: 1 / span 1;
   }

   #third {
      grid-column: 2 / span 1;
   }

`

const ChartContainer = () => {
   return (
      <ChartContainerStyled>
         <Wrapper>
            <ChartContainerGrid>

               <Chart id="first">
                  <LineChart />
               </Chart>

               <Chart id="second">
                  <PieChart />
               </Chart>

               <Chart id="third">
                  <StackedChart />
               </Chart>

            </ChartContainerGrid>
         </Wrapper>
      </ChartContainerStyled>
   )
}

export default ChartContainer
