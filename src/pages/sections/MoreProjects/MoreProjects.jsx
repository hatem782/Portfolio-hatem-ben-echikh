import React from "react";
import { useStyles } from "./moreprojects.styles";
import TitlePart from "../../../components/TitlePart/TitlePart";

import folder_icon from "../../../assets/svgs/Folder.svg";
import github_icon from "../../../assets/svgs/GitHub-1.svg";
import extern_icon from "../../../assets/svgs/External Link.svg";
import OutlinedButton from "../../../components/buttons/OutlinedButton/OutlinedButton";

import { data } from "../../../data/MoreWorks.js";

function MoreProjects() {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <h1 className="big-title">Other Noteworthy Projects</h1>
      {/* <a href="https://www.google.com" className="big-link">
        view the archive
      </a> */}
      <div className="works">
        {data.map((work, index) => {
          return <WorkCard key={index} work={work} />;
        })}
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
            {work.github && (
              <a href={work.github} target="_blank">
                <img src={github_icon} alt="" className="git-icon" />
              </a>
            )}

            {work.link && (
              <a href={work.link} target="_blank">
                <img src={extern_icon} alt="" className="lnk-icon" />
              </a>
            )}
          </div>
        </div>

        <div className="body">
          <h1 className="title">{work.title}</h1>
          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: work.description }}
          ></p>

          <div className="techs"></div>
        </div>
      </div>
      <div className="footer">
        {work.techs.map((tech, index) => {
          return <span key={index}>{tech}</span>;
        })}
      </div>
    </div>
  );
};

export default MoreProjects;
