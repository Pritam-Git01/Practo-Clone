import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Logo from "../../atoms/Logo/logo";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { showingIcon } from "../../Redux/Feature/PractoSlice";
import { ImUser } from "react-icons/im";
import axios from "axios";

function Navbar({ style, logoStyle, iconStyle, handle }) {
  const MenuStyle = {
    paddingTop:"1rem",
    fontWeight:450
  }
  const dispatch = useDispatch();
  const showIcon = useSelector((state) => state.userIcon);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const regPhone = JSON.parse(localStorage.getItem("regPhone"));
    const auth = localStorage.getItem("userAuth");
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `https://server-practo.onrender.com/users/${regPhone}`
        );
        setUserData(data && auth === "true" ? data : null);
        dispatch(showingIcon(true));
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(showingIcon(false));
    localStorage.removeItem("regPhone");
    localStorage.removeItem("userAuth");
  };
  return (
    <div className={styles.nav_container}>
      <nav className={styles.nav_wraper}>
        <div onClick={() => navigate("/")} className={styles.logo}>
          <Logo style={logoStyle} />
        </div>
        <div style={style} className={styles.nav_items_first}>
          <ul>
            <li onClick={() => navigate("/consultation")}>Find Doctors</li>
            <li onClick={() => navigate("/consultation")}>Video Consult</li>
            <li>Medicines</li>
            <li>Lab Tests</li>
            <li>Surgeries</li>
          </ul>
        </div>
        <div style={iconStyle} className={styles.nav_items_second}>
          <ul style={style}>
            <li>
              <span className={styles.new}>NEW</span>
              <span>For Corporates</span>
              <span className={styles.icon}>
                <RiArrowDropDownLine />
              </span>
            </li>
            <li>
              <span>Sequerty & help</span>
              <span className={styles.icon}>
                <RiArrowDropDownLine />
              </span>
            </li>
          </ul>

          {showIcon.showUserIcon ? (
            <div style={{ position: "relative" }}>
              <IconButton
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <p className={styles.userName}>
                  {userData.name ? userData.name : ""}
                </p>
                <span className={styles.icon}>
                  <RiArrowDropDownLine />
                </span>
              </IconButton>
              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{ style: { width: 240 } }}
              >
                <MenuItem onClick={handleClose}>
                  <ImUser
                    style={{
                      fontSize: "2.68rem",
                      marginTop: "0.5rem",
                      color: "white",
                      background: "gray",
                    }}
                  />

                  <div style={{ padding: "0.1rem 1.2rem", fontSize: "12px" }}>
                    <p>{userData.name ? userData.name : ""}</p>
                    <p>{userData.phone ? userData.phone : ""}</p>
                  </div>
                </MenuItem>

                <MenuItem style={MenuStyle}
                onClick={() => navigate("/order-history/appointments")}>
                  My Appointments
                </MenuItem>
                <MenuItem onClick={() => navigate("/order-history/tests")}>
                  My Tests
                </MenuItem>
                <MenuItem onClick={() => navigate("/order-history/medicines")}>
                  My Medicines Orders
                </MenuItem>
                <MenuItem onClick={() => navigate("/order-history/records")}>
                  My Medical Records
                </MenuItem>
                <MenuItem onClick={() => navigate("/order-history/consults")}>
                  My Online Consulation
                </MenuItem>
                <MenuItem onClick={() => navigate("/order-history/feedback")}>
                  My Feedback
                </MenuItem>
               
                <MenuItem onClick={() => navigate("/order-history/payment")}>
                  My Payments
                </MenuItem>
                <MenuItem onClick={handle ? handle : handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className={styles.btn_1}>
              <button onClick={() => navigate("/link")} className={styles.btn}>
                Login / Signup
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
