import React, { useContext, createContext } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './styles/style.scss';

export const setUrl = () => {
  return window.location.href;
};

render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);