import React, { memo, useEffect, useState, useRef } from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './result.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory, useLocation } from 'react-router';

const Result = memo((props) => {

    const section = useRef();

    let [l, setL] = useState(false);
    let [m, setM] = useState(false);
    let [s, setS] = useState(false);

    const history = useHistory();
    const location = useLocation();
    let type = location.state.resultType;
    let arr = location.state.resultArr;
    let resultText = location.state.resultText;

    const Lstyle = {
        width: "530px"
    }

    const Mstyle = {
        width: "400px"
    }

    const Sstyle = {
        width: "350px"
    }

    const onResize = () => {
        if(section.current){
            if(section.current.clientWidth < 650.1){
                if(m){
                    return;
                }
                setL(false);
                setS(false);
                setM(true);
            } 
            if(section.current.clientWidth < 500.1) {
                if(s){
                    return;
                }
                setL(false);
                setM(false);
                setS(true);
            }
            if(section.current.clientWidth < 100){
                return;
            }
            if(section.current.clientWidth >= 650.1){
                if(l){
                    return;
                }
                setL(true);
                setM(false);
                setS(false);
            }
        }
    }

    const [barData, setBarData] = useState({
        labels: ['내향 I ', '외향 E ', '직관 N ', '감각 S ', '사고 T ', '감정 F ', '판단 J ', '인식 P '],
        datasets: [
            {
                label: 'mbti 결과',
                data: arr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 3
            }
        ]
    });
    //set options
    const [barOptions, setBarOptions] = useState({
        options: {
            responsive: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: false
                        }
                    }
                ]
            },
            title: {
                display: true,
                text: 'Data Orgranized In Bars',
                fontSize: 25
            },
            legend: {
                display: true,
                position: 'top'
            }
        }
    });

    const onReset = () => {
        type = '';
        arr = [];
    }

    useEffect(()=>{
        onResize();
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return (
        <section ref={section} className={styles.container}>
            {/* <Header /> */}
            <ul className={styles.content}>
                {/* <p className={styles.p1}>{location.state.name} 님의 성격유형 검사</p> */}
                <li className={styles.titleTotal}>
                    <span className={styles.p2}>{location.state.name} 님은</span>
                    <span className={styles.resultType}>
                        {location.state.resultType ? location.state.resultType : '알 수 없는 유형'}
                    </span>
                    <span className={styles.p2}>입니다.</span>
                </li>
                <li className={styles.bar}>
                    <div>
                        <Bar
                            data={barData}
                            width={530}
                            height={200}
                            options={barOptions.options}
                            className={styles.realBar}
                            style={m ? Mstyle : (s ? Sstyle : Lstyle) }
                        />
                    </div>
                </li>
                <li className={styles.textArea}>
                    <div className={styles.left}>
                        <i className="fas fa-quote-left"></i>
                    </div>
                    <div className={styles.right}>
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <p className={styles.text}>{resultText ? resultText : '항목을 다 체크하지 않으셨군요!'}</p>
                </li>
                <li className={styles.btnArea}>
                    <button className={styles.btn} onClick={()=>{
                        onReset();
                        history.push('../login/login');
                    }}>다시하기</button>
                </li>
            </ul>
            {/* <Footer /> */}
        </section>
    )
    })

export default Result;