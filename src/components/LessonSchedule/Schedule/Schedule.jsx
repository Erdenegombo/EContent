import React from "react";
import style from "./style.module.scss";

function Schedule(props) {
  const lesson = props.lesson;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <span>{lesson.broadCast}</span>
        <span>{lesson.time}</span>
      </div>
      <div className={style.lessonName}>{lesson.lessonName}</div>
    </div>
  );
}

export default Schedule;
