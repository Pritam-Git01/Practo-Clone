import React from 'react'
import styles from "./symtoms.module.css";
import Text from '../../atoms/ScroolText/Text';
import Scroolbar from '../../molecules/ScroolBar/scrollbar';
const Symtoms = () => {
  return (
    <div className={styles.container}>
      <Text/>
      <Scroolbar/>

    </div>
  )
}

export default Symtoms