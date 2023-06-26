import React from 'react';
import styles from "./Home.module.css"
import Navbar from '../../molecules/Navbar/navbar';
import Hero from '../../organism/Hero/hero';
import Symtoms from '../../organism/Consult/symtoms';

const Home = () => {
  return (
    <div className={styles.home_container}>
    <Navbar/>
    <Hero/>
    <Symtoms/>
   
    </div>
  )
}

export default Home;