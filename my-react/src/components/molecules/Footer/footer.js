import React from 'react';
import styles from "./footer.module.css";


const Footer = () => {
    
  return (
    <div className={styles.wraper}>
    <div className={styles.footer_container}>
        <div className={styles.footer_items}>Practo
            <a href='/#'>About</a>
            <a href='/#'>Blog</a>
            <a href='/#'>Carrers</a>
            <a href='/#'>Press</a>
            <a href='/#'>Contact Us</a>

        </div>
        <div className={styles.footer_items}>For patients
        <a href='/#'>Search for doctors</a>
            <a href='/#'>Search for clinics</a>
            <a href='/#'>Search for hospitals</a>
            <a href='/#'>Book Diagnostic Tests</a>
            <a href='/#'>Book Full Body Checkups</a>
            <a href='/#'>Pract Plus</a>
            <a href='/#'>Covid Hospital listing</a>
            <a href='/#'>Practo Care Clinics</a>
            <a href='/#'>Read health articles</a>
            <a href='/#'>Read about medicines</a>
            <a href='/#'>Practo drive</a>
            <a href='/#'>Health App</a>
            <a href='/#'>Practo Plus Infinity</a>
        </div>
        <div className={styles.footer_items}>For Doctors
        <a href='/#'>Practo Profiles</a>
        <div className={styles.footer_items} style={{marginTop: "1rem"}}>For Clinics
            <a href='/#'>Ray by Practo</a>
            <a href='/#'>Practo Reach</a>
            <a href='/#'>Ray Tab</a>
            <a href='/#'>Practo Pro</a>
            </div>
        </div>
        <div className={styles.footer_items}>For Hospitals
        <a href='/#'>Insta by Practo</a>
            <a href='/#'>Qikwell by Practo</a>
            <a href='/#'>Practo Profile</a>
            <a href='/#'>Practo Reach</a>
            <a href='/#'>Practo Drive</a>
        </div>
        <div className={styles.footer_items}>More
        <a href='/#'>Help</a>
            <a href='/#'>Developers</a>
            <a href='/#'>Privacy Policy</a>
            <a href='/#'>Terms & Conditions</a>
            <a href='/#'>Healthcare Directory</a>
            <a href='/#'>Practo Health Wiki</a>

        </div>
        <div className={styles.footer_items}>Social
        <a href='/#'>Facebook</a>
            <a href='/#'>Twitter</a>
            <a href='/#'>LinkedIn</a>
            <a href='/#'>Youtube</a>
            <a href='/#'>GitHub</a>
        </div>

        

    </div>
    
    
    <div className={styles.logo_container}>
            <img src='https://www.practostatic.com/web-assets/images/white_practo_logo.svg' alt="logo"/>
            <p style={{color: "gray"}}>Copyright @ 2023 Practo, All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer