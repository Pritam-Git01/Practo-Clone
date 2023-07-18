import React from "react";
import styles from "./Text.module.css";


const Text = ({ text, style }) => {
  
  const { text_1, text_2, text_3 } = text;
  return (
    <div className={styles.container}>
      <div className={styles.text_wraper}>
        <h2>{text_1}</h2>
        <p>{text_2}</p>
      </div>
      <div className={styles.btn}>
        <button style={style} className={styles.spcl_btn} >{text_3? text_3:"View All Specialisties"} </button> 
        
      </div>
    </div>
  );
};

export default Text;
