import React from "react";
import Text from "../../../atoms/ScrollText/Text";
import Loader from "../../../atoms/Loader/Loader";
import Error from "../../../atoms/Error/Error";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./scrollbar.module.css";
import Cards from "./Card";
import {v4 as uuid} from "uuid";
import { useNavigate } from "react-router-dom";

const Scrollbar = () => {
  const [specialist, setSpecialist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const text = {
    id:uuid(),
    text_1: "25+ Specialities",
    text_2: "Consult with top doctors across specialities",
    text_3: "see all specialist",
  };

  const style = {
    color: "#2d2d32",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://server-practo.onrender.com/specialist");
        setSpecialist(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

function handleNavigate(){
  navigate("/consulting")
}

const cunsulting = (e) => {
  console.log(e)
  const details = {
    name:e.specialist,
    price:e.price
  }
  localStorage.setItem("doctorName",JSON.stringify(details))
  navigate("/consulting-2")

}

  if (error) return <Error message={"Error while fetching Speciallist Doctors Data"} />;
  return (
    <div className={styles.wraper}>
      <Text text={text} style={style}  navigating={handleNavigate}/>
      <div className={styles.cards}>
        {loading ? <Loader /> : specialist.map((item) => <Cards handle={cunsulting} key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default Scrollbar;
