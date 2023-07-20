import React from 'react';
import styles from "./card_2.module.css";

const Cards = ({style,icon,data}) => {
  return (
    <div style={style} className={styles.Cards_wraper}>
      {icon}
        <img src={data.image} alt='specialist'/>
        <p className={styles.text}>{data.concern}</p>
        <button className={styles.btn}>{data.text} </button>
    </div>
  )
}

export default Cards;