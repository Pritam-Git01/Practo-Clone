import React,{useEffect, useState} from "react";
import styles from "./Order.module.css";
import Card from "../OrderHistory/Card/Card";
import { ImUser } from "react-icons/im";
import axios from "axios";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Navbar from "../../molecules/Navbar/navbar";
import { showingIcon } from "../../Redux/Feature/PractoSlice";
import {useDispatch} from "react-redux"

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[userData,setUserData] = useState({})
  const[style,setStyle]= useState(2)
  const sidebarData = [
    {
      id: 1,
      route: "records",
      text: "Medical Records",
    },
    {
      id: 2,
      route: "appointments",
      text: "Appointments",
    },
    {
      id: 3,
      route: "tests",
      text: "Lab Tests",
    },

    {
      id: 4,
      route: "medicines",
      text: "Medicines Orders",
    },
    {
      id: 5,
      route: "consults",
      text: "Online Consultations",
    },
    {
      id: 6,
      route: "articles",
      text: "Articles",
    },
    {
      id: 7,
      route: "feedback",
      text: "Feedback",
    },
    {
      id: 8,
      route: "payment",
      text: "Payments",
    },
  ];
  const navLinksSTyle = {
    display: "none",
  };
  const logoStyle = {
    height: "1.4rem",
    width: "6rem",
  };
  const iconStyle = {
    position: "absolute",
    right: "4rem",
    top: "0.6rem",
  };

  const handleClick = (value) => {
    console.log(value)
    setStyle(value)
  }

const handleLogout2  = () => {
  localStorage.removeItem("userAuth")
  localStorage.removeItem("regPhone")
  dispatch(showingIcon(false))
  navigate("/")

}

useEffect(() => {
  const phone = JSON.parse(localStorage.getItem("regPhone"))
  const fetchData = async () => {
    try{
    const {data} = await axios.get(`https://server-practo.onrender.com/users/${phone}`)
    setUserData(data)
    }catch(err){
      console.log(err)
    }

  }
  fetchData()

},[])


  return (
    <div className={styles.wraper}>
      <nav className={styles.nav}>A</nav>
      <header className={styles.header}>
        <Navbar
        handle={handleLogout2}
          style={navLinksSTyle}
          logoStyle={logoStyle}
          iconStyle={iconStyle}
        />
      </header>
      <section className={styles.orders}>
        <header>
          <h2>Your Drive</h2>

          <ImUser className={styles.icon} />
          <div>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: "1.15rem",
                fontWeight: 650,
                color: "rgb(65,65,70)",
              }}
            >
              {userData.name}
            </p>
            <p>+91{userData.phone}</p>
          </div>
        </header>
        <article className={styles.details}>
          <aside>
            {sidebarData.map((item) => (
              <Link
                style={{ textDecoration: "none" }}
                to={item.route}
                key={item.id}
              >
                <Card key={item.id} styling = {style} handle={handleClick} data={item} />
              </Link>
            ))}
          </aside>
          <Outlet className={styles.appointDetails}/>
          
        </article>
      </section>
    </div>
  );
};

export default Order;
