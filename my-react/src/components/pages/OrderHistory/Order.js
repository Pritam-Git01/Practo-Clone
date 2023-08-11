import React, { useEffect } from "react";
import styles from "./Order.module.css";
import Card from "../OrderHistory/Card/Card";
import { v4 as uuid } from "uuid";
import { useNavigate, Link, Outlet } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
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
  useEffect(() => {
    navigate("appointments");
  }, []);
  return (
    <div className={styles.wraper}>
      <nav className={styles.nav}>A</nav>
      <header className={styles.header}>B</header>
      <section className={styles.orders}>
        <header>H</header>
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
