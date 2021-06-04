import React, { useEffect, useRef, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './result.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory, useLocation } from 'react-router';

const Result = (props) => {
    const history = useHistory();
    const location = useLocation();
    const arr = location.state.resultArr;

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
    // set options
    // const [barOptions, setBarOptions] = useState({
    //     options: {
    //         scales: {
    //             yAxes: [
    //                 {
    //                     ticks: {
    //                         beginAtZero: true
    //                     }
    //                 }
    //             ]
    //         },
    //         title: {
    //             display: true,
    //             text: 'Data Orgranized In Bars',
    //             fontSize: 25
    //         },
    //         legend: {
    //             display: true,
    //             position: 'top'
    //         }
    //     }
    // });
    
    return (
            <section className={styles.section}>
            <Header />
            <h1>{location.state.name}님의 성격유형 검사</h1>
            <h1>{location.state.name}님은 {location.state.resultType}입니다.</h1>
            <div className="BarExample">
            <Bar
                data={barData}
                // options={barOptions.options}
            />
            </div>
            <button onClick={()=>{
                history.push('../login/login');
            }}>result</button>
            <Footer />
        </section>
    )
    }

export default Result;