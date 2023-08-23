import React from "react";
import styles from "./Doctors.module.css";
import DoctorsCard from "./Card/Card";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import Loader from "../../../atoms/Loader/Loader";
import Error from "../../../atoms/Error/Error";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://server-practo.onrender.com/doctors"
        );
        setDoctors(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const carouselStyle = {
    transform: `translateX(-${currentIndex * 110}%)`,
  };
  if (error) return <Error message="Error while fetching doctors data" />;
  return (
    <div className={styles.wraper}>
      {loading ? (
        <Loader />
      ) : (
        doctors.map((item) => (
          <DoctorsCard
            carouselStyle={carouselStyle}
            key={item._id}
            data={item}
          />
        ))
      )}

      <button
        style={{ display: `${currentIndex === 0 ? "none" : "block"}` }}
        onClick={prevSlide}
        className={styles.left}
      >
        <AiOutlineLeft />
      </button>
      <button
        style={{ display: `${currentIndex === 4 ? "none" : "block"}` }}
        onClick={nextSlide}
        className={styles.right}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Doctors;
