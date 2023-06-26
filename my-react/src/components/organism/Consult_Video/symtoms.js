import React from 'react'
import styles from "./symtoms.module.css";
import Text from '../../atoms/ScrollText/Text';
import Scrollbar from '../../molecules/ScrollBar/scrollbar';
const Symtoms = () => {
  return (
    <div className={styles.container}>
      <Text/>
      <Scrollbar/>

    </div>
  )
}

export default Symtoms