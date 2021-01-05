import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./header.module.scss";

export default function Header({offsets}){
  // 뷰포트에 따라 버튼 보이기
  const [navBtnState,setNavBtnState]= useState(true);
  // 모바일에서 네비게이션 보이기
  const [navVisibleState,setNavVisible] = useState(true);
  // 데스크탑에서 모바일 뷰로 변경될 시 네비 애니메이션이 보이는 걸 방지하기 위한 버튼 클릭 횟수       
  const firstClick = useRef(0);
// 섹션 이동
  const scrolling = useCallback((e)=>{
    window.scrollTo({
      top:offsets[e.target.id],
      behavior: "smooth"
    })
    // const moveId = e.target.id.slice(0,e.target.id.length-1);
    // const targetEle = document.querySelector(`#${moveId}`);
    // targetEle.scrollIntoView({
    //   behavior:"smooth",
    //   block:"start"
    // })
  },[offsets]);
  // 뷰포트 변경시 모바일 뷰 해제
  useLayoutEffect(()=>{
    function checkWidth(){
     if(window.innerWidth > 850){
      setNavBtnState(()=>true);
      setNavVisible(()=>true);
      firstClick.current = 0;
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
// 모바일 뷰에서 네비 외부 클릭시 닫히는 로직
  useEffect(()=>{
    function closeNavMobile(e){
      if(navVisibleState && !e.target.matches(".header")){
        setNavVisible(()=>false);
      }
    }
    window.addEventListener("click",closeNavMobile);
    // 데스크탑 뷰가 되면 제거
    if(navBtnState){
      window.removeEventListener("click",closeNavMobile);
    }
    return ()=>{
      window.removeEventListener("click",closeNavMobile);
    }
  },[navVisibleState])
// 최초 네비 버튼 클릭 감지, 최초 네비게이션 섹션은 display:none상태, 누르면 바뀜
  const toggleNav =useCallback((e)=>{
    firstClick.current++;
    setNavVisible(state=>!state);
  },[])

  return(
    <header className={navBtnState?style.off:style.on}>
      <h2 className="a11yHidden">메인 네비게이션</h2>
      <button className={navVisibleState ? style.openBtn:style.defaultBtn} onClick={toggleNav} aria-label="mobileNaviControlButton">
        <span className={style.buger}></span>
        <span className={style.buger}></span>
      </button>
      <ul className={navVisibleState ? [style.header,style.openNav].join(" "): firstClick.current ? style.header :style.firstHeader} onClick={scrolling}>
        <li id="main" tabIndex="0">
            Home
        </li>
        <li id="about" tabIndex="0">
          About
        </li>
        <li id="skills"tabIndex="0"> 
          Skills
        </li>
        <li id="project" tabIndex="0">
          Project
        </li>
        <li id="contact" tabIndex="0">
          Contact
        </li>
        <li >
          <a href="https://github.com/winbigcoms?tab=repositories" title="백승일 깃허브로 이동!">
            more...?
          </a>
        </li>
      </ul>
    </header>
  )
}