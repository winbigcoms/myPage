import React from 'react';
import {projectData} from "./projectModalData";

export default function ModalComponent({projectName, modalClose}){
  const selectedProject = projectData.filter(data => data.title === projectName);

  return (
    <article>
        {selectedProject.map(project=>(
          <div key={project.title}>
            <h4>{}</h4>
            <button onClick={modalClose}>X</button>
          </div>
        ))}
    </article>
  )
}