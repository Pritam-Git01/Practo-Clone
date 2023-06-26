import React from 'react';
import styles from "./scrollbar.module.css"
import Cards from '../../atoms/ScrollCards/card';

const Scroolbar = () => {
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

export default Scroolbar