import React, { useEffect, useRef, useState } from 'react';
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


const Question = ({id, questions, mbtiTypes}) => {

    const [mbtiType, setMbtiType] = useState([]);
    const qArray = Object.values(questions.q);
    const q = qArray.join("");
    const a = Object.values(questions.a);
    const ul = useRef();
   

    const onAnswer = (e, type) => {
        // const target = e.currentTarget;
        // e.stopPropagation();
    
        switch (type[0]) {
            case 'I' :
                numOfI++;
                IE.I = numOfI;
                setMbtiType(IE);
                // mbtiTypes(mbtiType); 
                console.log(IE);              
                break;
            case 'E' :
                numOfE++;
                IE.E = numOfE;
                setMbtiType(IE);
                // mbtiTypes(mbtiType);
                console.log(IE);
                break;
            case 'N' :
                numOfN++;
                NS.N = numOfN;
                setMbtiType(NS);
                // mbtiTypes(mbtiType);               
                console.log(NS);
                break;
            case 'S' :
                numOfS++;
                NS.S = numOfS;
                setMbtiType(NS);
                // mbtiTypes(mbtiType);
                console.log(NS);
                break;
            case 'T' :
                numOfT++;
                TF.T = numOfT;
                setMbtiType(TF);
                // mbtiTypes(mbtiType);               
                console.log(TF);
                break;
            case 'F' :
                numOfF++;
                TF.F = numOfF;
                setMbtiType(TF);
                // mbtiTypes(mbtiType);
                console.log(TF);
                break;
            case 'J' :
                numOfJ++;
                JP.J = numOfJ;
                setMbtiType(JP);
                // mbtiTypes(mbtiType);               
                console.log(JP);
                break;
            case 'P' :
                numOfP++;
                JP.P = numOfP;
                setMbtiType(JP);
                // mbtiTypes(mbtiType);
                console.log(JP);
                break;
            default : console.log(type[0]);
        }  
    }

    const onMove = (e) => {
        // const target = e.target.parentElement.parentElement;
        e.stopPropagation();
        if(ul.current.id == 79){
            return;
        }
        ul.current.style.display = 'none';
        ul.current.nextElementSibling.style.display='block';    
    }


    useEffect(()=>{
        // ul.current.style.display = 'none';
        // if(ul.current.id == 0){
        //     ul.current.style.display = 'block';
        // }
        mbtiTypes(mbtiType);
    })

    return (
        <ul id={id} className={styles.ul} ref={ul}>
            <li>{q}</li>
            <div >
                <button onClick={(e)=>onAnswer(e,a[0].type)}>{a[0].answer}</button>
                <button onClick={(e)=>onAnswer(e,a[1].type)}>{a[1].answer}</button>
                {/* <button onClick={(e)=>{onAnswer(e,a[0].type);onMove(e)}}>{a[0].answer}</button>
                <button onClick={(e)=>{onAnswer(e,a[1].type);onMove(e)}}>{a[1].answer}</button> */}
                {/* <button>{a[0].answer}</button>
                <button>{a[1].answer}</button> */}
            </div>
        </ul>
    )
}

export default Question;