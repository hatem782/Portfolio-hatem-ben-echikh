import React from "react";
import { useStyles } from "./leftBar.styles";
import gitImg from "../../assets/svgs/GitHub.svg";
import youtubeImg from "../../assets/svgs/youtube.svg";
// import instaIng from "../../assets/svgs/Instagram.svg";
import facebook from "../../assets/svgs/facebook.svg";
import twitImg from "../../assets/svgs/Twitter.svg";
import linkedIng from "../../assets/svgs/LinkedIn.svg";
// import codePenIng from "../../assets/svgs/CodePen.svg";
import codingame from "../../assets/svgs/codingame.svg";

function LeftBar() {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <a
        href="https://www.youtube.com/@HayaDev"
        target="_blank"
        className={styles.logo}
      >
        <img src={youtubeImg} alt="Youtube" />
      </a>
      <a
        href="https://github.com/hatem782"
        target="_blank"
        className={styles.logo}
      >
        <img src={gitImg} alt="Github" />
      </a>
      <a
        href="https://www.linkedin.com/in/hatem-benechikh-31131517a/"
        target="_blank"
        className={styles.logo}
      >
        <img src={linkedIng} alt="Linkedin" />
      </a>
      <a
        href="https://www.codingame.com/profile/a6e5b1b3fc2d28f793d4001bbcebce225667994"
        target="_blank"
        className={styles.logo}
      >
        <img src={codingame} alt="Codingame" />
      </a>
      {/* <a
        href="https://www.facebook.com/profile.php?id=100011402416537"
        target="_blank"
        className={styles.logo}
      >
        <img src={facebook} />
      </a> */}
      <span className="vertical-line" />
    </div>
  );
}

export default LeftBar;
