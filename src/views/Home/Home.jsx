import React from "react";
import LeftBar from "../../layouts/leftbar/LeftBar";
import RightBar from "../../layouts/rightbar/RightBar";
import Globalinfo from "../sections/globalinfo/Globalinfo";

import { useStyles } from "./home.styles";

function Home() {
  const styles = useStyles();
  return (
    <div className={styles.home}>
      <div className="left-part">
        <LeftBar />
      </div>
      <div className="main-part">
        <Globalinfo />
      </div>
      <div className="right-part">
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
