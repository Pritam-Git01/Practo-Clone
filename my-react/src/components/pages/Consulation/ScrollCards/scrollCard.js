import React from "react";
import Text from "../../../atoms/ScrollText/Text";

import styles from "./scrollCard.module.css";
import Cards from "./Card";
import Loader from "../../../atoms/Loader/Loader";
import Error from "../../../atoms/Error/Error";
import axios from "axios";
import { useState, useEffect } from "react";

const ScrollCards = () => {
  const [symptomsData, setSymptomsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        const { data } = await axios.get("http://localhost:5000/symptoms");
        setSymptomsData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (error) return <Error message="Error while fetching Symptoms Data" />;
  return (
    <div className={styles.wraper}>
      <Text text={text} style={style} />
      <div className={styles.cards}>
        {loading ? (
          <Loader />
        ) : (
          symptomsData.map((item) => <Cards data={item} />)
        )}
      </div>
    </div>
  );
};

export default ScrollCards;
