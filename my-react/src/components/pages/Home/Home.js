import React from 'react';
import styles from "./Home.module.css"

import Hero from '../../organism/Hero/hero';
import Scrollbar from '../../molecules/ScrollBar/scrollbar';
import ScrollCards from '../../molecules/ScrollCards/ScrollCards';
import Blogs from '../../molecules/Blogs/blogs';
import Review from '../../molecules/Reviews/review';
import Navbar from '../../molecules/Navbar/navbar';
import Footer from '../../molecules/Footer/footer';




const Home = () => {
  return (
    <div className={styles.home_container}>
    <Navbar/>  
   <Hero/>
    <Scrollbar/>
    <ScrollCards/>
    <Blogs/>
    <Review/> 
   <Footer/>
    </div>
  )
}

export default Home;