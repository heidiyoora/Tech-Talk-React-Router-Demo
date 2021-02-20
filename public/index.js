import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './styles/style.scss';

render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);