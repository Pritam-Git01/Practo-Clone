import React from "react";
import styles from "./hero.module.css";

import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wraper}>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <h1 >
            Skip the travel! <br/>
            Take Online Doctor Consultation
          </h1>
          <p >Private consultation + Audio call · Starts at just ₹199</p>
          <button onClick={() => navigate("/consulting")} className={styles.btn}>Consult Now</button>
          <div className={styles.icon_container}>
          <VerifiedUserOutlinedIcon sx={{fontSize:"1.1rem", marginTop:"0.2rem"}}/><p >Verified Doctors</p>
          
           <MessageOutlinedIcon sx={{fontSize:"1.1rem", marginTop:"0.2rem", marginLeft:"1.5rem"}}/><p>Digital Prescription</p>
          <LocalHospitalOutlinedIcon sx={{fontSize:"1.1rem", marginTop:"0.2rem", marginLeft:"1.5rem"}}/><p>Free Followup</p>
          </div>
        </div>
        <div className={styles.img_container}>
          <img src={"https://www.practo.com/consult/static/images/homepage-hero-image-mweb-v1.png"} alt="banner"/>
        </div>

      </div>
    </div>
  );
};

export default Hero;
