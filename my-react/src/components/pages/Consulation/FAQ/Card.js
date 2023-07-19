import React from "react";
import styles from "./Card.module.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Card = () => {
  return (
   
      <div className={styles.container}>
        <h4 style={{fontWeight:"580"}}>
         
          <ArrowRightIcon sx={{position:"relative", top:"0.5rem", fontSize:"2.2rem"}}/>
          What is online doctor consultation?
        </h4>
        <p style={{ padding:"0.5rem 2.6rem 1rem 2.2rem", fontSize:"14px"}}>
          Online doctor consultation or online medical consultation is a method
          to connect patients and doctors virtually. It is a convenient and easy
          way to get online doctor advice using doctor apps or telemedicine apps
          or platforms, and the internet.
        </p>
 
    </div>
  );
};

export default Card;
