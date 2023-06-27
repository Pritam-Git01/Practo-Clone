import React from 'react'
import Card from '../../atoms/Card_4/card_4';
import styles from './blogs.module.css'

const Blogs = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.wraper}>
        <div className={styles.articles_text}>
            <h1>Read top articles from health experts</h1>
            <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
            <button className={styles.btn}>See all Articles</button>
        </div>
            <Card/>
            <Card/>
        </div>
        
    </div>
  )
}

export default Blogs