import React from 'react';
import styles from "./Card.module.css";
import Avatar from "@mui/material/Avatar"

const DoctorsCard = () => {
  return (
    <div className={styles.wraper}>
        <Avatar sx={{height:50,width:50}} alt="Cindy Baker" src="https://www.istockphoto.com/photo/never-fear-the-doctor-is-here-gm507954725-45292692" />
        <div className={styles.text}>
            <h4>Dr.Shivangi Mathon</h4>
            <p>Dermatologist</p>
            <p>8 years experiences</p>
            <p>16003 consultation done</p>

        </div>

    </div>
  )
}

export default DoctorsCard;