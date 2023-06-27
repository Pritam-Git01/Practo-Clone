import React from "react";
import styles from "./review.module.css";
import Card from "../../atoms/ReviewCards/Card";
import {AiOutlineLeft} from "react-icons/ai";
import {AiOutlineRight} from "react-icons/ai";


const Review = () => {
  return (
    <div className={styles.wraper}>
      
      <AiOutlineLeft className={styles.leftIcons}/>
      <AiOutlineRight className={styles.rightIcons}/>
      <h1 >What our users have to say</h1>
      
     
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
        
      </div>
    </div>
  );
};

export default Review;
