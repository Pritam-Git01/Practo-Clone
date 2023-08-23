import React from "react";
import Card from "../../atoms/Card_3/card_3";
import styles from "./ScrollCards.module.css";
import Text from "../../atoms/ScrollText/Text";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../../atoms/Loader/Loader";
import Error from "../../atoms/Error/Error";
import { useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";


const ScrollCards = () => {
  const navigate = useNavigate();
  const [appointData, setAppointData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = {
    text_1: "Book an appointment for an in-clinic consultation",
    text_2: "Find experienced doctors across all specialties",
  };
  const style = {
    display: "none",
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % appointData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + appointData.length) % appointData.length
    );
  };
  const carousel = {
     transform: `translateX(-${currentIndex * 100}%)`,
     };
  useEffect(() => {
    const appointData = async () => {
      try {
        const { data } = await axios.get(
          "https://server-practo.onrender.com/adata"
        );
        setAppointData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    appointData();
  }, []);

  console.log(currentIndex)
  if (error)
    return <Error message={"Error while fetching clinic appointment Data"} />;
  return (
    <div className={styles.wraper}>
      <Text text={text} style={style} />
      
      <div className={styles.container}>
     
        {loading ? (
          <Loader />
        ) : (
          appointData.map((item) => (
            <Card carousel={carousel} key={item._id} data={item} />
          ))
        )}
        <button style={{display: `${currentIndex === 0? "none":"block"}`}} onClick={prevSlide} className={styles.left}><AiOutlineLeft/></button>
        <button style={{display: `${currentIndex === 5? "none":"block"}`}} onClick={nextSlide}  className={styles.right}><AiOutlineRight/></button>
       
      </div>
     
    </div>
  );
};

export default ScrollCards;
