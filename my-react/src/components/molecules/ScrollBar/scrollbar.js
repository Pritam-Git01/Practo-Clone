import React from 'react';
import styles from "./scrollbar.module.css"
import Cards from '../../atoms/Card_2/card_2';

const Scrollbar = () => {
  return (
    <div className={styles.scroll_container}>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>

    </div>
  )
}

export default Scrollbar;