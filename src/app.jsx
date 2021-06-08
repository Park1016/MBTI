import React, {memo, useEffect, useState} from 'react';
import styles from './app.module.css';
import './app.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Questions from './components/questions/questions';
import Result from './components/result/result';
// import LoadResultsList from './service/mbti.js';

const App = memo(({LoadData}) => {
  
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState([]);
    
  useEffect(() => { 
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };

    // fetch("http://localhost:3007/questionList", requestOptions)
    // .then(response => response.json()) 
    // .then(result => setQuestions(result))
    // .catch(error => console.log('error', error));  
    
    // fetch("http://localhost:3007/resultsList", requestOptions)
    //   .then(response => response.json())
    //   .then(result => setResult(result))
    //   .catch(error => console.log('error', error)); 




      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

  
      fetch("/src/data/mbti.json", requestOptions)
      .then(response => response.json()) 
      .then(result => setQuestions(result.questionList))
      .catch(error => console.log('error', error));  

      fetch("/src/data/mbti.json", requestOptions)
      .then(response => response.json()) 
      .then(result => setResult(result.resultsList))
      .catch(error => console.log('error', error)); 
      
      // fetch("http://localhost:3007/resultsList", requestOptions)
      //   .then(response => response.json())
      //   .then(result => setResult(result))
      //   .catch(error => console.log('error', error)); 
















// const loadData = new LoadData();
// console.log(loadData);
//     loadData.LoadQuestionList()
//     .then(items=>{
//       console.log(items);
//     });

//     loadData.LoadResultsList()
//     .then(items=>{
//       setResult(items);
//     });

  },[]) 

  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path={["/", "/login/login"]}>
            <Login />
          </Route>
          <Route path="/questions" >
            <Questions questions={questions} />
          </Route>
          <Route path="/result">
            <Result results={result}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
})

export default App;
