import React from 'react';
import styles from "./Card.module.css";

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Cards = () => {
  return (
    <div  className={styles.Cards_wraper}>
     
        <img src={"https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"} alt='specialist'/>
        <p className={styles.text}>Gynaecology</p>
        <p>₹549</p>
        <button className={styles.btn}>Consult now <KeyboardArrowRightOutlinedIcon className={styles.icon} /> </button> 
    </div>
  )
}

export default Cards;