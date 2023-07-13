import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import SidePoster from "../assets/SidePoster.svg";
import Logo1 from "../assets/Logo1.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadUserFail, loadUserSuccess } from "../store/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(true);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (
  //     email.length >= 12 &&
  //     email.length <= 30 &&
  //     password.length >= 6 &&
  //     password.length <= 16
  //   )
  //     setCheck(true);
  //   else setCheck(false);
  // }, [email, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!check) {
      alert("Enter both the fields carefully!");
    } else {
      try {
        const { data } = await axios.post(
          `http://localhost:4000/api/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
          }
        );

        dispatch(loadUserSuccess(data.user));
        navigate("/home");
        alert(data.message);
      } catch (e) {
        dispatch(loadUserFail());
        alert("Invalid Email or Password");
        console.log(e);
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={Logo1} alt="" />
          <div className={classes.sideText}>For Students</div>
        </div>
        <div className={classes.heading1}>
          Welcome To Your Professional Community
        </div>

        <form className={classes.loginForm} onSubmit={handleSubmit}>
          <label className={classes.textLabel}> E-mail </label>
          <input
            className={classes.emailInput}
            type="text"
            placeholder="Enter the E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className={classes.textLabel}> Password </label>
          <input
            className={classes.passwordInput}
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className={classes.loginButton}>Login</button>
          <div className={classes.newUserContainer}>
            <div style={{ fontSize: "16px" }}>New User</div>
            <div
              onClick={() => {
                navigate("/signup");
              }}
              className={classes.signUpButton2}
            >
              Sign Up
            </div>
          </div>
        </form>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.posterContainer}>
          <img className={classes.poster} src={SidePoster} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
