import React from 'react'
import Text from '../../../atoms/ScrollText/Text'
// import Card from '../../../atoms/Card_2/card_2';
import styles from "./scrollbar.module.css";
import Cards from './Card';


const Scrollbar = () => {


  const text = {
    text_1: "25+ Specialities",
    text_2: "Consult with top doctors across specialities",
    text_3: "see all specialist"
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

export default Scrollbar