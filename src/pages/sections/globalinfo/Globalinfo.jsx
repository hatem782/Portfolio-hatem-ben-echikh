import React from "react";
import OutlinedButton from "../../../components/buttons/OutlinedButton/OutlinedButton";
import { useStyles } from "./globalinfo.styles";
import my_resume from "../../../assets/pdf/hatem-ben-echikh.pdf";
import Typewriter from "typewriter-effect";
import TypeWriterComp from "../../../components/TypeWriter/TypeWriter";

function Globalinfo() {
  const styles = useStyles();

  const handle_download_cv = () => {
    window.open(my_resume, "_blank");
  };

  const typeswrites = [
    "Full Stack Js",
    "Java Developer.",
    "Educator on YouTube",
    "Software Engineer.",
    "Freelancer.",
    "NestJs Developer.",
    "Game Developer.",
    "ReactJs Developer.",
    "React Native Developer.",
    "NextJs Developer.",
    "NodeJs Developer.",
    "Full Stack Js Former",
  ];

  return (
    <section className={styles.main}>
      <div>
        <p className="mynameis">Hi, my name is</p>
        <h1 className="name">Hatem Ben Echikh.</h1>
        <h1 className="role">
          <TypeWriterComp strings={typeswrites} />
        </h1>
        <p className="description">
          I am a software engineer specializing in creating exceptional digital
          experiences using the MERN stack. I am actively seeking{" "}
          <span className="important">new challenges </span>
          and <span className="important">opportunities</span> that will allow
          me to expand my skills and deepen my knowledge in the field. I also
          run a YouTube channel called{" "}
          <span>
            <a
              className="important"
              href="https://www.youtube.com/@HayaDev"
              target="_blank"
            >
              @HayaDev
            </a>
          </span>
          , where I teach a variety of topics related to IT and software
          development.
        </p>
        <OutlinedButton onClick={handle_download_cv}>My Resume</OutlinedButton>
      </div>
    </section>
  );
}

export default Globalinfo;
