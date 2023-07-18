import React from 'react'

import styles from "./consultation.module.css"
import Hero from './Hero/hero'
import Scrollbar from "./Scrollbar/scrollbar"
import ScrollCards from './ScrollCards/scrollCard'
import Doctors from './OurDoctors/Doctors';
import Banner from './MidBanner/Banner'
import Banner2 from './MidBanner/Banner2'



const Consultation = () => {

  
  return (
    <div className={styles.wraper}>
        
<Hero/>
<Scrollbar />
<ScrollCards/>
<h1 className={styles.text}>Our Doctors</h1>
<Doctors/>
<Banner2/>
<Banner/>


    </div>
  )
}

export default Consultation