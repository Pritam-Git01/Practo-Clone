import React from 'react';
import styles from "./appointment.module.css";
import Text from '../../atoms/ScrollText/Text';
import ScrollCards from '../../molecules/ScrollCards/ScrollCards';

const Appointment = () => {
  return (
    <div className={styles.container}>
        <Text/>
        <ScrollCards/>
    </div>
  )
}

export default Appointment;