import React from "react";
import TitlePart from "../../../components/TitlePart/TitlePart";

import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.jpg";

import { useStyles } from "./about.styles";

function About() {
  const styles = useStyles();
  const skills = [
    "TypeScript",
    "ReactJs",
    "Redux",
    "NextJs",
    "React Native",
    "NestJs",
    "Java",
    "Spring Boot",
    "Prisma",
    "Tailwind",
    "Docker",
    "Nginx",
    "Certbot",
    "Github Workflow",
    "Socket.io",
    "ExpressJs",
    "MongoDB",
    "Firebase",
    "SQL",
    "Unity",
    "C#",
    "ThreeJs",
    "i18n",
    "Twilio",
    "Nylas",
    "Arduino",
    "ESP32",
  ];
  return (
    <div className={styles.about} id="About">
      <TitlePart num={"01."}>About Me</TitlePart>
      <div className="container">
        <div className="description">
          <p>
            As a software engineer with a background from{" "}
            <span className="imp">ISAMM University</span>, I am deeply
            passionate about technology, product-building, and user-focused
            development. Over the past three years, through freelancing,
            internships, and a year at <span className="imp">Xsustain</span>,
            I’ve had the opportunity to work on a range of impactful projects
            across startups like <span className="imp">CodeCooperation</span>,{" "}
            <span className="imp">Pikoro</span>, and{" "}
            <span className="imp">Qramer</span>.
          </p>
          <p>
            At <span className="imp">Xsustain</span>, I expanded my expertise by
            building full-stack applications using{" "}
            <span className="imp">Next.js</span> and{" "}
            <span className="imp">Spring Boot</span>, managing projects
            end-to-end — from development to deployment. I played a key role in
            developing an AI-powered audio merging tool (instrumental + vocal),
            architecting secure CI/CD pipelines, and delivering an enterprise
            CRM with Twilio and Nylas integrations. I also led communication
            with clients and handled hosting for several production systems.
          </p>
          <p>
            Outside of work, I run a{" "}
            <span className="imp">
              YouTube channel{" "}
              <span>
                <a
                  className="imp"
                  href="https://www.youtube.com/@HayaDev"
                  target="_blank"
                >
                  @HayaDev
                </a>
              </span>
            </span>{" "}
            where I share what I’ve learned through university, professional
            experience, and self-study — all in Arabic. I create content focused
            on <span className="imp">game development</span>,{" "}
            <span className="imp">web development</span>, and{" "}
            <span className="imp">IoT projects</span>, aiming to make
            programming more accessible for Arabic-speaking beginners. My goal
            is to demystify tech topics and empower others to start building
            real-world applications with confidence.
          </p>
          {/* <p>
            One of the aspects of software development that truly excites me is
            crafting complex, intuitive UI platforms. I thrive when turning
            design concepts into seamless, scalable interfaces — especially with
            tools like React Native and Next.js. My goal is always to merge
            clean architecture with user-centric design.
          </p> */}
          <p>Here are a few technologies I’ve been working with recently: </p>
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
