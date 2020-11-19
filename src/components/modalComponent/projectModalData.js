export const projectData = [
  {
    title:"EOTTEA CINEMA",
    start : "2020-08-24",
    end:"2020-09-23",
    explain:"영화 정보 확인 및 예매 사이트",
    skills : ["react","redux","node.js(express)","mysql"],
    workers:3,
    works:[
      "웹 페이지 구현(영화 선택, 좌석 선택, 예매, 영화시간표)"
      ,"웹서버, DB설계 및 RESTAPI구현"
      ,"웹 및 서버 배포"
    ],
    projectPoint:[
      "애자일 스크럼을 진행하여 github project를 이용한 백로그와 데일리 스크럼진행"
      ,"module.scss를 이용하여 스타일링"
      ,"redux의 경우 ducks패턴을 이용하여 가독성을 높인다."
      ,"react.memo, useCallback을 이용한 최적화를 통해 재랜더링을 줄임."
    ],
    miss:[
      "시간에 쫓겨 코드리뷰 등의 퀄리티 있는 코드를 짜기위한 시간이 없었다."
      ,"백엔드 개발자가 없어서 본인이 직접 서버와 DB작업을 하면서 프론트 개발 시간도 줄고 퀄리티 있는 서버나 DB가 아니어서 요청시간에도 영향이 간 것 같다."
      ,"미디어쿼리를 이용하여 모바일 뷰를 구성하지 못한 점."
      ,"최적화를 위해 react.memo나 useCallback을 사용했으나 먼저 사용하지 않은 성능 측정 후 사용함으로 성능 비교이후 사용해야 했어야 했는데 섣부른 사용을 함"
      ,"페이지 기획 단계에서 scss의 이점을 살리지 못했음"
    ],
    refactorying:[
      "서버가 느린 관계로 중간중간 화면에 사용자를 위한 안내 화면이나 전환효과"
      ,"ccs에서 %나 vh단위를 이용한 모바일 뷰의 구현"
      ,"최적화는 기존 코드의 성능 측정 이후 진행하기"
      ,"반복되는 스타일 코드를 기본 스타일로 빼서 코드를 줄임"
    ],
    links:[
      {
        link:"https://github.com/winbigcoms/EottaeCinema",
        title:"옷떼시네마 깃허브로 이동",
        img:"./assets/images/github.png",
        alt:"깃허브 아이콘"
      },
      {
        link:"https://eottaecinema.herokuapp.com/",
        title:"프로젝트 결과물 보러가기",
        img:"./assets/images/logo.png",
        alt:"어때시네마 배포 페이지 바로가기"
      },
      {
        link:"https://velog.io/@winbigcoms/%ED%8C%A8%EC%8A%A4%ED%8A%B8-%EC%BA%A0%ED%8D%BC%EC%8A%A4-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%8A%A4%EC%BF%A8-%EC%B5%9C%EC%A2%85-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0",
        title:"어때시네마 프로젝트 과정/후기 보러가기",
        img:"./assets/images/velog.jpg",
        alt:"velog 프로젝트 과정/후기 보러가기"
      }
    ]
  },
  {
    title:"COVID LIVE",
    start : "2020-08-14",
    end:"2020-08-14",
    explain:"공공데이터 포털의 코로나 api를 이용한 지역별 코로나 확진자를 보여주는 웹 페이지",
    skills : ["react","redux","redux-saga","openAPI"],    
    workers:3,
    works:[
      "코로나 openAPI를 연동하여 지역별 확진자 데이터 테이블 그리기"
      ,"svg파일을 이용하여 지역별 확진자를 농도로 구분"
      ,"chart.js를 이용하여 누적 확진자를 차트로 보여주기"
    ],
    projectPoint:[
      "공공API를 이용한 시도별 코로나 누적 감염자의 데이터 시각화"
      ,"redux를 ducks패턴을 이용하여 가독성을 높임"
    ],
    miss:[
      "직접 제작한 API가 아닌 openAPI를 이용하게 되면서 필요한 데이터만을 받기 힘듬"
      ,"api요청시 데이터를 가져오는데 시간이 걸려 table태그를 사용한 도표에 랜더링이 느림"
      ,"모바일 뷰도 구현이 되었으나 모바일의 ui는 부족하다 느낌"
    ],
    refactorying:[
      "api요청시 통신시간동안 table에 대체 이미지나 텍스트를 사용"
      ,"modal이나 팝업 창을 이용한 모바일 뷰의 개선"
    ],
    links:[
      {
        link:"https://github.com/winbigcoms/covidLive",
        title:"COVID LIVE 깃허브로 이동",
        img:"./assets/images/github.png",
        alt:"깃허브 아이콘"
      },
      {
        link:"https://velog.io/@winbigcoms/1%EC%9D%BC-%ED%95%B4%EC%BB%A4%ED%86%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-covidLive-%ED%9B%84%EA%B8%B0",
        title:"covid live 후기 보러가기",
        img:"./assets/images/velog.jpg",
        alt:"프로젝트 과정/후기 보러가기"
      }
    ]
  }
]