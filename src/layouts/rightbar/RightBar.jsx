import React from "react";
import { useStyles } from "./rightBar.styles";

function RightBar() {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <p>hatembenechikh100@gmail.com</p>
      <span className="vertical-line" />
    </div>
  );
}

export default RightBar;
