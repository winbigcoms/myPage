import React, { useEffect, useRef } from "react";
import useResizeRander from "../../customHooks/useResizeRander";
import styles from './Projects.module.scss'

export default function Projects({setOffsets}){
  const project = useRef(null)
  useResizeRander(setOffsets,project)
  useEffect(()=>{
    setOffsets(state=>({...state,[project.current.id]:project.current.offsetTop}));
  },[setOffsets]);
  return(
    <section className={styles.projects} ref={project} id="project">
      <h2 className={styles.projectsHeading}>Projects</h2>
      <ul className={styles.projectsBox}>
        <li className={styles.project}>
          <a className={styles.projectImg} href="https://eottaecinema.herokuapp.com/" title="옷떼시네마 페이지로 이동">
            <img src="./assets/images/ET.png" alt="옷떼시네마페이지뷰"/>
          </a>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName}>EOTTEA CINEMA</h3>
            <p>프로젝트 기간: <time dateTime="2020-08-24">2020.08.24</time> ~ <time dateTime="2020-09-23">2020.09.23</time></p>
            <p className={styles.projectPR}>영화 예매 사이트 롯데시네마 클론 코딩.</p>
            <ul className={styles.projectSkill}>
              <li>#React</li>
              <li>#Redux</li>
              <li>#node.js(express)</li>
              <li>#mysql</li>
            </ul>
            <a href="https://github.com/winbigcoms/EottaeCinema">
              <img src="./assets/images/github.png" alt="깃허브 아이콘"/>
            </a>
          </div>
        </li>
      </ul>
    </section>
  )
}