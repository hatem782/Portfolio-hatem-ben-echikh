import React from "react";
import { useStyles } from "./leftBar.styles";
import gitImg from "../../assets/svgs/GitHub.svg";
import instaIng from "../../assets/svgs/Instagram.svg";
import twitImg from "../../assets/svgs/Twitter.svg";
import linkedIng from "../../assets/svgs/LinkedIn.svg";
import codePenIng from "../../assets/svgs/CodePen.svg";

function LeftBar() {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <img src={gitImg} />
      <img src={instaIng} />
      <img src={twitImg} />
      <img src={linkedIng} />
      <img src={codePenIng} />
      <span className="vertical-line" />
    </div>
  );
}

export default LeftBar;
