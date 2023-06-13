import React from 'react';
import styles from './navbar.module.css';
import Logo from '../../atoms/Logo/logo';
import {RiArrowDropDownLine} from "react-icons/ri"


function Navbar() {
  return (
    <div className={styles.nav_container}>

        <nav className={styles.nav_wraper}>
            <div className={styles.logo}>
        <Logo/>

            </div>
            <div className={styles.nav_items_first}>
                <ul>
                    <li>Find Doctors</li>
                    <li>Video Consult</li>
                    <li>Medicines</li>
                    <li>Lab Tests</li>
                    <li>Surgeries</li>
                    
                </ul>

            </div>
             <div className={styles.nav_items_second}>
                <ul>
                    <li><span className={styles.new}>NEW</span><span>For Corporates</span><span className={styles.icon}><RiArrowDropDownLine /></span></li>
                    <li><span>Sequerty & help</span><span className={styles.icon}><RiArrowDropDownLine/></span></li>
                </ul>
                <div className={styles.btn_1}>
                    <button className={styles.btn}>Login / Signup</button>
                </div>

             </div>
        </nav>
    </div>
  )
}

export default Navbar