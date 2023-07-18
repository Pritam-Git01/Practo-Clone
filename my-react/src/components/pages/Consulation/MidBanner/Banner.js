import React from 'react';
import styles from "./Banner.module.css";
import Text from '../../../atoms/ScrollText/Text';

const Banner = () => {
  const text ={
    text_1 :"Still delaying your health concerns ?",
    text_2:"Connect with India's top doctors online",
    text_3:"Consult Now"
  }

  const style = {
    width:"18vw",
    backgroundColor:"rgb(19, 157, 216)",
    height: "3.1rem",
   
    color: "white",
    fontSize: "1.14rem",
    fontWeight: 550,
    border: "none",
    borderRadius: "0.5rem"
  }
  return (
    <div className={styles.wraper}>
        <Text text={text} style={style}/>


    </div>
  )
}

export default Banner