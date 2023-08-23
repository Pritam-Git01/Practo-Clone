import React from "react";
import Text from "../../../atoms/ScrollText/Text";
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import styles from "./scrollCard.module.css";
import Cards from "./Card";
import Loader from "../../../atoms/Loader/Loader";
import Error from "../../../atoms/Error/Error";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollCards = () => {
  const [symptomsData, setSymptomsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const[currentIndex,setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  const text = {
    text_1: "Common Health Concerns",
    text_2: "Consult a doctor online for any health issue",
    text_3: "see All Symptoms",
  };

  const style = {
    color: "#2d2d32",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://server-practo.onrender.com/symptoms");
        setSymptomsData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  function handleClick(){
    navigate("/consulting")
  }

const handleConsulting = async (e) => {

  const {data} = await axios.get(`https://server-practo.onrender.com/consult-2/${e.concern}`)
  const details = {
    name:data.doctor,
    price:data.price
  }
  localStorage.setItem("doctorName", JSON.stringify(details))
  // localStorage.setItem("fee", JSON.stringify(data.price))
  // const check = JSON.parse(localStorage.getItem("doctorName"))
  // console.log("i am from local storage", check.price)
  navigate("/consulting-2")
}

const prevSlide = () => {
  setCurrentIndex((prev) => (prev - 1 + symptomsData.length) % symptomsData.length)
}

const nextSlide  = () => {
  setCurrentIndex((prev) => (prev + 1) % symptomsData.length)
}

const slide = {
  transform: `translateX(-${currentIndex * 105}%)`
}

  if (error) return <Error message="Error while fetching Symptoms Data" />;
  return (
    <div className={styles.wraper}>
      <Text text={text} style={style} navigating={handleClick}/>
      <div  className={styles.cards}>
        {loading ? (
          <Loader />
        ) : (
          symptomsData.map((item) => <Cards slideStyle={slide} handle={handleConsulting} key={item._id} data={item} />)
        )}
          <button
        style={{ display: `${currentIndex === 0 ? "none" : "block"}` }}
        onClick={prevSlide}
        className={styles.left}
      >
        <AiOutlineLeft />
      </button>
      <button
        style={{ display: `${currentIndex === 3 ? "none" : "block"}` }}
        onClick={nextSlide}
        className={styles.right}
      >
        <AiOutlineRight />
      </button>
      </div>
    </div>
  );
};

export default ScrollCards;
