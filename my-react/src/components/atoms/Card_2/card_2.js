import React from 'react';
import styles from "./card_2.module.css";

const Cards = () => {
  return (
    <div className={styles.Cards_wraper}>
        <img src={"https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"} alt='specialist'/>
        <p className={styles.text}>Cold,cough or fever</p>
        <button className={styles.btn}>consult now</button>
    </div>
  )
}

export default Cards;