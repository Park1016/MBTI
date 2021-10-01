import React from 'react';
import styles from './header.module.css';

const Header = (({name}) => {

    return (
        <ul className={styles.header}>
            <li>M</li>
            <li>B</li>
            <li>T</li>
            <li>I</li>
            {/* <div className={styles.header}>{name}님의 MBTI</div> */}
        </ul>
    )
})


export default React.memo(Header);