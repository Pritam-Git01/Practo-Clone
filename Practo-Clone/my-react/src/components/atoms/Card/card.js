import React from 'react';
import styles from  "./card.module.css"

const Card = () => {
  return (
    <div className={styles.container}>
     <div className={styles.img_container}> 
       <img src={"https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"} alt='doctors'/>
       </div>
       <div className={styles.text}>
       <h3>Instant Video Consulation</h3>
        <p>Connect within 60 seconds</p>
       </div>
    </div>
  )
}

export default Card