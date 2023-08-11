import React, { useState } from 'react'
import styles from "./Card.module.css"

const Card = ({data}) => {
    const[style,setStyle] = useState()
    console.log(data)
    const handleStyle = (e) => {
      setStyle(e)
    }
  return (
    <div  className={styles.wraper}>
        <p onClick={() => handleStyle(data.id)} className={`${style === data.id?styles.textClicked:styles.text}`}>{data.text}</p>
    </div>
  )
}

export default Card;