
import React from 'react';
import styles from "./Text.module.css";

const Text = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text_wraper}>
            <h2>
            Consult top doctors online for any health concern

            </h2>
            <p>Private online consultations with verified doctors in all specialists</p>
        </div>
        <div className={styles.btn}>
            <button className={styles.spcl_btn}>View all Specialist</button>
        </div>
    </div>
  )
}

export default Text