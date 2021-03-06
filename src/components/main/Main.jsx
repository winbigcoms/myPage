import React, { useEffect, useRef, useState } from 'react';
import styles from './Main.module.scss';
export default function Main({setOffsets}){
  const [mainHeader,setHeader] = useState("");
  const main = useRef(null);
  
  function typeAni(){
    let i =0;
    const typing = setInterval(() =>{
      const text = "프론트 엔드 개발자 백승일의 포트폴리오에오!"
      if(i<text.length) { 
        setHeader(str => str+text[i]);
        i++
      } else {
        clearInterval(typing);
      }
    },178)
  }

  useEffect(()=>{
    typeAni();
    setOffsets(state=>({...state,[main.current.id]:main.current.offsetTop}));
  },[setOffsets]);
  return (
    <main className={styles.main} ref={main} id="main">
      <div className={styles.headingWrap}>
          <h2 className={styles.heading}>{mainHeader}</h2>
      </div>
    </main>
  )
}