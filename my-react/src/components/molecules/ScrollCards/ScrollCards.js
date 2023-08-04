import React from "react";
import Card from "../../atoms/Card_3/card_3";
import styles from "./ScrollCards.module.css";
import Text from "../../atoms/ScrollText/Text";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../../atoms/Loader/Loader";
import Error from "../../atoms/Error/Error";
import { useNavigate } from "react-router-dom";



const ScrollCards = () => {
  const navigate = useNavigate()
  const [appointData, setAppointData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const text = {
    text_1: "Book an appointment for an in-clinic consultation",
    text_2: "Find experienced doctors across all specialties",
  };
  const style = {
    display: "none",
  };
  useEffect(() => {
    const appointData = async () => {
      try {
        const { data } = await axios.get("https://server-practo.onrender.com/adata");
        setAppointData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    appointData();
  }, []);

  if (error)
    return <Error message={"Error while fetching clinic appointment Data"} />;
  return (
    <div className={styles.wraper}>
      <Text text={text} style={style} />
      <div className={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          appointData.map((item) =>  <Card   key={item.id} data={item} />)
        )}
      </div>
    </div>
  );
};

export default ScrollCards;
