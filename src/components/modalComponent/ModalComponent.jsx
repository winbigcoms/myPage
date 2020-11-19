import React from 'react';
import styled, { keyframes } from 'styled-components';
import {projectData} from "./projectModalData";
import styles from './madalComponent.module.scss'
const showModal = keyframes`
  0%{
    opacity:0
  }
  100%{
    opacity:1
  }
`

const Article = styled.article`
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  animation: ${showModal} 1s both;
`
const CloseBtn = styled.button`
  position:fixed;
  top:18%;
  right:15%;
  width: 3%;
  height: 3%;
  padding: 0;
  border: 0 ;
  background-color: inherit;
  cursor:pointer;
  span{
    border-radius:5px;
    position:absolute;
    width: 100%;
    height: 3px;
    display:inline-block;
    background-color:black;
    top:40%;
    left:0;
    &:nth-child(1){
      transform: rotate(45deg);
    }
    &:nth-child(2){
      transform: rotate(135deg);
    }
  };
  @media(max-width: 800px){
    width: 5%;
    top: 12%
  }
`

export default function ModalComponent({projectName, modalClose}){
  const selectedProject = projectData.filter(data => data.title === projectName);

  const outerClick = e=>{
    if(e.target.matches("#layer")) modalClose()
  }

  return (
    <Article onClick={outerClick} id="layer">
        {selectedProject.map(project=>(
          <div key={project.title} className={styles.modalWrapper}>
            <h4>{project.title}</h4>
            <div className={styles.intro}>
              <h5>🛠프로젝트 설명</h5>
              <p>소개: {project.explain}</p>
              <p className={styles.skills}>stack: {project.skills.map(skill=>(<span key={skill}>{"#"+skill} </span>))}</p>
              <p>
                <span>프로젝트 기간: </span>
                <span className={styles.timeBox}>
                  <time dateTime={project.start}>{project.start}</time> ~ <time dateTime={project.end}>{project.end}</time>
                </span>
              </p>
              <p>프로젝트 인원: {project.workers}명</p>
            </div>
            <div>
                <ul className={styles.linkBox}>
                  {project.links.map(linkData=>(
                    <li key={linkData.title}>
                      <a href={linkData.link} target="_blank" rel="noreferrer" title={linkData.title}>
                        <img src={linkData.img} alt={linkData.alt}/>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            <div>
              <h5>담당기능</h5>
              <ul>
                {project.works.map((work,idx)=>(<li key={idx}>{idx+1}. {work}</li>))}
              </ul>
            </div>
            <div>
              <h5>프로젝트 중점</h5>
              <ul>
                {project.projectPoint.map((work,idx)=>(<li key={idx}>{idx+1}. {work}</li>))}
              </ul>
            </div>
            <div>
              <h5>🙄아쉬운점</h5>
              <ul>
                {project.miss.map((work,idx)=>(<li key={idx}>{idx+1}. {work}</li>))}
              </ul>
            </div>
            <div>
              <h5>😏개선점</h5>
              <ul>
                {project.refactorying.map((work,idx)=>(<li key={idx}>{idx+1}. {work}</li>))}
              </ul>
            </div>
            <CloseBtn onClick={modalClose}>
              <span></span>
              <span></span>
            </CloseBtn>
          </div>
        ))}
    </Article>
  )
}