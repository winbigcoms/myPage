import React from 'react';
import styles from './About.module.scss';

export default function About(){
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutHead}> 
        <h2>About "나"</h2>
      </div>
      <div className={styles.aboutTextWrapper}>
        <h3>기본이 탄탄하고 커뮤니케이션 역량이 있는 프론트엔드 개발자</h3>
        <p>
          명지대 철학과 재학중, 내가 진짜 해보고 싶은걸 해보자 해서 시작한 프로그래밍에 재미를 느껴 웹 프론트 엔드 개발자를 준비해왔습니다.
          학교 컴퓨터 학과의 프론트 엔드 수업도 수강하고 졸업 후 패스트 캠퍼스에서 프론트 엔드를 배우면서 외부로 사용자의 시각을 만족시키는 애니메이션과
          내면으로 서버와 통신하며 동작하는 웹을 만드는 프론트 엔드에 더 매력을 느끼게 되었고 지금에 이르렀습니다.
        </p>
        <p>
          react, redux등 많은 것을 배우면서도 기본이 되는 html, css를 잊지 않는 기초가 탄탄한 개발자가 되어 기술의 변화에도 흔들리지 않는 개발자가 되는 것을 목표로
          열심히 공부하고 있습니다!
        </p>
      </div>
    </section>
  )
}