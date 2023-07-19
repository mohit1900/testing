import React from "react";
import Header from "../components/header/Header";
import classes from "./Profile.module.css";
import Avatar from "../assets/avatar.png";
import Background from "../assets/Background.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Profile() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <div className={classes.profileInfoContainer}>
            <img className={classes.backgroundImage} src={Background} alt="" />
            <img className={classes.profileImage} src={Avatar} alt="" />
            <div className={classes.infoContainer}>
              <div className={classes.username}>Username</div>
              <div className={classes.designation}> (Designation)</div>
              <div className={classes.about}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate voluptates aliquid laborum nemo culpa sunt magnam
                enim. Maxime, magnam! Optio, delectus accusamus porro ut sint
                doloribus cum fugit autem quisquam!
              </div>
              <button
                style={{ outline: "none", width: "100px", margin: "0 32px" }}
              >
                Edit
              </button>
            </div>
          </div>
          <div className={classes.generalInfoContainer}>
            <h3 className={classes.heading2}>General Information</h3>
            <div className={classes.generalInfoText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              perferendis deserunt cum! Eaque totam blanditiis error fuga?
              Praesentium, enim deleniti.
            </div>
          </div>
          <div className={classes.skillsContainer}>
            <h3 className={classes.heading2}>Skills</h3>
            <div className={classes.skillsList}>
              <div className={classes.skill}>Skill 1</div>
              <div
                style={{
                  width: "100%",
                  background: "rgb(219, 219, 219)",
                  height: "2px",
                  margin: "12px 0",
                }}
              ></div>
              <div className={classes.skill}>Skill 2</div>
              <div
                style={{
                  width: "100%",
                  background: "rgb(219, 219, 219)",
                  height: "2px",
                  margin: "12px 0",
                }}
              ></div>
              <div className={classes.skill}>Skill 3</div>
              <div
                style={{
                  width: "100%",
                  background: "rgb(219, 219, 219)",
                  height: "2px",
                  margin: "12px 0",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <img className={classes.image} src={Avatar} alt="" />
          <div className={classes.peopleContainer}>
            <div style={{ margin: "12px 0" }}>People You May Know</div>
            <div className={classes.people}>
              <img src={Avatar} alt="" />
              <div style={{ margin: "0 12px" }}>Name1</div>
            </div>
            <div className={classes.people}>
              <img src={Avatar} alt="" />
              <div style={{ margin: "0 12px" }}>Name 2</div>
            </div>
            <div className={classes.people}>
              <img src={Avatar} alt="" />
              <div style={{ margin: "0 12px" }}>Name 3</div>
            </div>
            <div className={classes.people}>
              <img src={Avatar} alt="" />
              <div style={{ margin: "0 12px" }}>Name 4</div>
            </div>
            <div className={classes.seeAll}>
              See All Recommendations
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
