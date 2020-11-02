import React, { useEffect, useRef } from "react";
import useResizeRander from "../../customHooks/useResizeRander";
import styles from './Projects.module.scss'
import "aos/dist/aos.css"

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
        <li className={styles.project} data-aos="fade-up">
          <a className={styles.projectImg} href="https://eottaecinema.herokuapp.com/" title="옷떼시네마 페이지로 이동">
            <img src="./assets/images/ET.png" alt="옷떼시네마페이지뷰"  loading="lazy"/>
          </a>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName}>EOTTEA CINEMA</h3>
            <p className={styles.projectTime}><span>프로젝트 기간: </span><time dateTime="2020-08-24">2020.08.24</time> ~ <time dateTime="2020-09-23">2020.09.23</time></p>
            <p className={styles.projectPR}>React + Redux + node.js(Express) + Mysql을 이용하여 로그인, 영화예매, 영화 후기 등의 기능을 구현한 롯데시네마 클론코딩페이지</p>
            <ul className={styles.projectSkill}>
              <li>#React</li>
              <li>#Redux</li>
              <li>#node.js(express)</li>
              <li>#mysql</li>
            </ul>
            <div className={styles.linkBox}>
              <a href="https://github.com/winbigcoms/EottaeCinema"title="옷떼시네마 깃허브로 이동" className={styles.githubIcon}>
                <img src="./assets/images/github.png" alt="깃허브 아이콘"/>
              </a>
              <a title="velog 프로젝트 과정/후기 보러가기" href="https://velog.io/@winbigcoms/%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%8A%A4%EC%BF%A8-%EC%B5%9C%EC%A2%85-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0">
                <img src="./assets/images/velog.jpg" alt="velog 프로젝트 과정/후기 보러가기"/>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}