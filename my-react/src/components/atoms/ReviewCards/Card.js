import React from "react";
import styles from "./Card.module.css";
// import {AiOutlineLeft} from "react-icons/ai";
// import {AiOutlineRight} from "react-icons/ai";

const Card = ({data, slideStyle}) => {
  return (
    <div  style={slideStyle} className={styles.card_container}>
      <p>
        {data.text}
      </p>

    </div>
  );
};

export default Card;
