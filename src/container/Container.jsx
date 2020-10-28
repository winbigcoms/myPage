import React, { useState } from 'react';
import About from '../components/about/About';
import GotopBtn from '../components/goTop/GotopBtn';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

export default function Container(){
  const [offsets,setOffsets] = useState({});
  return(
    <>
      <Header offsets={offsets}/>
      <Main setOffsets={setOffsets}/>
      <About/>
      <Skills/>
      <Projects setOffsets={setOffsets}/>
      <GotopBtn/>
    </>
  )
}