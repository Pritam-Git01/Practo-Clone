import React from 'react';
import styles from "./signup.module.css"

const Signup = () => {
  return (
    <div className={styles.wraper}>
        <div className={styles.img_container}>
        <img src={"https://accounts.practo.com/static/images/illustration.png"} alt='signup'/>
        </div>
        <div className={styles.form}>
            <form className={styles.form_container}>
           <h2 style={{fontWeight:600, padding:"0.5rem 0", color:"#5c5c5f"}}>Join Practo</h2>
                <label htmlFor="full name">Full Name</label>
        <input type="text" id="full name" placeholder='Full Name'/>
        <label htmlFor="mobile">Mobile Number</label>
        
        <input type="text" id="mobile" placeholder='Mobile Number'/>
        <label htmlFor="password">Create Password</label>
        <input type="text" id="password" placeholder='Password'/>
        <div className={styles.second}>
        <input type="checkbox" id="t&c"/>
        <label htmlFor="t&c">Recieve relevant offers and promotional communication from practo</label>
     
        </div>
        <p className={styles.terms}>By, signing up, i agree to <span>terms</span></p>
        <button className={styles.otp_btn}>Get OTP</button>
            </form>
            
        </div>
        



    </div>
  )
}

export default Signup