import React from "react";
import { useStyles } from "./home.styles";

function Home() {
  const styles = useStyles();
  return <div className={styles.home}></div>;
}

export default Home;
