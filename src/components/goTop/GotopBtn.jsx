import React, { useEffect, useState } from 'react';
import styles from "./Gotop.module.scss";
export default function GotopBtn(){
  const [isSee,setVisible] = useState(false);
  
  function scrolled(){
    if(window.pageYOffset > 300){
      setVisible(state=>true);
    }else{
      setVisible(state=>false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",scrolled);
    return ()=>{
      window.removeEventListener("scroll",scrolled);
    }
  },[])

  function goTop(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <button className={isSee? [styles.btn,styles.active].join(" ") :styles.btn} onClick={goTop}></button>
  )
}