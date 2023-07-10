import React from 'react';
import styles from "./Card.module.css";
import img from "../../../assets/Images/sp-dentist@2x.jpg"
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Card = () => {
  return (
    <div className={styles.wraper}>
         <img src={img} alt='dentist'/> 
        <p>Cough & Cold?</p>
        <p>₹549</p>
        <button className={styles.btn}>Consult now <KeyboardArrowRightOutlinedIcon className={styles.icon} /> </button> 

    </div>
  )
}

export default Card;