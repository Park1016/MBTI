import React, { useEffect, memo, useRef, useState } from 'react';
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
const dynamicNum = 1;
let btnNum = 0;
let totalNum = 0;
let previousTotalNum = 0;




const Question = memo(({id, questions, mbtiTypes, progressBar, btn}) => {

    let [mbtiType, setMbtiType] = useState([]); 
    const qArray = Object.values(questions.q);
    const q = qArray.join("");
    const a = Object.values(questions.a);
    const ul = useRef();
    const prev = useRef();
    const next = useRef();

    const onPlusNum = () => {
        num = num+dynamicNum;
        progressBar(num);
    }

    const onPlusBtnNum = (e) => {
        btnNum = num+dynamicNum;
    }

    const onAnswer = (e, type) => {   
        if(num == 80){
            return;
        }
        if(num == 79){
            btn.style.backgroundColor = 'red';
        }
        onPlusBtnNum();
        switch (type[0]) {
            case 'I' :
                numOfI++;
                IE.I = numOfI;
                setMbtiType(IE); 
                // mbtiTypes(mbtiType);
                // console.log(IE);
                onPlusNum();              
                break;
            case 'E' :
                numOfE++;
                IE.E = numOfE;
                setMbtiType(IE);
                // mbtiTypes(mbtiType);
                // console.log(IE);
                onPlusNum();
                break;
            case 'N' :
                numOfN++;
                NS.N = numOfN;
                setMbtiType(NS);               
                // console.log(NS);
                onPlusNum();
                break;
            case 'S' :
                numOfS++;
                NS.S = numOfS;
                setMbtiType(NS);
                // console.log(NS);
                onPlusNum();
                break;
            case 'T' :
                numOfT++;
                TF.T = numOfT;
                setMbtiType(TF);               
                // console.log(TF);
                onPlusNum();
                break;
            case 'F' :
                numOfF++;
                TF.F = numOfF;
                setMbtiType(TF);
                // console.log(TF);
                onPlusNum();
                break;
            case 'J' :
                numOfJ++;
                JP.J = numOfJ;
                setMbtiType(JP);               
                // console.log(JP);
                onPlusNum();
                break;
            case 'P' :
                numOfP++;
                JP.P = numOfP;
                setMbtiType(JP);
                // console.log(JP);
                onPlusNum();
                break;
            default : console.log('답변에 맞는 유형을 찾지 못했습니다');
        }  
    }


    const onTotal = (e, type) => {
        onAnswer(e, type);
        onMove(e);
    }

    const onPreviousMouse = () => {
        const target = prev.current.parentElement.parentElement.parentElement;
        if(target.previousElementSibling == null){
            prev.current.style.cursor = 'not-allowed';
            return;
        }
    }

    const onNextMouse = () => {
        const target = prev.current.parentElement.parentElement.parentElement;
        if(target.nextElementSibling == null){
            next.current.style.cursor = 'not-allowed';
            return;
        }
    }

    const onLeftMove = () => {
        const prevParentTarget = prev.current.parentElement.parentElement.parentElement;
        //     previousTotalNum = totalNum-dynamicNum;
        //     console.log(previousTotalNum);
        //     const target = prev.current.parentElement;
        if(prevParentTarget.previousElementSibling == null){
            return;
        }
        prevParentTarget.style.display = 'none';
        prevParentTarget.previousElementSibling.style.display='block';
    }

    const onRightMove = () => {
        const nextParentTarget = next.current.parentElement.parentElement.parentElement;
        // totalNum = btnNum+dynamicNum;
        // if(previousTotalNum !== 0 && previousTotalNum > parseInt(ul.current.id)){
        //     console.log('?');
        //     previousTotalNum++;
        //     totalNum = previousTotalNum;
        //     target.style.display = 'none';
        //     target.nextElementSibling.style.display='block';
        //     console.log(previousTotalNum, ul.current.id);
        //     return;
        // }
        // console.log(totalNum, num, ul.current.id);
        // if(totalNum > num){
        //     console.log(totalNum, num);     
        //     return;
        // }
        if(nextParentTarget.nextElementSibling == null){
            return;
        }
        nextParentTarget.style.display = 'none';
        nextParentTarget.nextElementSibling.style.display='block';
    }

    const onPreviousNext = (e) => {
        const target = e.target.parentElement;
        if(target == prev.current){
            onLeftMove();
        }
        if(target == next.current){
            onRightMove();
        }
    }

    const onPreviousBtn = (e) => {    
        onLeftMove();       
    }

    const onNextBtn = (e) => {    
        onRightMove();       
    }
    

    const onMove = (e) => {
        if(ul.current.id == 79){
            return;
        }

        ul.current.style.display = 'none';
        ul.current.nextElementSibling.style.display='block';    
    }


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
        if(numOfI == 0 && numOfE == 0){
            return;
        }
        mbtiTypes(mbtiType);
    })    

    return (
        <ul id={id} className={styles.container} ref={ul}>
            <li className={styles.chevron}>
                <div className={styles.prev} onMouseOver={onPreviousMouse} onClick={(e)=>onPreviousBtn(e)}>
                    <i ref={prev} onMouseOver={onPreviousMouse} onClick={(e)=>onPreviousNext(e)} className="fas fa-chevron-left"></i>
                </div>
                <div className={styles.next} onMouseOver={onNextMouse} onClick={(e)=>onNextBtn(e)}>
                    <i ref={next} onMouseOver={onNextMouse} onClick={(e)=>onPreviousNext(e)} className="fas fa-chevron-right"></i>
                </div>
            </li>
            <li className={styles.contents}>
                <div className={styles.qArea}>
                  <div className={styles.q}>{q}</div>
                </div>
                <div className={styles.answer}>
                    <button className={styles.yes} onClick={(e)=>onTotal(e,a[0].type)} >{a[0].answer}</button>
                    <button className={styles.no} onClick={(e)=>onTotal(e,a[1].type)} >{a[1].answer}</button>
                </div>
            </li>
        </ul>
    )
})

export default Question;