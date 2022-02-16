import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Board from './Board';
import { observe } from './Game'
import reportWebVitals from './reportWebVitals';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

const root = document.getElementById('root')
observe((knightPosition) =>
  ReactDOM.render(
    <div>
      <h1>Cheesgame</h1>
      <Board knightPosition={knightPosition} />
    </div>, 
  root)
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
