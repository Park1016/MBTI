import React, { memo, useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './result.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory, useLocation } from 'react-router';

const Result = memo(({results}) => {
    const history = useHistory();
    const location = useLocation();
    const [resultText, setResultText] = useState('');
    let type = location.state.resultType;
    let arr = location.state.resultArr;

    // console.log(location.state.resultType);
    // console.log(arr);

    useEffect(() =>{
        results.map((result)=>{
            if(result.types == location.state.resultType){
                setResultText(result.desc);
            }
        })
    },[])

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
            <Header />
            <div className={styles.content}>
                {/* <p className={styles.p1}>{location.state.name} 님의 성격유형 검사</p> */}
                <p className={styles.p2}>{location.state.name} 님은 {location.state.resultType} 입니다.</p>
                <div className={styles.bar}>
                <Bar
                    data={barData}
                    // style={width='50vw', height='20vh'}
                    width={530}
                    height={200}
                    options={barOptions.options}
                />
                </div>
                <div className={styles.text}>
                    <div className={styles.left}>
                        <i className="fas fa-quote-left"></i>
                    </div>
                    <div className={styles.right}>
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <p>{resultText}</p>
                </div>
                <div className={styles.btnArea}>
                    <button className={styles.btn} onClick={()=>{
                        onReset();
                        history.push('../login/login');
                    }}>다시하기</button>
                </div>
            </div>
            <Footer />
        </section>
    )
    })

export default Result;