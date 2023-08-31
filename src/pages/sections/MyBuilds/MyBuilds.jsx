import React from "react";
import { useStyles } from "./mybuilds.styles";
import TitlePart from "../../../components/TitlePart/TitlePart";

import img from "../../../assets/images/temp/halcyon.avif";

import github_icon from "../../../assets/svgs/GitHub-1.svg";
import extern_icon from "../../../assets/svgs/External Link.svg";

function MyBuilds() {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <TitlePart num={"03."}>Some Things I’ve Built</TitlePart>
      <div className="works">
        <WorkCard orient="ltr" />
        <WorkCard orient="rtl" />
        <WorkCard orient="ltr" />
      </div>
    </div>
  );
}

const WorkCard = ({ orient = "ltr" }) => {
  const styles = useStyles();

  return (
    <div className={`${styles.card} ${styles[orient]}`}>
      <div className="left">
        <img src={img} alt="" />
        <div className="filter" />
        <div className="filter2" />
      </div>
      <div className="right">
        <h2>Featured Project</h2>
        <h1>Halcyon Theme</h1>

        <p>
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on <span> Visual Studio Marketplace </span>,{" "}
          <span>Package Control</span>, <span>Atom Package Manager</span>, and{" "}
          <span>npm</span>.
        </p>

        <div className="techs">
          <span>VS Code</span>
          <span>Sublime Text</span>
          <span>Atom</span>
          <span>iTerm2</span>
          <span>Hyper</span>
        </div>

        <div className="icons">
          <img src={github_icon} alt="" className="git" />
          <img src={extern_icon} alt="" className="ext" />
        </div>
      </div>
    </div>
  );
};

export default MyBuilds;
