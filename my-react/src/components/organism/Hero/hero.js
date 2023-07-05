import React from "react";
import styles from "./hero.module.css";
import {SlLocationPin} from "react-icons/sl";
import {AiOutlineSearch} from "react-icons/ai";
import HeroImage from "../../atoms/HeroImage/image";
import CardList from "../../molecules/CardList/CardList";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
      
      <SlLocationPin className={styles.location}/>  <input type="search" className={styles.searchbar}/>
      <AiOutlineSearch className={styles.search_icon}/>  <input type="search" className={styles.searchbar2} placeholder="seacrh, doctors, clinics, hospitals etc."/>
      
        </div>
      <HeroImage />
      <CardList />
    </div>
  );
};

export default Hero;
