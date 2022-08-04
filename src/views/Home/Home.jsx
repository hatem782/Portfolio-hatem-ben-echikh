import React from "react";
import NavBar from "../../layouts/navbar/NavBar";
import { useStyles } from "./home.styles";

function Home() {
  const styles = useStyles();
  return (
    <div className={styles.home}>
      <NavBar />
    </div>
  );
}

export default Home;
