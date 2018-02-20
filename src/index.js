import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './index.css';

ReactDOM.render(
  <Board count={50} />,
  document.getElementById('root')
);
