import React from 'react';
import styles from "./scrollbar.module.css"
import Cards from '../../atoms/Card_2/card_2';
import Text from '../../atoms/ScrollText/Text';

const Scrollbar = () => {
  const text = {
    text_1: "Consult top doctors online for any health concern",
    text_2: "Private online consultations with verified doctors in all specialists"
    
  }

 
 
  return (
    <div className={styles.container}>
      <Text text={text}/>
    <div className={styles.scroll_container}>
      
      
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

export default Scrollbar;