import React, {useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Question from './question/question';
import styles from './questions.module.css';
import { v4 as uuid } from 'uuid';

const Questions = ({questions}) => {
    
    const history = useHistory();
    const location = useLocation();
    
    const [types, setTypes] = useState([]);

    const onMbtiTypes = (type) => {
        if(type.I>type.E){
            setTypes('I');
        }else if(type.I<type.E){
            setTypes('E');
        }
        console.log(types);
    }

    return (
        <section className={styles.section}>
            <Header />
            <section>
                {questions.map((question, index) =>
                <Question
                    id={index}
                    key={uuid()}
                    questions={question}
                    mbtiTypes={onMbtiTypes}
                />)}
            </section>
            <button onClick={()=>{
                history.push({
                    pathname: '../result/result',
                    state: {name: location.state.name}
                });
            }}>Questions</button>
            <Footer />
        </section>
    )
}

export default Questions;