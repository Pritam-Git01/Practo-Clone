import React from 'react';
import styles from "./Banner.module.css";
import Text from '../../../atoms/ScrollText/Text';
import { useNavigate } from 'react-router-dom';


const Banner = () => {
  const navigate = useNavigate()
  const text ={
    text_1 :"Still delaying your health concerns ?",
    text_2:"Connect with India's top doctors online",
    text_3:"Consult Now"
  }

  const style = {
    width:"18vw",
    backgroundColor:"rgb(19, 157, 216)",
    height: "3.1rem",
    color: "white",
    fontSize: "1.14rem",
    fontWeight: 550,
    border: "none",
    borderRadius: "0.5rem"
  }
  const style2  = {
    color:"white"
  }

const handleNavigate = () => {
  navigate("/consulting")

}
  return (
    <div className={styles.wraper}>
        <Text text={text} styling={style2} style={style} navigating={handleNavigate}/>


    </div>
  )
}

export default Banner