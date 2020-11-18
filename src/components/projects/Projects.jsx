import React, { useEffect, useRef, useState } from "react";
import useResizeRander from "../../customHooks/useResizeRander";
import styles from './Projects.module.scss'
import projects from './projectLint'
import "aos/dist/aos.css"
import { ModalContainer } from "../../container/modalContianer";
export default function Projects({setOffsets}){
  const project = useRef(null);
  const [selectedProject, setModal] = useState("");
  const modalClose = ()=>{
    setModal(state=>"");
    return 
  }
  useResizeRander(setOffsets,project);

  useEffect(()=>{
    setOffsets(state=>({...state,[project.current.id]:project.current.offsetTop}));
  },[setOffsets]);
  
  const openProjectModal = e=>{
    if(!e.target.id) return;
    console.log("1")
    setModal(state=>e.target.id);
  }

  return(
    <section className={styles.projects} ref={project} id="project">
      <h2 className={styles.projectsHeading}>Projects</h2>
      <ul className={styles.projectsBox} onClick={openProjectModal}>
        {projects.map(project=>(
          <li key={project.title} className={styles.project} data-aos="fade-up">
            <figure className={styles.projectImg} id={project.title}  href={project.mainImg.link}>
              <img src={project.mainImg.imgLink} alt={project.mainImg.alt} loading="lazy" title={project.mainImg.title}/>
            </figure>
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
                      <a href={linkData.link} target="_blank" rel="noreferrer" title={linkData.title} className={styles.githubIcon}>
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
      {selectedProject?<ModalContainer projectName={selectedProject} modalClose={modalClose}/>:<></>}
    </section>
  )
}