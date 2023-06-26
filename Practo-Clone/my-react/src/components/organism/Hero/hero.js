import React from 'react';
import styles from "./hero.module.css";

import HeroImage from '../../atoms/Logo/HeroImage/image'
import CardList from '../../molecules/CardList/CardList';

const Hero = () => {
    
  return (
    <div className={styles.container}>
        <div className={styles.search_inputs}> <input type='search' className={styles.searchbar} />
        <input type='search' className={styles.searchbar2} /></div>
       
        <HeroImage/>
        <CardList/>
    </div>
  )
}

export default Hero