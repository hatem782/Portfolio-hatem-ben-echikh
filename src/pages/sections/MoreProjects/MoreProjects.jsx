import React from "react";
import { useStyles } from "./moreprojects.styles";
import TitlePart from "../../../components/TitlePart/TitlePart";

import folder_icon from "../../../assets/svgs/Folder.svg";
import github_icon from "../../../assets/svgs/GitHub-1.svg";
import extern_icon from "../../../assets/svgs/External Link.svg";
import OutlinedButton from "../../../components/buttons/OutlinedButton/OutlinedButton";

function MoreProjects() {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <h1 className="big-title">Other Noteworthy Projects</h1>
      <a href="https://www.google.com" className="big-link">
        view the archive
      </a>
      <div className="works">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>

      <div className="btn-more">
        <OutlinedButton>Show More</OutlinedButton>
      </div>
    </div>
  );
}

const WorkCard = ({ work }) => {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <div className="header-body">
        <div className="header">
          <img src={folder_icon} alt="" className="folder-icon" />

          <div className="links">
            <img src={github_icon} alt="" className="git-icon" />
            <img src={extern_icon} alt="" className="lnk-icon" />
          </div>
        </div>

        <div className="body">
          <h1 className="title">
            Integrating Algolia Search with WordPress Multisite
          </h1>
          <p className="desc">
            Building a custom multisite compatible WordPress plugin to build
            global search with Algolia
          </p>

          <div className="techs"></div>
        </div>
      </div>
      <div className="footer">
        <span>Next.js</span>
        <span>Chart.js</span>
        <span>GitHub</span>
        <span>API</span>
      </div>
    </div>
  );
};

export default MoreProjects;
