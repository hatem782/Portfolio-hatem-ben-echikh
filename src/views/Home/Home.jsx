import React from "react";
import Globalinfo from "../sections/globalinfo/Globalinfo";

import { useStyles } from "./home.styles";

function Home() {
  const styles = useStyles();
  return (
    <div className={styles.home}>
      <Globalinfo />
    </div>
  );
}

export default Home;
