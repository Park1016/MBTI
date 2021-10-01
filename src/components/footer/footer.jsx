import React from 'react';
import styles from './footer.module.css';

const Footer = ((props) => {
    return <div className={styles.text}>&copy;2021 PHJ all rights all deserved</div>
})

export default React.memo(Footer);