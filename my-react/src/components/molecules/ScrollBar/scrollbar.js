import React from "react";
import styles from "./scrollbar.module.css";
import Cards from "../../atoms/Card_2/card_2";
import Text from "../../atoms/ScrollText/Text";
import Loader from "../../atoms/Loader/Loader";
import Error from "../../atoms/Error/Error";
import axios from "axios";
import { useState, useEffect } from "react";

const Scrollbar = () => {
  const [concernData, setConcernData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const text = {
    text_1: "Consult top doctors online for any health concern",
    text_2:
      "Private online consultations with verified doctors in all specialists",
  };
  useEffect(() => {
    const concernData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/cdata");
        setConcernData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    concernData();
  }, []);
  if (error) return <Error message={"Error while fetching health concern Data"} />;

  return (
    < div className={styles.container}>
      <Text text={text} />
      <div className={styles.scroll_container}>
     {loading? (<Loader/>):(
      concernData.map((item) => <Cards data={item}/>)
     )}
     </div>
    </div>
  );
};

export default Scrollbar;
