import React, { useEffect, useState } from "react";
import styles from "./link.module.css";
import Navbar from "../../molecules/Navbar/navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Linked = () => {
  const[style,setStyle] = useState(1)
  const navigate = useNavigate()
  useEffect(() => {

    navigate("login")
  },[])

  const showStyle = (e) => {
setStyle(e)

  }
  console.log(style)
  return (

   

    
  

    <div className={styles.wraper}>
    <Navbar/>
      <div className={styles.btns}>
        
        <Link to='login'><button  className={`${style === 1? styles.styleBtn:styles.setBtn}` } onClick={() => showStyle(1)}>Login</button></Link>
        <Link to='signup'><button className={`${style === 2? styles.styleBtn:styles.setBtn}`} onClick={() => showStyle(2)}>Register</button></Link>

      </div>
      <Outlet />
    </div>

  );
};

export default Linked;
