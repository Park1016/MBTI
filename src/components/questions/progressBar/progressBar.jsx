import React, { useEffect, useRef } from 'react';
import styles from './progressBar.module.css'

const ProgressBar = (({progressBar}) => {
    const bar = useRef();
    const onBar = () => {
        bar.current.style.width = `calc(${progressBar}*1.25%)`;
    }
    useEffect(()=>{
        onBar();
    })
    return (
        <section className={styles.container}>
            <div className={styles.bar}>
                <div className={styles.fill} ref={bar}></div>
            </div>
            <p className={styles.text}>{`${progressBar}/80`}</p>
        </section>
    )
})

export default React.memo(ProgressBar);