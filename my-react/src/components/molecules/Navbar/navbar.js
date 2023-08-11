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

function Navbar() {
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

    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `https://server-practo.onrender.com/users/${regPhone}`
        );

        setUserData(data?data:null);
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
  };
  console.log(userData);

  return (
    <div className={styles.nav_container}>
      <nav className={styles.nav_wraper}>
        <div onClick={() => navigate("/")} className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.nav_items_first}>
          <ul>
            <li onClick={() => navigate("/consultation")}>Find Doctors</li>
            <li onClick={() => navigate("/consultation")}>Video Consult</li>
            <li>Medicines</li>
            <li>Lab Tests</li>
            <li>Surgeries</li>
          </ul>
        </div>
        <div className={styles.nav_items_second}>
          <ul>
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

          {
            showIcon.showUserIcon ? (
              <div>
                <IconButton
                  aria-controls="user-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="inherit"
                >
                  <p className={styles.userName}>{userData.name? userData.name:null}</p>
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
                      <p>{userData.name?userData.name:null}</p>
                      <p>{userData.phone?userData.phone:null}</p>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={() => navigate("/order-history")}>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <div className={styles.btn_1}>
                <button onClick={() => navigate("/link")} className={styles.btn}>
                  Login / Signup
                </button>
              </div>
            )

            //                     <Menu>
            //   <MenuButton as={Button} bg='red' colorScheme='pink'>
            //     Profile
            //   </MenuButton>
            //   <MenuList>
            //     <MenuGroup title='Profile'>
            //       <MenuItem>My Account</MenuItem>
            //       <MenuItem>Payments </MenuItem>
            //     </MenuGroup>
            //     <MenuDivider />
            //     <MenuGroup title='Help'>
            //       <MenuItem>Docs</MenuItem>
            //       <MenuItem>FAQ</MenuItem>
            //     </MenuGroup>
            //   </MenuList>
            // </Menu>
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
