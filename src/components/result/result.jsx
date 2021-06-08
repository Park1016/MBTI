import React, { memo, useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './result.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory, useLocation } from 'react-router';

const Result = memo((props) => {
    const history = useHistory();
    const location = useLocation();
    let type = location.state.resultType;
    let arr = location.state.resultArr;
    let resultText = location.state.resultText;

    const [barData, setBarData] = useState({
        labels: ['I', 'E', 'N', 'S', 'T', 'F', 'J', 'P'],
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

    return (
            <section className={styles.container}>
            {/* <Header /> */}
            <div className={styles.content}>
                {/* <p className={styles.p1}>{location.state.name} 님의 성격유형 검사</p> */}
                <div className={styles.titleTotal}>
                    <span className={styles.p2}>{location.state.name} 님은</span>
                    <span className={styles.resultType}>
                        {location.state.resultType ? location.state.resultType : '알 수 없는 유형'}
                    </span>
                    <span className={styles.p2}>입니다.</span>
                </div>
                <div className={styles.bar}>
                <Bar
                    data={barData}
                    width={530}
                    height={200}
                    options={barOptions.options}
                    className={styles.realBar}
                />
                </div>
                <div className={styles.textArea}>
                    <div className={styles.left}>
                        <i className="fas fa-quote-left"></i>
                    </div>
                    <div className={styles.right}>
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <p className={styles.text}>{resultText ? resultText : '항목을 다 체크하지 않으셨군요!'}</p>
                </div>
                <div className={styles.btnArea}>
                    <button className={styles.btn} onClick={()=>{
                        onReset();
                        history.push('../login/login');
                    }}>다시하기</button>
                </div>
            </div>
            {/* <Footer /> */}
        </section>
    )
    })

export default Result;