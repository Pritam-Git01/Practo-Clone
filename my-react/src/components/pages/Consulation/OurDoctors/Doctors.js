import React from "react";
import styles from "./Doctors.module.css";
import DoctorsCard from "./Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../../atoms/Loader/Loader";
import Error from "../../../atoms/Error/Error";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/doctors");
        setDoctors(data);
        setLoading(false);
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    };
    fetchData()
  });

  if (error) return <Error message="Error while fetching doctors data" />;
  return <div className={styles.wraper}>
    {loading? (<Loader/>):(
      doctors.map((item) => <DoctorsCard data={item}/>)
    )}
  </div>;
};

export default Doctors;
