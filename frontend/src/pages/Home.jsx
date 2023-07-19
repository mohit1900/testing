import React, { useState } from "react";
import classes from "./Home.module.css";
import Header from "../components/header/Header";
import Avatar from "../assets/avatar.png";
import Background from "../assets/Background.jpg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ImageIcon from "@mui/icons-material/Image";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";

function Home() {
  const [like, setLike] = useState(false);

  const userInfo = useSelector((state) => state.user);

  const handleLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.container1}>
          <img className={classes.backgroundImage} src={Background} alt="" />
          <img className={classes.profileImage} src={Avatar} alt="" />
          <div className={classes.textContainer}>
            <div className={classes.username}>
              {userInfo && userInfo.user ? userInfo.user.username : "Your Name"}
            </div>
            <div className={classes.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              repudiandae quis pariatur quisqua
            </div>
          </div>
        </div>
        <div className={classes.container2}>
          <div className={classes.box}>
            <div className={classes.box1}>
              <img className={classes.profileImage2} src={Avatar} alt="" />
              <input
                className={classes.input1}
                placeholder="New Publication"
                type="text"
              />
            </div>
            <div className={classes.box2}>
              <div className={classes.icons}>
                <ImageIcon className={classes.imageIcon} />
                <div>Photo</div>
              </div>
              <div className={classes.icons}>
                <PlayCircleIcon className={classes.videoIcon} />
                <div>Video</div>
              </div>
            </div>
          </div>
          <div className={classes.post}>
            <div className={classes.uploaderInfo}>
              <img
                className={classes.profileImageUploader}
                src={Avatar}
                alt=""
              />
              <div className={classes.uploaderName}>Creator Name</div>
            </div>
            <div className={classes.imageInfo}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              autem eius itaque quasi! Neque, quia?
            </div>
            <img
              className={classes.uploadedImage}
              src="https://img.freepik.com/free-vector/flat-design-lake-scenery_23-2149161405.jpg?w=2000"
              alt=""
            />
            <div className={classes.text2}>
              {" "}
              Liked by dknsondd fnsndfios dnfsdinfsfos
            </div>
            <div className={classes.buttons}>
              <div onClick={handleLike} className={classes.button}>
                {!like ? <ThumbUpOffAltIcon /> : <ThumbUpAltIcon />}
                Like
              </div>
              <div className={classes.button}>
                <ChatBubbleOutlineIcon />
                Comment
              </div>
              <div className={classes.button}>
                <SendIcon />
                Send
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container3}>
          <div className={classes.feedHeading}>Add to your feed</div>
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
    </>
  );
}

export default Home;
