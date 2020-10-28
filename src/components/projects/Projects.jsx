import React, { useEffect, useRef } from "react";
import styles from './Projects.module.scss'

export default function Projects({setOffsets}){
  const project = useRef(null)
  useEffect(()=>{
    setOffsets(state=>({...state,[project.current.id]:project.current.offsetTop}));
  },[setOffsets]);
  return(
    <section className={styles.projects} ref={project} id="project">
      <h2 className={styles.projectsHeading}>Projects</h2>
      <ul className={styles.projectsBox}>
        <li className={styles.project}>
          <h3>EOTTEA CINEMA</h3>
          <div>
            <a href="https://eottaecinema.herokuapp.com/">
              <img src="" alt=""/>
            </a>
          </div>
          <div>
            <ul>
              <li>프로젝트 발표 PPT</li>  
              <li>github주소</li>  
              <li>시연영상</li>  
            </ul>  
          </div>
        </li>
        <li className={styles.project}>
          <h3>EOTTEA CINEMA</h3>
          <div>
            <a href="https://eottaecinema.herokuapp.com/">
              <img src="" alt=""/>
            </a>
          </div>
          <div>
            <ul>
              <li>프로젝트 발표 PPT</li>  
              <li>github주소</li>  
              <li>시연영상</li>  
            </ul>  
          </div>
        </li>
      </ul>
    </section>
  )
}