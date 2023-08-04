import React from "react";
import styles from "./Appointment.module.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import {useForm}  from "react-hook-form"
import OtpInput from 'react-otp-input';
// import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "../../Firebase.config";



// import { queryareaAutosize } from '@mui/material';

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
  const[showSpecialist,setShowSpecialist] = useState(false);
  const[enable,setEnable] = useState(true);
 


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length,currentImage]);

  const fetchData = async () => {
 if (query.trim().length >= 3) {
      const { data } = await axios.get(`http://localhost:5000/consult/${query}`);
      setConcernData(data);
      setShowSpecialist(true)

      // console.log(concernData);

    }else {
      setConcernData([])
      setShowSpecialist(false)
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchData()
    }, 500)
    return () => {
      clearTimeout(debounce)
    }
  }, [query]);

  // const filteredData = concernData.tags.filter((item) => item.tags.includes(query))

//   const onSignUp = async () => {
//     const appVerifier = await new RecaptchaVerifier("recaptcha", {}, auth)
//     const formatPH = "+"+919162788251;

//     signInWithPhoneNumber(auth, formatPH, appVerifier)
//     .then((confirmationResult) => {
//      console.log(confirmationResult)
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       // window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });
//   }
//   const openVerified = () => {
   
// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//   'size': 'normal',
//   'callback': (response) => {
//      onSignUp()
    
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     // ...
//   },
//   'expired-callback': () => {
//     // Response expired. Ask user to solve reCAPTCHA again.
//     // ...
//   }
// }
// );
//   }
  
 

  return (

      <div className={styles.container}>
        <Header />
        <div className={styles.wraper}>
          <form className={styles.first} onSubmit={handleSubmit()}>
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
              {showSpecialist?"Choose a relavant speciality":"A relevant specialist will be shown below..."}
            </p>

            {concernData.map((i) => <DoctorsOption key={i.id} data={i}/>)}

            <label htmlFor="mobile">Mobile Number</label>
            {/* <OtpInput
      // value={otp}
      // onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    /> */}

            <input
              
              type="number"
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
              })}
              
            />
            
           
            <p style={{fontSize:"10px", color:"rgb(242, 87, 87)", marginLeft:"1.1rem", marginTop:"0.1rem", padding:0}} className={styles.error}>{errors.mobile?.message}</p>
            <span>A verification code will be sent to this number.</span>
            <button >Continue</button>
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

const DoctorsOption = ({data}) => {
  const[doctor,setDoctor] = useState('')
  const handleRadio = (e) => {
    setDoctor(e.target.value)
    console.log(doctor)
  }
  return (
    <div key={data.id} className={styles.specialist}>
      <div>
       
        <input type="radio" value={data.id} name='specialist'  onChange={handleRadio}  id={data.doctor} />
        <label style={{ paddingLeft: "0.68rem" }} htmlFor={data.doctor}>
        
          
          {data.doctor}
        </label>
      </div>
      <p>₹{data.price}</p>
    </div>
  );
};
