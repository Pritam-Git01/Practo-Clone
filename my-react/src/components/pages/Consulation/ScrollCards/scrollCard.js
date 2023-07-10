import React from 'react'
import Text from '../../../atoms/ScrollText/Text'
// import Card from '../../../atoms/Card_2/card_2';
import styles from "./scrollCard.module.css";
import Cards from './Card';


const ScrollCards = () => {


  const text = {
    text_1: "Common Health Concerns",
    text_2: "Consult a doctor online for any health issue",
    text_3: "see All Symptoms"
  }


  
  const style = {
    color:"#2d2d32",


  }
  return (
    <div className={styles.wraper}>
        <Text text={text} style={style} />
        <div className={styles.cards}>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
       
        </div>
    </div>
  )
}

export default ScrollCards