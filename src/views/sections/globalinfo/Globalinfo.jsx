import React from "react";
import OutlinedButton from "../../../components/buttons/OutlinedButton/OutlinedButton";

import { useStyles } from "./globalinfo.styles";

function Globalinfo() {
  const styles = useStyles();
  return (
    <section className={styles.main}>
      <p className="mynameis">Hi, my name is</p>
      <h1 className="name">Hatem Ben Echikh.</h1>
      <h1 className="role">I build things for the web.</h1>
      <p className="description">
        I’m a software engineer specializing in building exceptional digital
        experiences using the <span className="important">MERN</span> stack.
        Currently, I’m a <span className="important">freelancer</span> and i am
        looking for a new opportunitys to work as a part-time web developer
      </p>
      <OutlinedButton>Check out my course!</OutlinedButton>
    </section>
  );
}

export default Globalinfo;
