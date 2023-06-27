import React from 'react';
import styles from "./Home.module.css"
import Navbar from '../../molecules/Navbar/navbar';
import Hero from '../../organism/Hero/hero';
import Scrollbar from '../../molecules/ScrollBar/scrollbar';
import ScrollCards from '../../molecules/ScrollCards/ScrollCards';
import Blogs from '../../molecules/Blogs/blogs';


const Home = () => {
  return (
    <div className={styles.home_container}>
    <Navbar/>
    <Hero/>
    <Scrollbar/>
    <ScrollCards/>
    <Blogs/>
   
    </div>
  )
}

export default Home;