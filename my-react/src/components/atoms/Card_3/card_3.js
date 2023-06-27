import React from 'react';
import styles from "./card_3.module.css";
import img from "../../assets/Images/sp-dentist@2x.jpg"

const Card = () => {
  return (
    <div className={styles.wraper}>
         <img src={img} alt='dentist'/> 
        <h4>Dentist</h4>
        <p>Teething Trouble? Schedule a dental Checkup</p> 

    </div>
  )
}

export default Card;