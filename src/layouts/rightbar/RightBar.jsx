import React from "react";
import { useStyles } from "./rightBar.styles";
import { ContactMe } from "../../functions/contact_me";

function RightBar() {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <p onClick={ContactMe}>hatembenechikh100@gmail.com</p>
      <span className="vertical-line" />
    </div>
  );
}

export default RightBar;
