import React from "react";
import LeftBar from "../../layouts/leftbar/LeftBar";
import RightBar from "../../layouts/rightbar/RightBar";
import Globalinfo from "../sections/globalinfo/Globalinfo";
import About from "../sections/about/About";
import WorkPlaces from "../sections/workPlaces/WorkPlaces";
import MoreProjects from "../sections/MoreProjects/MoreProjects";
import MyBuilds from "../sections/MyBuilds/MyBuilds";
import GetInTouch from "../sections/GetInTouch/GetInTouch";

import { useStyles } from "./home.styles";
import MyGames from "../sections/MyGames/MyGames";

function Home() {
  const styles = useStyles();
  return (
    <div className={styles.home}>
      <div className="left-part">
        <LeftBar />
      </div>
      <div className="main-part">
        <Globalinfo />
        <About />
        <WorkPlaces />
        <MyBuilds />
        <MyGames />
        <MoreProjects />
        <GetInTouch />
      </div>
      <div className="right-part">
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
