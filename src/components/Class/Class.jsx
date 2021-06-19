import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { FaCircle } from "react-icons/all";
import Title from "../Title/Title";
import classes from "../../locales/classes.json";
import lessons from "../../locales/lessons.json";
import lessonSchedules from "../../locales/lessonSchedule.json";
import LessonSchedule from "../LessonSchedule/LessonSchedule";

function Class() {
  //className={style.container}
  return (
    <div>
      <Title title="Ангиуд" subtitle="Та өөрт тохирох ангиа сонгоно уу." />
      <div className={style.classLevel}>
        <div className={style.classLinks}>
          {classes.map((el, index) => (
            <NavLink
              key={index}
              to={`/eb/classes/${el.url}`}
              className={style.link}
              activeStyle={{ backgroundColor: "#ff6937", color: "#fff" }}
            >
              {el.name.substring(0, 4)}
              <br /> {el.name.substring(4, el.name.length)}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={style.lessonsContainer}>
        <Title title="Теле хичээлүүд" subtitle="1-р ангийн теле хичээлүүд" />
        <div className={style.lessonsList}>
          {lessons.map((el, index) => (
            <NavLink
              key={index}
              to={`/eb/classes/1/${el.url}`}
              className={style.lessonLink}
              activeStyle={{
                color: "#05a357",
                border: "2px solid #05a357",
                boxShadow: "0 4px 8px 0 rgb(0 0 0 / 8%)",
              }}
            >
              <FaCircle size="40" />
              <span className={style.lessonName}>{el.name}</span>
            </NavLink>
          ))}
        </div>
        <Title title="Хичээлийн хуваарь" subtitle="2021.02.15 - 2021.02.19" />
        <div className={style.schedules}>
          {lessonSchedules.map((el, index) => (
            <LessonSchedule schedule={el} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Class;
