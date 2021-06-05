import React, { useEffect, useRef } from 'react';
import styles from './progressBar.module.css'

const ProgressBar = ({progressBar}) => {
    console.log(progressBar);
    const bar = useRef();
    const onBar = () => {
        bar.current.style.width = `calc(${progressBar}*1%)`;
    }
    useEffect(()=>{
        onBar();
    })
    return (
        <>
        <div className={styles.bar}>
            <div className={styles.fill} ref={bar}></div>
        </div>
        <p className={styles.text}>{`${progressBar}/80`}</p>
        </>
    )
}

export default ProgressBar;