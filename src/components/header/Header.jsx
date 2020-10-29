import React, { useCallback, useLayoutEffect, useState } from "react";
import style from "./header.module.scss";

export default function Header({offsets,height}){
  const [navState,setNavState]= useState(true);
  
  const scrolling = useCallback((e)=>{
    window.scrollTo({
      top:offsets[e.target.id],
      behavior: "smooth"
    })
  },[offsets]);
  
  useLayoutEffect(()=>{
    function checkWidth(){
     if(window.innerWidth > 850){
       setNavState(true)
      };
   }
   checkWidth();
   window.addEventListener("resize",checkWidth);
   return ()=>{
     window.removeEventListener("resize",checkWidth);
   }
  },[height])
  return(
    <header>
      <h2 className={style.a11yHidden}>메인 네비게이션</h2>
      <button className={navState?style.off:style.on}>
        <span></span>
      </button>
      <ul className={style.header} onClick={scrolling}>
        <li id="main">
            Home
        </li>
        <li id="about">
          About
        </li>
        <li id="skills">
          Skills
        </li>
        <li id="project">
          Project
        </li>
        <li id="contact">
          Contact
        </li>
        <li>
          more...?
        </li>
      </ul>
    </header>
  )
}