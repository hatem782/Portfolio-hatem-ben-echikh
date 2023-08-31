import React, { useState } from "react";
import { useStyles } from "./workplaces.styles";
import TitlePart from "../../../components/TitlePart/TitlePart";
import { WhereWorked } from "../../../data/WhereWorked";

function WorkPlaces() {
  const [current, setcurrent] = useState(WhereWorked[0]);

  const styles = useStyles();
  return (
    <div className={styles.main}>
      <TitlePart num={"02."}>Where I’ve Worked</TitlePart>
      <div className="container">
        <div className="left">
          {WhereWorked.map((item, key) => {
            let is_active = current.title === item.title;
            const Choose = () => {
              setcurrent(item);
            };
            return (
              <span
                key={key}
                className={is_active ? "active" : ""}
                onClick={Choose}
              >
                {is_active && <figure />}
                {item.title}
              </span>
            );
          })}
        </div>

        {current && (
          <div className="right" key={current.content.time}>
            <h1>
              {current.content.position} <span>{current.content.company}</span>
            </h1>
            <p>{current.content.time}</p>

            <ul className="descrip">
              {current.content.done.map((item, key) => {
                return (
                  <li key={key}>
                    <span className="point">▹</span> {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkPlaces;
