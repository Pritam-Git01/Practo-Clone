import React from 'react';
import styles from "./Card.module.css";

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Cards = ({data}) => {
  return (
    <div  className={styles.Cards_wraper}>
     
        <img src={data.image} alt='specialist'/>
        <p className={styles.text}>{data.specialist}</p>
        <p>₹{data.price}</p>
        <button className={styles.btn}>{data.text} <KeyboardArrowRightOutlinedIcon className={styles.icon} /> </button> 
    </div>
  )
}

export default Cards;