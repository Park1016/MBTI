import React from 'react';
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


const Question = ({questions}) => {
    const qArray = Object.values(questions.q);
    const q = qArray.join("");
    const a = Object.values(questions.a);

    const onAnswer = (e, type) => {
        const target = e.currentTarget;
        
        switch (type[0]) {
            case 'I' :
                numOfI++;
                IE.I = numOfI;               
                console.log(IE);
                break;
            case 'E' :
                numOfE++;
                IE.E = numOfE;
                console.log(IE);
                break;
            case 'N' :
                numOfN++;
                NS.N = numOfN;               
                console.log(NS);
                break;
            case 'S' :
                numOfS++;
                NS.S = numOfS;
                console.log(NS);
                break;
            case 'T' :
                numOfI++;
                TF.T = numOfT;               
                console.log(TF);
                break;
            case 'F' :
                numOfE++;
                TF.F = numOfF;
                console.log(TF);
                break;
            case 'J' :
                numOfJ++;
                JP.J = numOfJ;               
                console.log(JP);
                break;
            case 'P' :
                numOfP++;
                JP.P = numOfP;
                console.log(JP);
                break;
            default : console.log(type[0]);
        }
    }

    const onContainer =(e) => {
        // console.log(e.currentTarget);
    }

    return (
        <ul onClick={(e)=>{onContainer(e)}}>
            <li>{q}</li>
            <div>
                <button onClick={(e)=>onAnswer(e,a[0].type)}>{a[0].answer}</button>
                <button onClick={(e)=>onAnswer(e,a[1].type)}>{a[1].answer}</button>
            </div>
        </ul>
    )
}

export default Question;