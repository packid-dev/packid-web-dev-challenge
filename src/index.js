// Importando o React
import React from 'react';
// Importando o React Dom para injetar o <APP /> na tag <div id="root"></div> do index.html
import ReactDOM from 'react-dom';
// Importando o componenet APP
import App from './App';
// Importando a nossa Lib de rotas
import { BrowserRouter } from 'react-router-dom'

import './index.css';

// Obs: Coloca-se o <BrowserRouter> envolta de <App /> para que as rotas fiquem disponíveis no nosso APP todo
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))