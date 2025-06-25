import React from "react";
import { useStyles } from "./mygames.styles.js";

import folder_icon from "../../../assets/svgs/Folder.svg";
import github_icon from "../../../assets/svgs/GitHub-1.svg";
import extern_icon from "../../../assets/svgs/External Link.svg";
import OutlinedButton from "../../../components/buttons/OutlinedButton/OutlinedButton.jsx";
import { data } from "../../../data/MyGames.js";

const isMoreThan6 = data.length > 6;

function MyGames() {
  const styles = useStyles();
  let first6 = data.slice(0, 6);
  let rest = data.slice(6);
  let [works, setWorks] = React.useState([...first6]);
  let [showMore, setShowMore] = React.useState(true);

  const AddMore = () => {
    if (works.length === 6) {
      setWorks([...first6, ...rest]);
      setShowMore(false);
    } else {
      setWorks([...first6]);
      setShowMore(true);
    }
  };

  return (
    <div className={styles.main}>
      <h1 className="big-title">Games I've Developed</h1>
      <div className="works">
        {works.map((work, index) => {
          return <WorkCard key={index} work={work} />;
        })}
      </div>

      {isMoreThan6 && (
        <div className="btn-more">
          <OutlinedButton onClick={AddMore}>
            {showMore ? "Show More" : "Show Less"}
          </OutlinedButton>
        </div>
      )}
    </div>
  );
}

const WorkCard = ({ work }) => {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <img
        className="main-image"
        src={work.image}
        alt=""
        onClick={() => {
          window.open(work.link, "_blank");
        }}
      />

      <div className="body">
        <div className="content">
          <h2>{work.title}</h2>

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

        <div className="description">
          <p>{work.description}</p>
        </div>

        <div className="footer">
          {work.techs.map((tech, index) => {
            return <span key={index}>{tech}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyGames;
