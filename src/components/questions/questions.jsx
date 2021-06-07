import React, {useRef, useState, memo} from 'react';
import { useHistory, useLocation } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Question from './question/question';
import ProgressBar from './progressBar/progressBar';
import styles from './questions.module.css';
// import { v4 as uuid } from 'uuid';

let resultType = '';
let resultArr = [];


const Questions = memo(({questions}) => {
    
    const history = useHistory();
    const location = useLocation();
    
    const [IE, setIE] = useState('');
    const [NS, setNS] = useState('');
    const [TF, setTF] = useState('');
    const [JP, setJP] = useState('');

    const [i, setI] = useState(0);
    const [e, setE] = useState(0);
    const [n, setN] = useState(0);
    const [s, setS] = useState(0);
    const [t, setT] = useState(0); 
    const [f, setF] = useState(0); 
    const [j, setJ] = useState(0); 
    const [p, setP] = useState(0);
    const [bar, setBar] = useState(0);

    const btn = useRef();

    const progressBar = (value) => {
        setBar(value);
    }

    const onMbtiTypes = (type) => {
        if(type.I){
            setI(type.I);
        }
        if(type.E){
            setE(type.E);
        }
        if(type.N){
            setN(type.N);
        }
        if(type.S){
            setS(type.S);
        }
        if(type.T){
            setT(type.T);
        }
        if(type.F){
            setF(type.F);
        }
        if(type.J){
            setJ(type.J);
        }
        if(type.P){
            setP(type.P);
        }

        if(i > e){
            setIE('I');             
        }
        if(i < e){
            setIE('E');
        }
        if(n > s){
            setNS('N');          
        }
        if(n < s){
            setNS('S');          
        }
        if(t > f){
            setTF('T');      
        }
        if(t < f){
            setTF('F');          
        }
        if(p > j){
            setJP('P');       
        }
        if(p < j){
            setJP('J');       
        }    
        onResult();
    }

    const onResult = () => {   
        let concat1 = IE.concat(NS);
        let concat2 = concat1.concat(TF);
        resultType = concat2.concat(JP);
        resultArr = [i,e,n,s,t,f,j,p];     
    }

    const onCheck = () => {
        if(bar !== 80){
            let cf = window.confirm("아직 체크하지 않은 항목이 있습니다. \n결과보기로 넘어가시겠습니까?");
            if(cf == false){
                return;
            }
        }
        history.push({
            pathname: '../result/result',
            state: {
                name: location.state.name,
                resultType: resultType,
                resultArr: resultArr
            }
        });
    }


    // let getData = (resultTypeParam, resultArrParam) => {
    //     if(resultTypeParam === undefined){
    //         return;
    //     }
    //     else{
    //         let resultType = resultTypeParam;
    //         let resultArr = resultArrParam;
    //         console.log(resultType, resultArr);
    //         return {resultTypeKey:resultType, resultArrKey:resultArr};
    //     }
    // }

    // async function getData(type, obj) {
    //     if(type===undefined){
    //         return;
    //     }
    //     resultType1 = await type;
    //     resultArr1 = await obj;
    // }


    // console.log(resultArr);
    // console.log(resultType);
    
    return (
        <section className={styles.container}>
            <Header />
            <section className={styles.contents}>    
                <section >
                    <ProgressBar progressBar={bar}/>
                </section>
                <section
                    className={styles.allQuestions} 
                    > 
                    {questions.map((question, index) =>
                    <Question
                        id={index}
                        // key={uuid()}
                        key={index}
                        questions={question}
                        mbtiTypes={onMbtiTypes}   
                        progressBar={progressBar}
                        btn={btn.current}
                    />)}
                </section>
                <div className={styles.btnArea}>
                    <button ref={btn} className={styles.btn} onClick={()=>{
                        onCheck();
                    }}>결과보기</button>
                </div>
            </section>
            <Footer />
        </section>
    )
})

export default Questions;