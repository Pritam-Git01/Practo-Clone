import React from 'react';
import styles from "./Card.module.css";

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Card = ({data,handle, slideStyle}) => {
  return (
    <div style={slideStyle}   className={styles.wraper}>
         <img src={data.image} alt='dentist'/> 
        <p>{data.concern}</p>
        <p>₹{data.price}</p>
        <button
         onClick={() => handle(data)} className={styles.btn}>{data.text} <KeyboardArrowRightOutlinedIcon className={styles.icon} /> </button> 

    </div>
  )
}

export default Card;