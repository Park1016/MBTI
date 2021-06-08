import React, {memo, useEffect, useState} from 'react';
import styles from './app.module.css';
import './app.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Questions from './components/questions/questions';
import Result from './components/result/result';

const App = memo(({loadData}) => {
  
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState([]);
    
  useEffect(() => { 
      loadData.loadQuestion()
      .then(result => setQuestions(result.questionList))
      .catch(error => console.log('error', error));  

      loadData.loadAnswer()
      .then(result => setResult(result.resultsList))
      .catch(error => console.log('error', error)); 
  },[]) 

  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path={["/", "/login/login"]}>
            <Login />
          </Route>
          <Route path="/questions" >
            <Questions questions={questions} results={result}/>
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </Router>
    </div>
  );
})

export default App;
