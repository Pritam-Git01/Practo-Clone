import React from 'react';
import styles from "./Card.module.css";

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Cards = ({data,handle}) => {
  return (
    <div  className={styles.Cards_wraper}>
     
        <img src={data.image} alt='specialist'/>
        <p className={styles.text}>{data.specialist}</p>
        <p>₹{data.price}</p>
        <button onClick={() => handle(data)} className={styles.btn}>{data.text} <KeyboardArrowRightOutlinedIcon className={styles.icon} /> </button> 
    </div>
  )
}

export default Cards;