import React from "react";
import styles from "../LogIn/login.module.css";
import { useForm } from "react-hook-form";
import axios from "axios"
import { Navigate } from "react-router-dom";

const LogIn = () => {
  const form  = useForm();

  const { register, handleSubmit, formState } = form;
  const phoneRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$&#])(?=.*\d).{8,}$/;



  const onSubmit = async (data ) => {
console.log(data)
    const response = await axios.get(`https://server-practo.onrender.com/users/${data.mobile}`)
   if(!response.data){
    alert("You are not Registerd!! Please, Register ")
   }



  }
  return (
    <div className={styles.wraper}>
      <div className={styles.img_container}>
        <img
          src={"https://accounts.practo.com/static/images/illustration.png"}
          alt="login"
        />
      </div>
      <div className={styles.form}>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form_container}
        >
          <label htmlFor="mobile">
            Mobile Number<span>/</span>Email ID
          </label>
          <input
            type="text"
            id="mobile"
            placeholder="Mobile Number /Email ID"
            {...register("mobile", {
              pattern: {
                value: phoneRegex,

                message: "Please fill proper Mobile Number",
              },
              required: {
                value: true,
                message: "Mobile Number field cannot be empty",
              },
            })}
          />
          <label className={styles.password} htmlFor="password">
            Password
          </label>
          <input type="text" id="password" placeholder="Password" 
           {...register("password", {
            pattern: {
              value: passwordRegex,
              message:
                "Password contains at least 1 capital letter, 1 small letter, 1 special chracters and min. length is 8",
            },
            required: {
              value: true,
              message: "Password field cannot be empty",
            },
          })}
          />
          <div className={styles.first}>
            <input type="checkbox" id="remember" />

            <label htmlFor="remember">Remember me for 30 days</label>
            <button className={styles.btn_1}>Forgot Password?</button>
          </div>
          <div className={styles.second}>
            <input type="checkbox" id="otp" />
            <label htmlFor="otp">Login with OTP instead of password</label>
          </div>
          <button className={styles.login_btn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
