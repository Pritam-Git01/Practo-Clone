import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import styles from "./Carosel.module.css";
import { useState } from "react";

const Carousel = ({ children: slides }) => {
    const[curr,setCurr] = useState(0);
    const pre = () => {
        console.log(curr)
setCurr((curr) => (curr === 0? slides.length - 1: curr - 1)) 

    }
    const next = () => {
        setCurr((curr) => (curr === slides.length -1? 0: curr +1)) 
        console.log("next",curr)
            }
  return (
    <>
 
          <AiOutlineLeft onClick={pre} className={styles.left} />
          <AiOutlineRight onClick={next}  className={styles.right} />
          

      <div style={{transform:`translateX(-${curr * 100}%)`, display:"flex" }} className={styles.wraper}>
        

        {slides}

      </div>
    </>
  );
};

export default Carousel;
