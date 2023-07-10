import React from 'react'

import styles from "./consultation.module.css"
import Hero from './Hero/hero'
import Scrollbar from "./Scrollbar/scrollbar"
import ScrollCards from './ScrollCards/scrollCard'


const Consultation = () => {

  
  return (
    <div className={styles.wraper}>
        
<Hero/>
<Scrollbar />
<ScrollCards/>


    </div>
  )
}

export default Consultation