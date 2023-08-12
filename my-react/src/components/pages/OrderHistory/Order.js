import React, { useEffect } from "react";
import styles from "./Order.module.css";
import Card from "../OrderHistory/Card/Card";
import { v4 as uuid } from "uuid";
import { ImUser } from "react-icons/im";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Navbar from "../../molecules/Navbar/navbar";
import { showingIcon } from "../../Redux/Feature/PractoSlice";
import {useDispatch} from "react-redux"

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const sidebarData = [
    {
      id: uuid(),
      route: "records",
      text: "Medical Records",
    },
    {
      id: uuid(),
      route: "appointments",
      text: "Appointments",
    },
    {
      id: uuid(),
      route: "tests",
      text: "Lab Tests",
    },

    {
      id: uuid(),
      route: "medicines",
      text: "Medicines Orders",
    },
    {
      id: uuid(),
      route: "consults",
      text: "Online Consultations",
    },
    {
      id: uuid(),
      route: "articles",
      text: "Articles",
    },
    {
      id: uuid(),
      route: "feedback",
      text: "Feedback",
    },
    {
      id: uuid(),
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


const handleLogout2  = () => {
  localStorage.removeItem("userAuth")
  localStorage.removeItem("regPhone")
  dispatch(showingIcon(false))
  navigate("/")

}
  // useEffect(() => {
  //   navigate("appointments");
  // }, []);

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
              Pritam Kumar Yadav
            </p>
            <p>+919162788251</p>
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
                <Card data={item} />
              </Link>
            ))}
          </aside>
          <Outlet className={styles.appointDetails} />
        </article>
      </section>
    </div>
  );
};

export default Order;
