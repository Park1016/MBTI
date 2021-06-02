import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Question from './question/question';
import styles from './questions.module.css';
import { v4 as uuid } from 'uuid';

const Questions = ({questions}) => {
    const history = useHistory();
    
    return (
        <section className={styles.section}>
            <Header />
            <ul>
                {questions.map((question) => <Question key={uuid()} questions={question} />)}
            </ul>
            <button onClick={()=>{
                history.push('../result/result');
            }}>Questions</button>
            <Footer />
        </section>
    )
}

export default Questions;