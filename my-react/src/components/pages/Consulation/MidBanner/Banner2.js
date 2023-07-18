import React from "react";
import styles from "./Banner2.module.css";

const Banner2 = () => {
  return (
    <div className={styles.wraper}>
      <div>
        <h2>2,00,000+</h2>
        <p>Happy Users</p>
      </div>
      <div>
        <h2>20000+</h2>
        <p>Verified Doctors</p>
      </div>
      <div>
        <h2>25+ </h2>
        <p>Specialist</p>
      </div>
      <div>
        <h2>
          4.5
          <span style={{fontSize:"24px", fontWeight:"500"}}>
             /
          </span>
          <span>
            
           5
          </span>
        </h2>
        <p>App Rating</p>
      </div>
    </div>
  );
};

export default Banner2;
