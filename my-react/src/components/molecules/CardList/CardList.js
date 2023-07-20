import React from "react";
import styles from "./CardList.module.css";
import Card from "../../atoms/Card/card";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../atoms/Loader/Loader";
import Error from "../../atoms/Error/Error";

const CardList = () => {
  const [featureData, setFeatureData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/fdata");
        setFeatureData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);
  if (error) return <Error message={"Error while fetching feature Data"} />;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.wraper}>
          {featureData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default CardList;
