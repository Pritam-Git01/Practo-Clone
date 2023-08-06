import React from "react";
import Text from "../../../atoms/ScrollText/Text";

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



  if (error) return <Error message="Error while fetching Symptoms Data" />;
  return (
    <div className={styles.wraper}>
      <Text text={text} style={style} navigating={handleClick}/>
      <div  className={styles.cards}>
        {loading ? (
          <Loader />
        ) : (
          symptomsData.map((item) => <Cards handle={handleConsulting} key={item.id} data={item} />)
        )}
      </div>
    </div>
  );
};

export default ScrollCards;
