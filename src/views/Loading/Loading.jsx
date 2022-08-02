import React from "react";
import { useStyles } from "./loading.styles";
// import animatedLogo from "../../assets/logo/AnimatedLogo.svg";
import logo from "../../assets/logo/normal.svg";

function Loading() {
  const styles = useStyles();
  return (
    <div className={styles.loading}>
      {/* <object
        className="animated-logo"
        type="image/svg+xml"
        data={animatedLogo}
      ></object> */}
      <img className={styles.logo} src={logo} />
    </div>
  );
}

export default Loading;
