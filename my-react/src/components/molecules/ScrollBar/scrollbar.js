import React from "react";
import styles from "./scrollbar.module.css";
import Cards from "../../atoms/Card_2/card_2";
import Text from "../../atoms/ScrollText/Text";
import Loader from "../../atoms/Loader/Loader";
import Error from "../../atoms/Error/Error";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Scrollbar = () => {
  const navigate = useNavigate();
  const [concernData, setConcernData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const handleClick = () => {
    navigate("/consultation")
    
  }
  const text = {
    text_1: "Consult top doctors online for any health concern",
    text_2:
      "Private online consultations with verified doctors in all specialists",

  };
  useEffect(() => {
    const concernData = async () => {
      try {
        const { data } = await axios.get("https://server-practo.onrender.com/cdata");
        setConcernData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    concernData();
  }, []);

const consulting = async (e) => {

  const problem = e.concern.slice(0,4)
  const {data} = await axios.get(`https://server-practo.onrender.com/consult-2/${problem}`)
  const details = {
    name:data.doctor,
    price:data.price
  }
  localStorage.setItem("doctorName", JSON.stringify(details))
  navigate("/consulting-2")

}


  if (error) return <Error message={"Error while fetching health concern Data"} />;

  return (
    < div className={styles.container}>
      <Text text={text} navigating={handleClick}/>
      <div  className={styles.scroll_container}>
     {loading? (<Loader/>):(
      concernData.map((item) => <Cards handle={consulting} key={item.id} data={item}/>)
     )}
     </div>
    </div>
  );
};

export default Scrollbar;
