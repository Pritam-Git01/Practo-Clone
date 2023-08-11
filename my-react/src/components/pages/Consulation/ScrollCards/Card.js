import React from 'react';
import styles from "./Card.module.css";

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Card = ({data,handle}) => {
  return (
    <div key={data.id} onClick={() => handle(data)} className={styles.wraper}>
         <img src={data.image} alt='dentist'/> 
        <p>{data.concern}</p>
        <p>₹{data.price}</p>
        <button className={styles.btn}>{data.text} <KeyboardArrowRightOutlinedIcon className={styles.icon} /> </button> 

    </div>
  )
}

export default Card;