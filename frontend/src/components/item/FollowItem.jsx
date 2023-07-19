import React from "react";
import classes from "./FollowItem.module.css";

function FollowItem({ name, designation, profileImage, backgroundImage }) {
  return (
    <div className={classes.container}>
      <img className={classes.backgroundImage} src={backgroundImage} alt="" />
      <img className={classes.profileImage} src={profileImage} alt="" />
      <div className={classes.infoContainer}>
        <div className={classes.username}>{name}</div>
        <div className={classes.designation}> {designation}</div>
      </div>
      <div className={classes.followButton}>Follow</div>
    </div>
  );
}

export default FollowItem;
