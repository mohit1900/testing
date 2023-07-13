import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import Logo1 from "../assets/Logo1.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { registerFail, registerSuccess } from "../store/userSlice";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/signup`,
        {
          username: name,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        }
      );
      alert("Verify G-mail via link in G-mail");
      dispatch(registerSuccess(data.user));
    } catch (e) {
      console.log(e);
      dispatch(registerFail());
      alert("Something went wrong!");
    }

    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={Logo1} alt="" />
        <div className={classes.sideText}>For Students</div>
      </div>
      <form className={classes.signUpForm} onSubmit={handleSubmit}>
        <div className={classes.heading1}>Sign Up</div>
        <label className={classes.textLabel}> Username </label>
        <input
          className={classes.emailInput}
          type="text"
          placeholder="Enter the Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <button className={classes.signUpButton}>Sign Up</button>
        <div className={classes.newUserContainer}>
          <div style={{ fontSize: "16px" }}>Already a User?</div>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={classes.signUpButton2}
          >
            Log In
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
