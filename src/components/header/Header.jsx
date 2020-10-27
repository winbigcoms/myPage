import React, { useLayoutEffect, useState } from "react";
import style from "./header.module.scss";

export default function Header(){
  const [navState,setNavState]= useState(true);
  useLayoutEffect(()=>{
   function checkWidth(){
     if(window.innerWidth > 850){
       console.log(navState)
       setNavState(true)
      };
   }
   checkWidth()
   window.addEventListener("resize",checkWidth);
   console.log(window.innerWidth)
   return ()=>{
     window.removeEventListener("resize",checkWidth);
   }
  })
  return(
    <header>
      <h2 className={style.a11yHidden}>메인 네비게이션</h2>
      <button className={navState?style.off:style.on}>
        <span></span>
      </button>
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