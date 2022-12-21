export type PAGE_TYPE = 'home' | 'league' | 'team' | 'highlight';

export const PAGE_PATH = {
  home: '/',
  league: '/league',
  team: '/team',
  highlight: '/highlights/:id',
};

export const PAGE_NAME = {
  home: 'HighLights',
  league: 'League',
  team: 'Team',
  highlight: 'Highlight',
};

export const PAGES = ['home', 'league', 'team'] as PAGE_TYPE[];

export const REST_DATE = 'rest';

export const TABLE_HEADERS = {
  standings: ['순위', '팀명', '경기', '승점', '승', '무', '패', '득', '실', '득실차'],
  scorers: ['순위', '선수명', '팀명', '득점 (PK)', '도움'],
};

export const HEADER_NAME_STYLES: { [key: string]: string } = {
  팀명: 'team',
  선수명: 'player',
  득실차: 'diff',
  나머지: 'rest',
};

export const TABLE_NAMES = {
  standings: 'standings',
  scorers: 'scorers',
};
