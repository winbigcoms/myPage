import React, { useLayoutEffect, useState } from 'react';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import GotopBtn from '../components/goTop/GotopBtn';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import "../assets/styles/DefultStyles.scss";
import Opening from '../components/opening/Opening';

export default function Container(){
  const [offsets,setOffsets] = useState({});
  const [height,setWidth]=useState(window.innerHeight);
  useLayoutEffect(()=>{
    function updateSize() {
      setWidth(window.innerHeight);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  },[height])
  return(
    <>
      <Opening/>
      <Header offsets={offsets}/>
      <Main setOffsets={setOffsets}/>
      <About setOffsets={setOffsets}/>
      <Skills setOffsets={setOffsets}/>
      <Projects setOffsets={setOffsets}/>
      <Contact setOffsets={setOffsets}/>
      <GotopBtn/>
    </>
  )
}