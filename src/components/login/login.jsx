﻿import React, { useEffect } from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory } from 'react-router';
import Questions from '../questions/questions';

const Login = (props) => {
    const history = useHistory();
 
    const onForm = (e) => {
        e.preventDefault();
    }

    const onInput = (e) => {  
        const target = e.target.previousElementSibling;        
        const name = target.value;
        
        if(!name){
            target.placeholder = '이름을 입력하시라구욧!';
            return;
        }
        history.push({
            pathname: '../questions/questions',
            state: {name: name},
        });
        // target.previousElementSibling.value = '';        
    }
    
    return (
        <section className={styles.section}>
            <Header />
            <form onSubmit={(e)=>onForm(e)}>
                <input
                    className={styles.input}
                    placeholder='이름을 입력하세요'
                ></input>
                <button
                    onClick={(e)=>onInput(e)}
                >
                    Login
                </button>
            </form>
            <Footer />
        </section>
    )
}

export default Login;