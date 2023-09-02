import React, { useEffect, useState } from "react";
import { useOnScroll } from "../../hooks/useOnScroll";
import { useStyles } from "./navbar.styles";
import logo from "../../assets/logo/normal.svg";
import OutlinedButton from "../../components/buttons/OutlinedButton/OutlinedButton";
function NavBar() {
  const styles = useStyles();
  let shrink = useOnScroll(20);

  const [open, setopen] = useState(false);

  const handle_open = () => {
    setopen(!open);
  };

  const sections = ["About", "Experience", "Work", "Contact"];
  return (
    <div>
      <div className={`${styles.navbar} ${shrink && styles.shrink}`}>
        <div className="logo">
          <img src={logo} alt="Hatem Ben Echikh" />
        </div>

        <div className={`routes ${open && "opened-navbar"}`}>
          <div className="sections">
            {sections.map((section, index) => {
              return (
                <a key={index}>
                  <span>{`0${index + 1}.`}</span>
                  {section}
                </a>
              );
            })}
          </div>
          <OutlinedButton>Resume</OutlinedButton>
        </div>

        <div
          className={`icon_click ${open && "actived"}`}
          onClick={handle_open}
        >
          <span className="top"></span>
          <span className="mid"></span>
          <span className="bot"></span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
