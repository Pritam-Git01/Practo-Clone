import React from 'react';
import styles from "./Question.module.css"
import Card from './Card';

const Question = () => {
  return (
    <div className={styles.wraper}>
    <h2>FAQs</h2>
        <div className={styles.card_container}>
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

export default Question