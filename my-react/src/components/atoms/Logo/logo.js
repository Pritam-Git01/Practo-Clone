import React from 'react';
import styles from "./logo.module.css"

import logo from "../../assets/Images/Practo_new_logo.png";
import { useNavigate } from 'react-router-dom';

const Logo = ({style}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/")}>
        <img style={style} className={styles.logo} src={logo} alt='logo_img'/>
        </div>
  )
}

export default Logo;