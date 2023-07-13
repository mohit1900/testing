import React from "react";
import Header from "../components/header/Header";
import classes from "./Profile.module.css";

function Profile() {
  return (
    <>
      <Header />
      <div className={classes.container}>Profile page</div>
    </>
  );
}

export default Profile;
