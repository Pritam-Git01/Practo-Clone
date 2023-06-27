import React from 'react';
import Card from '../../atoms/Card_3/card_3';
import styles from "./ScrollCards.module.css"
import Text from '../../atoms/ScrollText/Text';

const ScrollCards = () => {
  return (
    <div className={styles.wraper}>
        <Text/>
    <div className={styles.container}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        </div>
  )
}

export default ScrollCards;