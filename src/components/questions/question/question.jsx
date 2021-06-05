import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './question.module.css';

let numOfI = 0;
let numOfE = 0;
let numOfN = 0;
let numOfS = 0;
let numOfT = 0;
let numOfF = 0;
let numOfJ = 0;
let numOfP = 0;
let IE = [];
let NS = [];
let TF = [];
let JP = [];
let num = 0;
let dynamicNum = 1;




const Question = memo(({id, questions, mbtiTypes, progressBar}) => {

    let [mbtiType, setMbtiType] = useState([]);
   
    const qArray = Object.values(questions.q);
    const q = qArray.join("");
    const a = Object.values(questions.a);
    const ul = useRef();
    const prev = useRef();
    const next = useRef();
  
    const onPlusNum = (e) => {
        // e.stopPropagation();
        num = num+dynamicNum;
        console.log(num);
        progressBar(num);
    }

    const onAnswer = (e, type) => {
       
        // const target = e.currentTarget;
        // e.preventDefault();
        // e.stopPropagation();
        switch (type[0]) {
            case 'I' :
                numOfI++;
                IE.I = numOfI;
                setMbtiType(IE); 
                console.log(IE);
                onPlusNum(e);              
                break;
            case 'E' :
                numOfE++;
                IE.E = numOfE;
                setMbtiType(IE);
                console.log(IE);
                onPlusNum(e);
                break;
            case 'N' :
                numOfN++;
                NS.N = numOfN;
                setMbtiType(NS);               
                console.log(NS);
                onPlusNum(e);
                break;
            case 'S' :
                numOfS++;
                NS.S = numOfS;
                setMbtiType(NS);
                console.log(NS);
                onPlusNum(e);
                break;
            case 'T' :
                numOfT++;
                TF.T = numOfT;
                setMbtiType(TF);               
                console.log(TF);
                onPlusNum(e);
                break;
            case 'F' :
                numOfF++;
                TF.F = numOfF;
                setMbtiType(TF);
                console.log(TF);
                onPlusNum(e);
                break;
            case 'J' :
                numOfJ++;
                JP.J = numOfJ;
                setMbtiType(JP);               
                console.log(JP);
                onPlusNum(e);
                break;
            case 'P' :
                numOfP++;
                JP.P = numOfP;
                setMbtiType(JP);
                console.log(JP);
                onPlusNum(e);
                break;
            default : console.log(type[0]);
        }  
    }


    const onTotal = (e, type) => {
        onAnswer(e, type);
        onMove(e);
    }

    const onPreviousMouse = (e) => {
        e.target.style.cursor = 'pointer';
        const target = prev.current.parentElement;
        if(target.previousElementSibling == null){
            e.target.style.cursor = 'not-allowed';
            return;
        }
    }

    const onNextMouse = (e) => {
        e.target.style.cursor = 'pointer';
        const target = prev.current.parentElement;
        if(target.nextElementSibling == null){
            e.target.style.cursor = 'not-allowed';
            return;
        }
    }

    const onPrevious = () => {
        const target = prev.current.parentElement;
        if(target.previousElementSibling == null){
            return;
        }
        num = num - dynamicNum;
        progressBar(num);
        target.style.display = 'none';
        target.previousElementSibling.style.display='block'; 
    }

    const onNext =() => {
        const target = next.current.parentElement;
        if(target.nextElementSibling == null){
            return;
        }
        target.style.display = 'none';
        target.nextElementSibling.style.display='block'; 
    }

    const onMove = (e) => {
        if(ul.current.id == 79){
            return;
        }

        ul.current.style.display = 'none';
        ul.current.nextElementSibling.style.display='block';    
    }


    // const onFirstScreen =() => {
    //     ul.current.style.display = 'none';
    //     if(ul.current.id == 0){
    //         ul.current.style.display = 'block';
    //     }
    // }

    useEffect(()=>{
        numOfI = 0;
        numOfE = 0;
        numOfN = 0;
        numOfS = 0;
        numOfT = 0;
        numOfF = 0;
        numOfJ = 0;
        numOfP = 0;
        IE = [];
        NS = [];
        TF = [];
        JP = [];
        num = 0;
    },[])

    useEffect((e)=>{
        
        ul.current.style.display = 'none';
        if(ul.current.id == 0){
            ul.current.style.display = 'block';
            return;
        }
    },[])

    
    useEffect(()=>{
        // onFirstScreen();
        mbtiTypes(mbtiType);
    })

    // useEffect(()=>{
    //     console.log(num);
    // },[])

    return (
        <ul id={id} className={styles.ul} ref={ul}>
            <button onMouseOver={(e)=>onPreviousMouse(e)} onClick={onPrevious} ref={prev}><i className="fas fa-chevron-left"></i></button>
            <button onMouseOver={(e)=>onNextMouse(e)} onClick={onNext} ref={next}><i className="fas fa-chevron-right"></i></button>
            <li>{q}</li>
            <div>
                {/* <button className={styles.btn} onClick={(e)=>onAnswer(e,a[0].type)} >{a[0].answer}</button>
                <button className={styles.btn} onClick={(e)=>onAnswer(e,a[1].type)} >{a[1].answer}</button> */}
                {/* <button className={styles.btn} onClick={(e)=>onMove(e)}>{a[0].answer}</button>
                <button className={styles.btn} onClick={(e)=>onMove(e)}>{a[1].answer}</button> */}
                {/* <button className={styles.btn} onClick={(e)=>{onAnswer(e,a[0].type);onMove(e)}} >{a[0].answer}</button>
                <button className={styles.btn} onClick={(e)=>{onAnswer(e,a[1].type);onMove(e)}} >{a[1].answer}</button> */}
                <button className={styles.btn} onClick={(e)=>onTotal(e,a[0].type)} >{a[0].answer}</button>
                <button className={styles.btn} onClick={(e)=>onTotal(e,a[1].type)} >{a[1].answer}</button>
            </div>
        </ul>
    )
})

export default Question;