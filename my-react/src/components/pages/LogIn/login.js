import React from "react";
import styles from "./login.module.css";

const LogIn = () => {
  return (
    <div className={styles.wraper}>
      <div className={styles.img_container}>
        <img src={"https://accounts.practo.com/static/images/illustration.png"} alt='login'/>
      </div>
      <div className={styles.form}>
        <form className={styles.form_container}>
        <label htmlFor="mobile">Mobile Number<span>/</span>Email ID</label>
        <input type="text" id="mobile" placeholder='Mobile Number /Email ID'/>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder='Password'/>
        <div className={styles.first}>
        <input type="checkbox" id="remember"/>
        <label htmlFor="remember">Remember me for 30 days</label>
        <button className={styles.btn_1}>Forgot Password?</button>
        
        </div>
        <div className={styles.second}>
        <input type="checkbox" id="otp"/>
        <label htmlFor="otp">Login with OTP instead of password</label>
       
        </div>
       <button className={styles.login_btn}>Login</button>
        

        </form>
      </div>
    </div>
  );
};

export default LogIn;
