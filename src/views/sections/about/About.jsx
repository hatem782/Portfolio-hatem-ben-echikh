import React from "react";
import TitlePart from "../../../components/TitlePart/TitlePart";

import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.jpg";

import { useStyles } from "./about.styles";

function About() {
  const styles = useStyles();
  return (
    <div className={styles.about}>
      <TitlePart num={"01."}>About Me</TitlePart>
      <div className="container">
        <div className="description">
          <p>
            Hello! My name is Hatem Ben Echikh and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2019 when I decided to make games using just html,css and js to
            share them with friends
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at
            Orenda (a club in my university) ... a start-up, a huge corporation,
            and a student-led design studio. My main focus these days is
            building accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p>Here are a few technologies I’ve been working with recently : </p>
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
