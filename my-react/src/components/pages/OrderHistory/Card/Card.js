import React from "react";
import styles from "./Card.module.css";

const Card = ({ data, styling, handle }) => {
 
  return (
    <p onClick={() => handle(data.id)} className={`${styling === data.id?styles.textClicked:styles.text}`}>
      {data.text}
    </p>
  );
};

export default Card;
