import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import loadData from './service/mbti';

ReactDOM.render(
  <React.StrictMode>
    <App loadData={loadData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

