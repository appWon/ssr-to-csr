import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDom.hydrate(<Main />, document.getElementById('root'));
