import React from "react";
import styles from "./Appointment.module.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Error from "../../atoms/Error/Error";
import {toast} from "react-toastify"

const Appointment = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const phoneRegex = /^[6-9]\d{9}$/;
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
  const [query, setQuery] = useState("");
  const [concernData, setConcernData] = useState([]);
  const [showSpecialist, setShowSpecialist] = useState(false);
  const [selected, setSelected] = useState({});
  // const[error,setError] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length, currentImage]);

  const fetchData = async () => {
    if (query.trim().length >= 3) {
      const { data } = await axios.get(
        `https://server-practo.onrender.com/consult/${query}`
      );
      setConcernData(data);
      setShowSpecialist(true);
    } else {
      setConcernData([]);
      setShowSpecialist(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  }, [query]);

  const onSubmit = (data) => {
    const detail = {
      phone: data.mobile,
      fee: Number(selected.price),
      specialist: selected.specialist,
    };
    localStorage.setItem("appointDetails", JSON.stringify(detail));
    navigate("/checkout");
  };
  // if(error) {
  //   return(<Error message="OOPs! Check Your Internet Connection"/>)
  // }
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wraper}>
        <form
          className={styles.first}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Consult with a Doctor</h2>
          <p>Tell us your symptoms or health problem</p>
          <textarea
            placeholder="Eg:fever,headache"
            spellCheck="false"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span>Min. 4 characters</span>
          <p style={{ padding: "0.4rem 1rem" }}>
            {showSpecialist
              ? "Choose a relavant speciality"
              : "A relevant specialist will be shown below..."}
          </p>

          {concernData.map((i) => (
            <DoctorsOption key={i._id} data={i} setSelected={setSelected} />
          ))}

          <label htmlFor="mobile">Mobile Number</label>

          <input
            type="number"
            id="mobile"
            placeholder="Enter mobile number"
            {...register("mobile", {
              pattern: {
                value: phoneRegex,
                message: "Please fill proper Mobile Number",
              },
              required: {
                value: true,
                message: "Mobile Number field cannot be empty",
              },
              validate: async (value) => {
                try {
                  const { data } = await axios.get(`https://server-practo.onrender.com/users/${value}`);
                  if (!data) {
                    toast.error("You are not registered with us, please register first!!");
                    return "You are not registered with us, please register first!!";
                  }
                } catch (error) {
                  console.error("Error fetching user data:", error);
                  toast.error("An error occurred while checking registration. Please try again.");
                  return "An error occurred. Please try again later.";
                }
               
              }
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
          <button
            className={styles.btn}
            type="submit"
          >
            Continue
          </button>
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

export default Appointment;

const DoctorsOption = ({ data, setSelected }) => {
  const handle = (selectedData) => {
    console.log(selectedData);
    setSelected(selectedData);
  };

  return (
    <div className={styles.specialist}>
      <div>
        <input
          type="radio"
          value={data}
          name="specialist"
          onChange={() =>
            handle({ price: data.price, specialist: data.doctor })
          }
          id={data.doctor}
        />
        <label style={{ paddingLeft: "0.68rem" }} htmlFor={data.doctor}>
          {data.doctor}
        </label>
      </div>
      <p>₹{data.price}</p>
    </div>
  );
};
