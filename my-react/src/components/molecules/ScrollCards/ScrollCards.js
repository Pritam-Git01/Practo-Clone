import React from 'react';
import Card from '../../atoms/Card_3/card_3';
import styles from "./ScrollCards.module.css"
import Text from '../../atoms/ScrollText/Text';

const ScrollCards = () => {
  const text = {
    text_1: "Book an appointment for an in-clinic consultation",
    text_2: "Find experienced doctors across all specialties"
    
  }
  const style = {
    display: "none"
  };
  return (
    <div className={styles.wraper}>
        <Text text={text} style={style}/>
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