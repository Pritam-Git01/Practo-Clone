import React, { useEffect } from "react";
import styles from "./signup.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { Select } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { showingIcon } from "../../Redux/Feature/PractoSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm();
  const { register, control, handleSubmit, reset, formState } = form;
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  const FullNameRegex = /^[A-Za-z]+([\s.]+[A-Za-z]+)*$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$&#])(?=.*\d).{8,}$/;

  const onSubmit = async (data) => {
    const signupDetails = {
      name: data.fullName,
      phone: data.mobile,
      password: data.password,
    };
    try {
      const response = await axios.post(
        "https://server-practo.onrender.com/users",
        signupDetails
      );
      if (response.data.status === 404) {
        alert("Mobile number is already registered!!");
      } else {
        alert("Thank You, Registration Successfull!!");
        localStorage.setItem("regPhone", JSON.stringify(data.mobile));
        localStorage.setItem("userAuth", true);
        dispatch(showingIcon(true));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // const onError = (errors) => {
  //   console.log("error", errors);
  // };

  return (
    <div className={styles.wraper}>
      <div className={styles.img_container}>
        <img
          src={"https://accounts.practo.com/static/images/illustration.png"}
          alt="signup"
        />
      </div>
      <div className={styles.form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form_containers}
          noValidate
        >
          <h2
            style={{ fontWeight: 600, padding: "0.5rem 0", color: "#5c5c5f" }}
          >
            Join Practo
          </h2>
          <div className={styles.form_container}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              {...register("fullName", {
                pattern: {
                  value: FullNameRegex,
                  message: "Please fill proper Name",
                },
                required: {
                  value: true,
                  message: "Full Name field cannot be empty",
                },
              })}
            />
            <p className={styles.error}>{errors.fullName?.message}</p>
          </div>
          <div className={styles.form_container}>
            <label htmlFor="mobile">Mobile Number</label>
            <div className={styles.phone_inputs}>
              <Select
                value="+91"
                sx={{
                  height: "2.2rem",
                  paddingBottom: "0.15rem",
                  width: "6.8rem",
                  marginRight: "1.2rem",
                }}
              >
                <option value="+91">+91 IND</option>
              </Select>
              <input
                style={{ width: "13.35rem" }}
                type="text"
                id="mobile"
                placeholder="Mobile Number"
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
            </div>
            <p style={{ marginLeft: "8rem" }} className={styles.error}>
              {errors.mobile?.message}
            </p>
          </div>
          <div className={styles.form_container}>
            <label htmlFor="password">Create Password</label>
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
            <p className={styles.error}>{errors.password?.message}</p>
          </div>
          <div className={styles.second}>
            <input type="checkbox" id="t&c" />
            <label htmlFor="t&c">
              Recieve relevant offers and promotional communication from practo
            </label>
          </div>
          <p className={styles.terms}>
            By, signing up, i agree to <span>terms</span>
          </p>
          <button className={styles.otp_btn}>Register</button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default Signup;
