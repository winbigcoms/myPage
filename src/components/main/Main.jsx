import React, { useEffect, useRef, useState } from 'react';
import styles from './Main.module.scss';
export default function Main(){
  const [mainHeader,setHeader] = useState("");
  function typeAni(){
    let i =0;
    const typing = setInterval(() =>{
      const text = "프론트 엔드 개발자 백승일의 포트폴리오에오"
      if(i<text.length) { 
        setHeader(str => str+text[i]);
        i++
      } else {
        clearInterval(typing);
      }
    },178)}
  useEffect(()=>{
    typeAni()
  },[]);
  return (
    <main className={styles.main}>
      <div className={styles.headingWrap}>
        <div className={styles.headingBox}>
          <h1 className={styles.heading}>{mainHeader}</h1>
        </div>
      </div>
    </main>
  )
}