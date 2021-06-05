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




const Question = memo(({id, questions, mbtiTypes}) => {

    const [mbtiType, setMbtiType] = useState([]);
   
    const qArray = Object.values(questions.q);
    const q = qArray.join("");
    const a = Object.values(questions.a);
    const ul = useRef();
    const prev = useRef();
    const next = useRef();
   

    const onAnswer = (e, type) => {
       
        // const target = e.currentTarget;
        e.preventDefault();
        
        
      
        switch (type[0]) {
            case 'I' :
                numOfI++;
                IE.I = numOfI;
                setMbtiType(IE); 
                console.log(IE);              
                break;
            case 'E' :
                numOfE++;
                IE.E = numOfE;
                setMbtiType(IE);
                console.log(IE);
                break;
            case 'N' :
                numOfN++;
                NS.N = numOfN;
                setMbtiType(NS);               
                console.log(NS);
                break;
            case 'S' :
                numOfS++;
                NS.S = numOfS;
                setMbtiType(NS);
                console.log(NS);
                break;
            case 'T' :
                numOfT++;
                TF.T = numOfT;
                setMbtiType(TF);               
                console.log(TF);
                break;
            case 'F' :
                numOfF++;
                TF.F = numOfF;
                setMbtiType(TF);
                console.log(TF);
                break;
            case 'J' :
                numOfJ++;
                JP.J = numOfJ;
                setMbtiType(JP);               
                console.log(JP);
                break;
            case 'P' :
                numOfP++;
                JP.P = numOfP;
                setMbtiType(JP);
                console.log(JP);
                break;
            default : console.log(type[0]);
        }  
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
        // const target = e.target.parentElement.parentElement;
        // e.stopPropagation();
        e.preventDefault();
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


    return (
        <ul id={id} className={styles.ul} ref={ul}>
            <button onMouseOver={(e)=>onPreviousMouse(e)} onClick={onPrevious} ref={prev}><i className="fas fa-chevron-left"></i></button>
            <button onMouseOver={(e)=>onNextMouse(e)} onClick={onNext} ref={next}><i className="fas fa-chevron-right"></i></button>
            <li>{q}</li>
            <div>
                {/* <button onClick={(e)=>onAnswer(e,a[0].type)} >{a[0].answer}</button>
                <button onClick={(e)=>onAnswer(e,a[1].type)} >{a[1].answer}</button> */}
                {/* <button onClick={(e)=>onMove(e)}>{a[0].answer}</button>
                <button onClick={(e)=>onMove(e)}>{a[1].answer}</button> */}
                <button onClick={(e)=>{onAnswer(e,a[0].type);onMove(e)}} >{a[0].answer}</button>
                <button onClick={(e)=>{onAnswer(e,a[1].type);onMove(e)}} >{a[1].answer}</button>
            </div>
        </ul>
    )
})

export default Question;