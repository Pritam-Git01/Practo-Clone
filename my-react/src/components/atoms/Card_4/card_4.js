import React from 'react';
import styles from "./card_4.module.css";

const Card = ({data}) => {
  return (
    <a href={data.link}  className={styles.container}>
     
        <img src={data.image} alt='blogs'/>
        <p className={styles.text1}>{data.text}</p>
        <h4 className={styles.heading}>{data.text}</h4>
        <p>{data.name}</p>
      
        </a>
  )
}

export default Card;