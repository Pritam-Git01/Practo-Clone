import React from 'react';
import styles from  "./card.module.css"

const Card = ({data}) => {
  return (
    <div  className={styles.container}>
     <div className={styles.img_container}> 
       <img src={data.image} alt='doctors'/>
       </div>
       <div className={styles.text}>
       <h2>{data.feature}</h2>
        <p>{data.desc}</p>
       </div>
    </div>
  )
}

export default Card