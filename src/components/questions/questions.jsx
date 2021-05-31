import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './questions.module.css';

const Questions = (props) => {
    const history = useHistory();
    return (
        <section className={styles.section}>
            <Header />
            <button onClick={()=>{
                history.push('../result/result');
            }}>Questions</button>
            <Footer />
        </section>
    )
}

export default Questions;