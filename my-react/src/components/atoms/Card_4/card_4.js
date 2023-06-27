import React from 'react';
import styles from "./card_4.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
        <img src={'https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910'} alt='blogs'/>
        <p className={styles.text1}>CORONAVIRUS</p>
        <h4 className={styles.heading}>12 Coronavirus Myths and Facts that you should be aware of</h4>
        <p>Dr. Diana Borgio</p>
        </div>
  )
}

export default Card;