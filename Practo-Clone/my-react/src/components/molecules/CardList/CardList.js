import React from 'react';
import styles from "./CardList.module.css"
import Card from '../../atoms/Card/card';

const CardList = () => {
  return (
    <div className={styles.wraper}>

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

    </div>
  )
}

export default CardList