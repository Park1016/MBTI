import React from 'react';
import styles from './result.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory } from 'react-router';

const Result = (props) => {
    const history = useHistory();
    return (
        <section className={styles.section}>
            <Header />
            <button onClick={()=>{
                history.push('../login/login');
            }}>result</button>
            <Footer />
        </section>
    )
}

export default Result;