import React from 'react';
import styles from "./logo.module.css"

import logo from "../../assets/Images/Practo_new_logo.png";
const Logo = ({style}) => {
  return (
    
        <img style={style} className={styles.logo} src={logo} alt='logo_img'/>
    
  )
}

export default Logo;