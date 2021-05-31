import React from 'react';
import styles from './app.module.css';
import './app.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Questions from './components/questions/questions';
import Result from './components/result/result';

function App() {
  
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path={["/", "/login/login"]}>
            <Login />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
