import React from "react";
import styles from "../LogIn/login.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showingIcon } from "../../Redux/Feature/PractoSlice";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const dispatch  = useDispatch()
  const naviagte = useNavigate();
  const form = useForm();

  const { register, handleSubmit,reset, formState } = form;
  const { errors,isSubmitSuccessful } = formState;
  const phoneRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$&#])(?=.*\d).{8,}$/;

  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.get(
      `https://server-practo.onrender.com/users/${data.mobile}`
    );
    if (response.data.password === data.password) {
      alert("You are logged In, Successfully");
      localStorage.setItem("regPhone", JSON.stringify(data.mobile))
      dispatch(showingIcon(true))
        naviagte("/")
    } else if(response.data.password !== data.password) {
      alert("Wrong Password!!"); 
    }else {
      alert("You are not registerd with us, Please Register!!")
    }
  };
  useEffect(() => {
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful,reset])
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
          <p
            style={{
              fontSize: "10px",
              color: "rgb(242, 87, 87)",

              marginTop: "0.1rem",
              padding: 0,
            }}
          >
            {errors.mobile?.message}
          </p>
          <label className={styles.password} htmlFor="password">
            Password
          </label>
          <input
            type="text"
            id="password"
            placeholder="Password"
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
                    <p
            style={{
              fontSize: "10px",
              color: "rgb(242, 87, 87)",
              marginTop: "0.1rem",
              padding: 0,
            }}
          >
            {errors.password?.message}
          </p>
          <div className={styles.first}>
            <input type="checkbox" id="remember" />

            <label htmlFor="remember">Remember me for 30 days</label>
            <button className={styles.btn_1}>Forgot Password?</button>
          </div>
          <div className={styles.second}>
            <input type="checkbox" id="otp" />
            <label htmlFor="otp">Login with OTP instead of password</label>
          </div>
          <button type="submit" className={styles.login_btn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
