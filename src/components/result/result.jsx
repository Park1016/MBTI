import React from 'react';
import styles from './result.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory, useLocation } from 'react-router';

const Result = (props) => {
    const history = useHistory();
    const location = useLocation();

    return (
        <section className={styles.section}>
            <Header />
            <h1>{location.state.name}님의 결과입니다</h1>
            <button onClick={()=>{
                history.push('../login/login');
            }}>result</button>
            <Footer />
        </section>
    )
}

export default Result;