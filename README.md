# Footballist

해외축구 리그 정보제공 및 하이라이트 서비스

# 📌 Preview:

[Footballist](https://footballist.netlify.app) 체험하기

# 📌 목적

- 축구를 좋아하는 본인을 위해 Open API를 이용하여 Web App 만들기
- 손쉽게 해외축구 5대리그(영국, 스페인, 이탈리아, 독일, 프랑스) 정보 보기
  - 각 리그별 팀 순위, 득점왕 순위 보기
  - 팀별 선수명단, 현재 순위, 당월 일정 보기
- 최근 일주일 경기의 하이라이트 모아보기

# 📌 사용 기술

- js : React, TypeScript
- css : TailWind
- test : Jest
- deploy : Netlify
- data : Open API
  - [ScoreBat](https://www.scorebat.com/video-api/) 데이터
  - [football-data](https://www.football-data.org/) 데이터

# 😢 고민 정리

- [리액트 프로젝트 디버깅](https://jihobae.notion.site/cb4fcb57745247c8a518bc75f96b9e7b)
- [tailwind의 custom style이 적용되지 않는 문제](https://jihobae.notion.site/netlify-tailwind-css-6afbeaa7473a4d95adc6991b74d8bb7e)
- [football-data open API의 CORS 문제](https://jihobae.notion.site/football-data-api-CORS-7b4c4a342df44dceb71d17b7551506cb)
- 앞으로 추가될 예정입니다.
# WireFrame

[Kakao Oven](https://ovenapp.io/project/Ilc7jkz3TTSzbfujz9fwz1DjiutoIqLf#NRRyI)

# 기능 목록
- 하이라이트
  - 하이라이트 날짜 필터
  - 하이라이트 목록
  - 하이라이트 상세 페이지
- 리그 정보
  - 리그 필터
  - 리그 일정 필터
  - 리그 팀 순위
  - 리그 득점 순위
  - 월별 리그 일정
- 팀 정보
  - 팀 필터
  - 팀 선수 명단
  - 팀 리그 내 순위
  - 팀 당월 일정
- 선수 상세(Popup)
