import React from 'react';
import styles from "./Card.module.css";
import Avatar from "@mui/material/Avatar"

const DoctorsCard = ({data, carouselStyle}) => {
  
  return (
    <div style={carouselStyle} className={styles.wraper}>
        <Avatar sx={{height:50,width:50}} alt='doctors-image' src={data.image} />
        <div className={styles.text}>
            <h4>{data.name}</h4>
            <p>{data.type}</p>
            <p>{data.exp} years experiences</p>
            <p>{data.consultation} consultation done</p>

        </div>

    </div>
  )
}

export default DoctorsCard;