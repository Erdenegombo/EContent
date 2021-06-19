import styles from "./style.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

import headerLinks from "../../locales/headerTop.json";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {headerLinks.map((el, index) => (
          <div key={index} className={styles.navLinkContainer}>
            <NavLink
              to={el.url}
              className={styles.navLink}
              activeStyle={{ opacity: 1, borderBottom: "2px solid white" }}
            >
              {el.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
