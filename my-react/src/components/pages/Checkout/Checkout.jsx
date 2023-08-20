import React, { useEffect, useState } from "react";
import Header from "../Appointment/Header";
import styles from "./Checkout.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../atoms/Loader/Loader";
const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userBookingData, setUserBookingData] = useState({});

  const [show, setShow] = useState(false);
  const [coupon, setCoupon] = useState("");
  useEffect(() => {

    const userDetails = JSON.parse(localStorage.getItem("appointDetails"));
    if(!userDetails){
      navigate("/")
    }else {
      setUserBookingData(userDetails);
      form.reset({
        patient: userDetails.name || ""
      });
    }
    
  }, []);

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;


  const FullNameRegex = /^[A-Za-z]+([\s.]+[A-Za-z]+)*$/;
  const tipImg =
    "https://www.practo.com/consult/bundles/cwipage/images/tip-icon-v1.png";
  const tabImg =
    "https://www.practo.com/consult/bundles/cwipage/images/phone-icon.png";

  function loadRazorpay(data) {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post(
          "https://server-practo.onrender.com/create-order",
          {
            amount: userBookingData.fee * 100,
          }
        );
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("https://server-practo.onrender.com/get-razorpay-key");
        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: userBookingData.name?userBookingData.name:data.patient,
          description: "example transaction",
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post("https://server-practo.onrender.com/pay-order", {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
           
            alert(result.data.msg);
            

            const postResponse = await axios.post(
              "https://server-practo.onrender.com/booking-Data",

              {
                razorpayOrderId: response.razorpay_order_id,
                patient_name: userBookingData.name? userBookingData.name:data.patient,
                phone: userBookingData.phone,
                amount: Number(amount/100),
                date: {date:new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()},
                status: "Confirmed",
                razorpayPaymentId: response.razorpay_payment_id,
              }

            );
           
            navigate("/");
          },
          prefill: {
            name: userBookingData.name?userBookingData.name:data.patient,
            email: "test@example.com",
            contact: userBookingData.phone,
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#459de0",
          },
        };
        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }
console.log(userBookingData)
  return (
    <section className={styles.container}>
      <Header />
      {loading && <Loader />}
      <div className={styles.wraper}>
        <div className={styles.first}>
          <h2>Confirm & Pay</h2>
          <div style={{ display: "flex", margin: "1rem 0" }}>
            <img height="22px" width="24px" src={tipImg} alt="light" />
            <p>93% of users found online consultation helpful</p>
          </div>
          <div style={{ display: "flex" }}>
            <img height="20px" width="24px" src={tabImg} alt="tab" />
            <p>Consultation will happen only on mobile app</p>
          </div>

          <form className={styles.inputs} onSubmit={handleSubmit(loadRazorpay)}>
            <label htmlFor="patient">Patient's Name</label>
            <input
              type="text"
              id="patient"
              spellCheck="false"
              placeholder="Enter Patient's name"
              {...register("patient", {
                pattern: {
                  value: FullNameRegex,
                  message: "Please fill proper Patient's name",
                },
                required: {
                  value: true,
                  message: "Patient's Name field cannot be empty",
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
              {errors.patient?.message}
            </p>

            {show ? (
              <div className={styles.coupons}>
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button>Apply</button>
              </div>
            ) : (
              <span onClick={() => setShow(true)} className={styles.text}>
                Have a coupon code?
              </span>
            )}

            <p>Final fee</p>
            <h1>₹{userBookingData.fee ? userBookingData.fee : 499}</h1>

            <button className={styles.payBtn} type="submit">
              Continue to payment
            </button>
          </form>
        </div>
        <div className={styles.underline}></div>
        <div className={styles.second}>
          <img
            src={
              "https://www.practo.com/consult/bundles/cwipage/images/affordable-money-v1.svg"
            }
            alt="random"
          />
          <h2>3x more affordable!</h2>
          <p>
            Get affordable healthcare online, with fees <br></br> upto 3 times
            lesser than in clinic fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
