import React from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory } from 'react-router';

const Login = (props) => {
    const history = useHistory();
    return (
        <section className={styles.section}>
            <Header />
            <button onClick={()=>{
                history.push('../questions/questions');
            }}>Login</button>
            <Footer />
        </section>
    )
}

export default Login;