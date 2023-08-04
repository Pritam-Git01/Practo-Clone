import React from 'react'
import Card from '../../atoms/Card_4/card_4';
import styles from './blogs.module.css';
import {v4 as uuid} from "uuid"

const Blogs = () => {


  const blogData = [
    {id:uuid(),
       image:"https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910",
       text:"CORONAVIRUS",
       desc:"12 Coronavirus Myths and Facts that you should be aware of",
       name:"Dr. Diana Borgio",
       link:"https://www.practo.com/healthfeed/12-coronavirus-myths-and-facts-that-you-should-be-aware-of-40556/post"
      },
      {id:uuid(),
        image:"https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c",
        text:"VITAMINS AND SUPPLEMENTS",
        desc:"Eating Right to Build Immunity Against Cold and Viral Infection",
        name:"Dr. Diana Borgio",
        link:"https://www.practo.com/healthfeed/eating-right-to-build-immunity-against-cold-and-viral-infections-40908/post"
       },
  ];


  return (
    <div className={styles.container}>
        
        <div className={styles.wraper}>
        <div className={styles.articles_text}>
            <h1>Read top articles from health experts</h1>
            <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
           <a href='https://www.practo.com/healthfeed?utm_source=practo_home' > <button className={styles.btn}>See all Articles</button></a>
        </div>
           {blogData.map((item) => <Card key={item.id} data={item}/>)}
           
        </div>
        
    </div>
  )
}

export default Blogs