import React from "react";
import TitlePart from "../../../components/TitlePart/TitlePart";

import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.jpg";

import { useStyles } from "./about.styles";

function About() {
  const styles = useStyles();
  const skills = [
    "JavaScript (ES6+)",
    "ReactJs",
    "Redux",
    "Next.js",
    "Angular",
    "Node.js",
    "Socket.io",
    "MongoDB",
    "Firebase",
  ];
  return (
    <div className={styles.about} id="About">
      <TitlePart num={"01."}>About Me</TitlePart>
      <div className="container">
        <div className="description">
          <p>
            As a software engineering student specializing at ISAMM University,
            I am deeply passionate about the world of technology and software
            development. My journey as a software engineer has been greatly
            influenced by my love for creating robust platforms, and my tool of
            choice is the versatile <span className="imp"> MERN </span> stack,
            which comprises MongoDB, Express.js, React.js, and Node.js.
          </p>
          <p>
            Over the past two years, I have had the privilege of gaining
            hands-on experience through freelancing and internships with
            reputable startups such as <span className="imp">Pikoro</span>,{" "}
            <span className="imp">Qramer</span>, and{" "}
            <span className="imp">Xsustain</span>. These opportunities have
            exposed me to challenging and impactful projects, providing me with
            valuable insights into the industry.
          </p>
          <p>
            One aspect of software development that truly ignites my enthusiasm
            is crafting <span className="imp">complex UI</span> platforms. I
            find immense satisfaction in intergating user interfaces that not
            only meet but exceed user expectations. This passion drives me to
            continuously improve my skills and explore innovative approaches to
            front-end technologies.
          </p>
          <p>Here are a few technologies I’ve been working with recently : </p>
          <ul className="skills">
            {skills.map((skill, key) => {
              return (
                <li key={key}>
                  <span className="point">▹</span> {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="img-part">
          <div className="img-container">
            <div
              className="img"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="box-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
