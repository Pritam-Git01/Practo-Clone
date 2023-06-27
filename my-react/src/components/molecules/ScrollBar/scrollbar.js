import React from 'react';
import styles from "./scrollbar.module.css"
import Cards from '../../atoms/Card_2/card_2';
import Text from '../../atoms/ScrollText/Text';

const Scrollbar = () => {
  return (
    <div className={styles.container}>
      <Text/>
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