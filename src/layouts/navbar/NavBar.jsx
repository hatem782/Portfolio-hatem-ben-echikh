import React from "react";
import { useStyles } from "./navbar.styles";
import logo from "../../assets/logo/normal.svg";
import OutlinedButton from "../../components/buttons/OutlinedButton/OutlinedButton";

function NavBar() {
  const styles = useStyles();
  return (
    <div className={styles.navbar}>
      <div className="logo">
        <img src={logo} alt="Hatem Ben Echikh" />
      </div>
      <div className="routes">
        <OutlinedButton>Resume</OutlinedButton>
      </div>
    </div>
  );
}

export default NavBar;
