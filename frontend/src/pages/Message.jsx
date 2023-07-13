import React from "react";
import Header from "../components/header/Header";
import classes from "./Message.module.css";

function Message() {
  return (
    <>
      <Header />
      <div className={classes.container}>Message page</div>
    </>
  );
}

export default Message;
