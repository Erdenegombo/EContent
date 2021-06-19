import React from "react";
import style from "./style.module.scss";

function Title(props) {
  return (
    <div className={style.titlesContainer}>
      <span className={style.title}>{props.title}</span>
      <span className={style.subtitle}>{props.subtitle}</span>
    </div>
  );
}

export default Title;
