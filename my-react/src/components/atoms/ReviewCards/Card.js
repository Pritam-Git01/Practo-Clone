import React from "react";
import styles from "./Card.module.css";
// import {AiOutlineLeft} from "react-icons/ai";
// import {AiOutlineRight} from "react-icons/ai";

const Card = ({data}) => {
  return (
    <div className={styles.container}>
      {/* <AiOutlineLeft className={styles.left}/> */}
      <p>
        {data.text}
      </p>
      {/* <AiOutlineRight className={styles.right}/> */}
      <span className={styles.indicators}>
        <button key={data.id}></button>
      </span>
    </div>
  );
};

export default Card;
