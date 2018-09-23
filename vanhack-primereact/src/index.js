import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

window.SERVER_ROOT_URL = "http://localhost:30001/services";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
