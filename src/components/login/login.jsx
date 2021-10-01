import React, { useState } from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory } from 'react-router';
// import Questions from '../questions/questions';

const Login = (props) => {
    const history = useHistory();
    let [change, setChange] = useState(false);

    const onForm = (e) => {
        e.preventDefault();
    }

    const onInput = (e) => {  
        e.preventDefault();
        const target = e.target.previousElementSibling;        
        const name = target.value;
        if(!name){
            setChange(true);
            target.placeholder = '이름을 입력하시라구욧!';
            return;
        }
        history.push({
            pathname: '../questions/questions',
            state: {name: name},
        }); 
    }

    const onKeyDown = (e) => {
        e.target.placeholder = '이름을 입력하세요';
        setChange(false);
    }
    

    return (
        <section className={styles.container}>
            <div className={styles.floating}></div>
            <div className={styles.i}>I</div>
            <div className={styles.e}>E</div>
            <div className={styles.n}>N</div>
            <div className={styles.f}>F</div>
            <div className={styles.s}>S</div>
            <div className={styles.t}>T</div>
            <div className={styles.j}>J</div>
            <div className={styles.p}>P</div>
            <p className={styles.text}>80가지 문항과 함께하는</p>
            <p className={styles.title}>MBTI 테스트</p>
            <form className={styles.form} onSubmit={(e)=>onForm(e)}>
                <input
                    maxLength='6'
                    onKeyDown={(e)=>onKeyDown(e)}
                    className={change ? styles.change : styles.input}
                    placeholder='이름을 입력하세요'
                ></input>
                <button
                    className={styles.btn}
                    onClick={(e)=>onInput(e)}
                >
                    시작하기
                </button>
            </form>
            {/* <Footer /> */}
        </section>
    )
}

export default Login;