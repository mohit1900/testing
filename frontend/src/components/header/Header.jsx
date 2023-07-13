import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import Logo2 from "../../assets/Logo2.png";
import SearchIcon from "@mui/icons-material/Search";
import { logoutFail, logoutSuccess } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function Header() {
  const [visible, setVisible] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleMenu = () => {
    setVisible((prev) => !prev);
  };

  const handleLogout = async (event) => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/logout`, {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      });

      dispatch(logoutSuccess());
      navigate("/");
      alert(data.message);
    } catch (e) {
      dispatch(logoutFail());
      alert("Invalid Email or Password");
      console.log(e);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.container2}>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={classes.logo}
          >
            <img className={classes.image} src={Logo2} alt="" />
          </div>
          <div className={classes.searchContainer}>
            <SearchIcon
              sx={{ fontSize: "30px", color: "gray" }}
              className={classes.searchIcon}
            />
            <input
              className={classes.searchInput}
              value={searchInputValue}
              placeholder="Search"
              onChange={(e) => setSearchInputValue(e.target.value)}
              type="text"
            />
          </div>
          <div onClick={toggleMenu} className={`${classes.hamMenu}`}>
            {visible ? (
              <CloseIcon
                sx={{ width: "80%", height: "80%" }}
                className={classes.closeIcon}
              />
            ) : (
              <MenuIcon
                className={classes.menuIcon}
                sx={{ width: "80%", height: "80%" }}
              />
            )}
          </div>
        </div>
        <ul className={!visible ? classes.navList : classes.navListMobile}>
          <li
            onClick={() => {
              navigate("/home");
              if (visible) toggleMenu();
            }}
            className={classes.listItems}
          >
            <div className={classes.option}>
              <HomeIcon sx={{ fontSize: 30 }} className={classes.optionIcon} />
              <div className={classes.optionText}>Home</div>
            </div>
          </li>
          <li
            onClick={() => {
              navigate("/network");
              if (visible) toggleMenu();
            }}
            className={classes.listItems}
          >
            <div className={classes.option}>
              <GroupIcon sx={{ fontSize: 30 }} className={classes.optionIcon} />
              <div className={classes.optionText}>Net</div>
            </div>
          </li>
          <li
            onClick={() => {
              navigate("/messages");
              if (visible) toggleMenu();
            }}
            className={classes.listItems}
          >
            <div className={classes.option}>
              <MessageIcon
                sx={{ fontSize: 30 }}
                className={classes.optionIcon}
              />
              <div className={classes.optionText}>Messages</div>
            </div>
          </li>
          <li
            onClick={() => {
              navigate("/profile");
              if (visible) toggleMenu();
            }}
            className={classes.listItems}
          >
            <div className={classes.option}>
              <HomeIcon sx={{ fontSize: 30 }} className={classes.optionIcon} />
              <div className={classes.optionText}>Profile</div>
            </div>
          </li>
          <li onClick={handleLogout} className={classes.listItems}>
            <div className={classes.option}>
              <LogoutIcon
                sx={{ fontSize: 30 }}
                className={classes.optionIcon}
              />
              <div className={classes.optionText}>Logout</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
