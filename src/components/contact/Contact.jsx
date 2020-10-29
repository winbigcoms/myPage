import React, { useEffect, useRef } from 'react'
import useResizeRander from '../../customHooks/useResizeRander';
import styles from './contact.module.scss'
export default function Contact({setOffsets}){
  const contact = useRef(null)
  useResizeRander(setOffsets,contact)
  useEffect(()=>{
    setOffsets(state=>({...state,[contact.current.id]:contact.current.offsetTop}));
  },[setOffsets]);
  return (
    <section id="contact" ref={contact} className={styles.contact}>
      <h2 className={styles.contactHeading}>Contact</h2>
      <p className={styles.contactEmail}>Email : bigcoms6290@gmail.com</p>
    </section>
  )
}