import React from "react";
import { useStyles } from "./getintouch.styles";
import TitlePart from "../../../components/TitlePart/TitlePart";

import OutlinedButton from "../../../components/buttons/OutlinedButton/OutlinedButton";
import { ContactMe } from "../../../functions/contact_me";

function GetInTouch() {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <span href="https://www.google.com" className="number">
        04. What’s Next?
      </span>
      <h1 className="big-title">Get In Touch</h1>

      <p className="desc">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <div className="btn-more">
        <OutlinedButton onClick={ContactMe}>Say Hello</OutlinedButton>
      </div>
    </div>
  );
}

export default GetInTouch;
