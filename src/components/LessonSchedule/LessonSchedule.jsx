import React from "react";
import Schedule from "./Schedule/Schedule";
import style from "./style.module.scss";

function LessonSchedule(props) {
  const schedule = props.schedule;
  return (
    <div>
      <div
        className={
          style.dateBase +
          " " +
          (schedule.date !== "02.17" ? style.date : style.dateActive)
        }
      >
        {schedule.week + " - " + schedule.date}
      </div>
      <div>
        {schedule.lessons.length > 0 &&
          schedule.lessons.map((el, index) => (
            <Schedule key={index} lesson={el} />
          ))}
      </div>
    </div>
  );
}

export default LessonSchedule;
