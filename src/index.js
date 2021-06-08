import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import LoadData from './service/mbti';

// const loadData = new LoadData();
// console.log(LoadData);
// console.log(LoadData.q);
// console.log(LoadData.a);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App LoadData={LoadData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

