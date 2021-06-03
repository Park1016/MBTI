﻿import React, {useEffect, useRef, useState} from 'react';
import { useHistory, useLocation } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Question from './question/question';
import styles from './questions.module.css';
import { v4 as uuid } from 'uuid';

const Questions = ({questions}) => {
    
    const history = useHistory();
    const location = useLocation();
    
    const [IE, setIE] = useState(0);
    const [NS, setNS] = useState(0);
    const [TF, setTF] = useState(0);
    const [JP, setJP] = useState(0);

    const [i, setI] = useState(0);
    const [e, setE] = useState(0);
    const [n, setN] = useState(0);
    const [s, setS] = useState(0);
    const [t, setT] = useState(0); 
    const [f, setF] = useState(0); 
    const [j, setJ] = useState(0); 
    const [p, setP] = useState(0);

    const allQuestions = useRef();

    const onMbtiTypes = (type) => {
       if(type.I > type.E){
           console.log('I');
           setIE('I');
           setI(type.I);
           setE(type.E);
       }
       if(type.I < type.E){
           console.log('E');
           setIE('E');
           setI(type.I);
           setE(type.E);
       }
       if(type.N > type.S){
        //    console.log('N);
           setNS('N');
           setN(type.N);
           setS(type.S);
       }
       if(type.N < type.S){
        //    console.log('S');
           setNS('S');
           setN(type.N);
           setS(type.S);
       }
       if(type.T > type.F){
        //    console.log('T);
           setTF('T');
           setT(type.T);
           setF(type.F);
       }
       if(type.T < type.F){
        //    console.log('F');
           setTF('F');
           setT(type.T);
           setF(type.F);
       }
       if(type.P > type.J){
        //    console.log('P);
           setJP('P');
           setP(type.P);
           setJ(type.J);
       }
       if(type.P < type.J){
        //    console.log('J');
           setJP('J');
           setP(type.P);
           setJ(type.J);
       }    
    }

    useEffect(()=>{
        console.log(IE);
        console.log(NS);
        console.log(TF);
        console.log(JP);
        console.log(i,e,n,s,t,f,j,p);
    })

    const onResult = (event, allUl) => {
        const target = event.target.parentElement.parentElement;
        const lastQuestion = allUl.lastElementChild;

        if(target == lastQuestion){
            // console.log(IE, NS, TF, JP);
            // console.log(i,e,n,s,t,f,j,p);   
            let concat1 = IE.concat(NS);
            let concat2 = concat1.concat(TF);
            let resultType = concat2.concat(JP);
            let resultObj = {i:i,e:e,n:n,s:s,t:t,f:f,j:j,p:p};
        }
    }

   
    const allUl = allQuestions.current;
    // console.log(lastQuestion);


    return (
        <section className={styles.section}>
            <Header onClick={onResult}/>
            <section
                className={styles.allQuestions} 
                ref={allQuestions}
                onClick={(e)=>onResult(e, allUl)}>
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
            <Footer onClick={onResult}/>
        </section>
    )
}

export default Questions;