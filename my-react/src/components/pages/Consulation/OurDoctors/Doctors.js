import React from "react";
import styles from "./Doctors.module.css";
import DoctorsCard from "./Card/Card";

const Doctors = () => {
  return (
  
      <div className={styles.wraper}>
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
      </div>

  );
};

export default Doctors;
