import React from 'react';
import styles from "./Home.module.css"
import Navbar from '../../molecules/Navbar/navbar';
import Hero from '../../organism/Hero/hero';
import Symtoms from '../../organism/Consult_Video/symtoms';
import Appointment from '../../organism/Consult_Clinic/appointment';


const Home = () => {
  return (
    <div className={styles.home_container}>
    <Navbar/>
    <Hero/>
    <Symtoms/>
    <Appointment/>
    
   
    </div>
  )
}

export default Home;