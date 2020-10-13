import React, { FC, Fragment } from 'react';
import { hot } from 'react-hot-loader/root';

/* Styles */
import { GlobalStyle } from './styles/GlobalStyle'
import { Global, css } from '@emotion/core';

/* Components */
import Navbar from './components/Navbar';
import ChartContainer from './containers/ChartContainer';


const App: FC = () => {
   return (
      <Fragment>
         <Global styles={css`${GlobalStyle}`} />
         <Navbar />
         <ChartContainer />
      </Fragment>
   )
}

export default hot(App);
