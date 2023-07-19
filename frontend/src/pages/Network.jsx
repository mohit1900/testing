import React from "react";
import Header from "../components/header/Header";
import classes from "./Network.module.css";
import FollowItem from "../components/item/FollowItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

let people = [
  {
    name: "Mohit",
    designation: "sdfs dfsdfsdf sdf sdfsdf sd fsdfs fsdfs df",
    profileImage: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXz3jQ8YI7FWw6L_O0kcuZMFXjsNWlsFnRM4qbsS4tHKOsNPTwVSKRAdtmVhMTg-_2zo&usqp=CAU",
  },
  {
    name: "Pratham",
    designation: "SDE At Amazon",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4DtFDBoqG_eIeS9pbAXCNBOND2LbW1bB9w&usqp=CAU",
    backgroundImage:
      "https://static.euronews.com/articles/stories/05/17/56/42/1440x810_cmsv2_dd6cf20e-a9be-50fa-beeb-a71cbd2cb9e8-5175642.jpg",
  },
  {
    name: "Akhilesh",
    designation: "",
    profileImage: "",
    backgroundImage: "",
  },
  {
    name: "Mayank",
    designation: "",
    profileImage: "",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwmVs4mzkNw1PtRVgjJNvql2qBdWGfQNLKnxbIPkURwmNl3j2fpYV4lkOKi3kOkguzSE&usqp=CAU",
  },
  {
    name: "Aadi",
    designation: "",
    profileImage:
      "https://i.pinimg.com/474x/7a/2d/59/7a2d59b45f3221b020ed465f92e8d44e.jpg",
    backgroundImage: "",
  },
];

function Network() {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.container2}>
          <div className={classes.heading1}>My Network</div>
          <div className={classes.heading2}>
            Popular people to follow across LinkedIn
          </div>
          <div className={classes.peopleContainer}>
            {people.map((item, index) => (
              <FollowItem
                key={index}
                name={item.name}
                designation={item.designation}
                profileImage={item.profileImage}
                backgroundImage={item.backgroundImage}
              />
            ))}
          </div>
          <div className={classes.moreButton}>
            <div className={classes.buttonText}>
              More
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Network;
