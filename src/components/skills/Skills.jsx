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
              <ul className={styles.detailSkills}>
                <li>웹 표준</li>
                <li>웹 접근성</li>
                <li>SEO</li>
              </ul>
            </li>
            <li>
              <img src="./assets/images/csslogo512.jpg" alt="css3"/>
              <ul className={styles.detailSkills}>
                <li>반응형 웹</li>
                <li>애니메이션</li>
              </ul>
            </li>
            <li>
              <img src="./assets/images/jslogo512.jpg" alt="js Es6+"/>
              <ul className={styles.detailSkills}>
                <li>화살표함수</li>
                <li>실행 컨텍스트</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={styles.skillSet}>
          <h3>FrameWorks / State management</h3>
          <ul className={styles.skillBox}>
            <li>
              <img src="./assets/images/reactlogo512.jpg" alt="react"/>
              <ul className={styles.detailSkills}>
                <li>함수형 컴포넌트</li>
                <li>조건부 랜더링</li>
              </ul>
            </li>
            <li>
              <img src="./assets/images/Reduxlogo.jpg" alt="redux"/>
              <ul className={styles.detailSkills}>
                <li>ducks패턴</li>
                <li>redux-saga</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={styles.skillSet}>
          <h3>Server / Database</h3>
          <ul className={styles.skillBox}>
            <li>
              <span>Express</span>
              <ul className={styles.detailSkills}>
                <li>REST API</li>
                <li>Router</li>
              </ul>
            </li>
            <li>
              <img src="./assets/images/mysqllogo512.jpg" alt="mysql"/>
              <ul className={styles.detailSkills}>
                <li>RDBMS</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}