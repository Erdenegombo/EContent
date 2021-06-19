import React from "react";
import { FaCircle } from "react-icons/fa";
import style from "./style.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <span className={style.logo}>E-Content</span>
      <span className={style.description}>
        Боловсролын мэдээллийн технологийн төв хөгжүүлэв. &copy; БШУЯ
      </span>
      <div className={style.social}>
        <FaCircle />
        <FaCircle />
        <FaCircle />
      </div>
    </div>
  );
}

export default Footer;
