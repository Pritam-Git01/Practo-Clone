import React from "react";
import styles from "./CardAppointment.module.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"

const Appointment2 = () => {
  const[doctorsData,setDoctorsData] = useState("")
  const navigate = useNavigate()
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { isValid, isDirty, errors } = formState;
  const [images, setImages] = useState([
    {
      src: "https://www.practo.com/consult/bundles/cwipage/images/ic-chats-v1.png",
      query: "Free Follow Up",
    },
    {
      src: "https://www.practo.com/consult/bundles/cwipage/images/ic-security-v1.png",
      query: "Private & Secure",
    },
    {
      src: "https://www.practo.com/consult/bundles/cwipage/images/qualified_doctors.png",
      query: "Verified Doctors",
    },
  ]);
  const [currentImage, setCurrentImage] = useState(0);
  const FullNameRegex = /^[A-Za-z]+([\s.]+[A-Za-z]+)*$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length, currentImage]);

useEffect(() => {
  const doctorData = JSON.parse(localStorage.getItem("doctorName"));
  if(doctorData === null){
    navigate("/")
  } else {
    setDoctorsData(doctorData)
  }
},[])

  const onSubmit = (data) => {
    const detail = {
      name:data.fullName,
      phone:data.mobile,
      fee:doctorsData.price,
      specialist:doctorsData.name

    }
    localStorage.setItem("appointDetails", JSON.stringify(detail))
   navigate("/checkout")
  }
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wraper}>
        <form onSubmit={handleSubmit(onSubmit)}
        noValidate
         className={styles.first}>
          <h2>Consult with a Doctor</h2>
          <p>Speciality</p>
          <div className={styles.specialist}>
            <div>
              <input
                type="radio"
                checked={true}
                name="specialist"
                id="doctor"
              />
              <label style={{ paddingLeft: "0.68rem" }} htmlFor="doctor">
                {doctorsData.name ? doctorsData.name : "Doctor Name"}
              </label>
            </div>
            <p>₹{doctorsData.price}</p>
          </div>

          <label htmlFor="patient"> Patient's Name</label>

          <input
            id="patient"
            type="text"
            placeholder="Enter patient name for prescription"
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
          <p     style={{
            fontSize: "10px",
            color: "rgb(242, 87, 87)",
            marginLeft: "1.1rem",
            marginTop: "0.1rem",
            padding: 0,
          }} className={styles.error}>{errors.fullName?.message}</p>

          <label htmlFor="mobile">Mobile Number</label>

          <input id="mobile" type="number" placeholder="Enter mobile number" 
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
            marginLeft: "1.1rem",
            marginTop: "0.1rem",
            padding: 0,
          }}
        >
          {errors.mobile?.message}
        </p>
          <span>A verification code will be sent to this number.</span>
          <button  type="submit" 
          disabled={!isDirty || !isValid}
          className={styles.btn1}
          >Continue</button>
        </form>
        <div className={styles.underline}></div>
        <div className={styles.second}>
          <img src={images[currentImage].src} alt="random" />
          <h2>{images[currentImage].query}</h2>
        </div>
      </div>
    </div>
  );
};

export default Appointment2;
