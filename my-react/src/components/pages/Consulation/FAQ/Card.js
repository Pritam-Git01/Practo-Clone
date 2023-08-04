import React, { useState } from "react";
import styles from "./Card.module.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Card = ({qnaData}) => {
  const[show,setShow] = useState(true)
  const temp = qnaData.ans.substring(0,80)


  return (
   
      <div className={styles.container}>
        <h4 style={{fontWeight:"580"}}>
         
         
          {show? <ArrowRightIcon sx={{position:"relative", top:"0.5rem", fontSize:"2.2rem"}}/>
          :<ArrowDropDownIcon sx={{position:"relative", top:"0.5rem", fontSize:"2.2rem", left:"0.1rem"}}/>}
          
         {qnaData.ques}
        </h4>
        <p onClick={() => setShow(!show)} style={{ padding:"0.5rem 2.6rem 1rem 2.2rem", fontSize:"14px"}}>
          {show?temp:qnaData.ans} {show?<span style={{letterSpacing:"1px"}}>....</span>:null} {show? <span className={styles.toggle}
           onClick={() => setShow(false)}>Read More</span>:null}
        </p>
       
 
    </div>
  );
};

export default Card;
