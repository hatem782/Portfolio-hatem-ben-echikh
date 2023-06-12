import React from "react";
import { useStyles } from "./workplaces.styles";
import TitlePart from "../../../components/TitlePart/TitlePart";

function WorkPlaces() {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <TitlePart num={"02."}>Where I’ve Worked</TitlePart>
    </div>
  );
}

export default WorkPlaces;
