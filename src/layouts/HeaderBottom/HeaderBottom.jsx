import React from "react";
import style from "./styles.module.scss";
import { FiSearch } from "react-icons/all";
import { NavLink } from "react-router-dom";

function HeaderBottom() {
  return (
    <div className={style.headerBottom}>
      <div className={style.container}>
        <div className={style.links}>
          <div className={style.logo}>E-Content</div>
          <div className={style.linksContainer}>
            <NavLink
              to="eb/classes"
              className={style.link}
              activeStyle={{
                background: "#156a41",
              }}
            >
              Анги
            </NavLink>
            <NavLink
              to="eb/lessons"
              className={style.link}
              activeStyle={{
                background: "#156a41",
              }}
            >
              Хичээл
            </NavLink>
            <NavLink
              to="eb/books"
              className={style.link}
              activeStyle={{
                background: "#156a41",
              }}
            >
              Сурах бичиг
            </NavLink>
          </div>
        </div>
        <div className={style.controls}>
          <div className={style.searchInput}>
            <input
              id="search"
              type="text"
              placeholder="Хайлт хийх утгаа оруулна уу..."
            />
            <button>
              <FiSearch />
            </button>
          </div>
          <button className={style.login}>Нэвтрэх</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
