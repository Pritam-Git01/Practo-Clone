import React from 'react';
import styles from "./card_2.module.css";

const Cards = ({data,handle}) => {
  return (
    <div  className={styles.Cards_wraper}>
      
        <img src={data.image} alt='specialist'/>
        <p className={styles.text}>{data.concern}</p>
        <button onClick={() => handle(data)} className={styles.btn}>{data.text} </button>
    </div>
  )
}

export default Cards;