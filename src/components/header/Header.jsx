import React from "react";
import style from "./header.module.scss";

export default function Header(){
  return(
    <header>
      <ul className={style.header}>
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          Skills
        </li>
        <li>
          Project
        </li>
        <li>
          Contact
        </li>
        <li>
          more...?
        </li>
      </ul>
    </header>
  )
}