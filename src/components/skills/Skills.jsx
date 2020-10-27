import React from "react";
import styles from './Skills.module.scss'
export default function Skills(){
  return (
    <section className={styles.skills}>
      <h2>My Skills</h2>
      <ul className={styles.skillWrapper}>
        <li className={styles.skillSet}>
          <h3>Web</h3>
          <ul className={styles.skillBox}>
            <li>
              <img src="./assets/images/logo512.jpg" alt="html5"/>
            </li>
            <li>
              <img src="./assets/images/csslogo512.jpg" alt="css3"/>
            </li>
            <li>
              <img src="./assets/images/jslogo512.jpg" alt="js Es6+"/>
            </li>
          </ul>
        </li>
        <li className={styles.skillSet}>
          <h3>FrameWorks</h3>
          <ul className={styles.skillBox}>
            <li>
              <img src="./assets/images/reactlogo512.jpg" alt="react"/>
            </li>
          </ul>
        </li>
        <li className={styles.skillSet}>
          <h3>State management</h3>
          <ul className={styles.skillBox}>
            <li>
              <img src="./assets/images/Reduxlogo.jpg" alt="redux"/>
            </li>
          </ul>
        </li>
        <li className={styles.skillSet}>
          <h3>Server</h3>
          <ul className={styles.skillBox}>
            <li>
              <span>Express</span>
            </li>
          </ul>
        </li>
        <li className={styles.skillSet}>
          <h3>Database</h3>
          <ul className={styles.skillBox}>
            <li>
              <img src="./assets/images/mysqllogo512.jpg" alt="mysql"/>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}