## api docs

### Docs Page
https://docs.football-data.org/general/v4/index.html

### League Code
|id|league Code|league|
|--|--|--|
|2021|PL|Premier League|
|2014|PD|Primera Division|
|2002|BL1|Bundesliga|
|2019|SA|Serie A|
|2015|FL1|Ligue 1|

### Request Header Options
```
    headers:{
        X-Auth-Token:my-token
    }
```

### Request Url

##### Standings
- `GET https://api.football-data.org/v4/competitions/${PD}/standings`
- 리그 순위 테이블 정보
- `League Code`로 검색

#### Top Scorers
- `GET https://api.football-data.org/v4/competitions/${SA}/scorers`
- 리그 득점 테이블 정보
- `League Code`로 검색

##### Player
- `GET 'https://api.football-data.org/v4/persons/${16275}'`
- 선수 이력 정보. 
- `선수id`로 검색

#### Teams
- `GET https://api.football-data.org/v4/teams/${90}`
- `팀id`로 검색

#### Teams' match
- `GET https://api.football-data.org/v4/teams/${583}/matches?dateFrom=${2021-07-01}&dateTo=${2022-01-01}`
- `팀id`와 `시작~끝 기간(yyyy-mm-dd)`으로 검색
