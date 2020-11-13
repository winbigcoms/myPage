import React, { useEffect, useRef } from "react";
import useResizeRander from "../../customHooks/useResizeRander";
import styles from './Projects.module.scss'
import projects from './projectLint'
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
        {projects.map(project=>(
          <li key={project.title} className={styles.project} data-aos="fade-up">
            <a className={styles.projectImg} href={project.mainImg.link} title={project.mainImg.title}>
              <img src={project.mainImg.imgLink} alt={project.mainImg.alt} loading="lazy"/>
            </a>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectName}>{project.title}</h3>
              <p className={styles.projectTime}>
                <span>프로젝트 기간: </span>
                <time dateTime={project.start}>{project.start}</time> ~ <time dateTime={project.end}>{project.end}</time>
              </p>
              <p className={styles.projectPR}>{project.explain}</p>
              <ul className={styles.projectSkill}>
                {project.skills.map(skill=>(<li key={skill}>#{skill}</li>))}
              </ul>
              <div className={styles.linkBox}>
                <ul className={styles.linkList}>
                  {project.links.map(linkData=>(
                    <li key={linkData.title}>
                      <a href={linkData.link} title={linkData.title} className={styles.githubIcon}>
                        <img src={linkData.img} alt={linkData.alt}/>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}