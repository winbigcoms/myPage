import React, { useCallback, useLayoutEffect, useState } from "react";
import style from "./header.module.scss";

export default function Header({offsets}){
  // 뷰포트에 따라 버튼 보이기
  const [navBtnState,setNavBtnState]= useState(true);
  // 모바일에서 네비게이션 보이기
  const [navVisibleState,setNavVisible] = useState(true);

  const scrolling = useCallback((e)=>{
    window.scrollTo({
      top:offsets[e.target.id],
      behavior: "smooth"
    })
  },[offsets]);
  
  useLayoutEffect(()=>{
    function checkWidth(){
     if(window.innerWidth > 850){
      setNavBtnState(()=>true);
      setNavVisible(()=>true);
     }else{
        setNavVisible(()=>false);
        setNavBtnState(() => false);
      };
    }
   checkWidth();
   window.addEventListener("resize",checkWidth);
   return ()=>{
     window.removeEventListener("resize",checkWidth);
   }
  },[])

  const toggleNav =useCallback((e)=>{
    setNavVisible(state=>!state);
  },[])
  return(
    <header className={navBtnState?style.off:style.on}>
      <h2 className="a11yHidden">메인 네비게이션</h2>
      <button className={navVisibleState ? style.openBtn:style.defaultBtn} onClick={toggleNav}>
        <span className={style.buger}></span>
        <span className={style.buger}></span>
      </button>
      <ul className={navVisibleState ? [style.header,style.openNav].join(" "): style.header} onClick={scrolling}>
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
          <a href="https://github.com/winbigcoms?tab=repositories" title="백승일 깃허브로 이동!">
            more...?
          </a>
        </li>
      </ul>
    </header>
  )
}