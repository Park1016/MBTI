import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import LoadData from './service/mbti';

const loadData = new LoadData();

ReactDOM.render(
  <React.StrictMode>
    <App loadData={loadData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

