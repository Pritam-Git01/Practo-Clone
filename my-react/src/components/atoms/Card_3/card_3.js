import React from 'react';
import styles from "./card_3.module.css";


const Card = ({data}) => {
  return (
    <div  className={styles.wraper}>
         <img src={data.image} alt='dentist'/> 
        <h4>{data.doctor}</h4>
        <p>{data.problem}</p> 

    </div>
  )
}

export default Card;