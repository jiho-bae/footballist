import { TableType } from '../components/Table';

export type PAGE_TYPE = 'home' | 'league' | 'team' | 'highlight';

export const PAGE_PATH = {
  home: '/',
  league: '/league',
  team: '/team',
  highlight: '/highlights/:id',
};

export const PAGE_NAME = {
  home: '하이라이트',
  league: '리그',
  team: '팀',
  highlight: '하이라이트',
};

export const PAGES = ['home', 'league', 'team'] as PAGE_TYPE[];

export const REST_DATE = 'rest';

export const TABLE_HEADERS = {
  matches: ['일정', '홈', '점수', '원정', '심판'],
  standings: ['순위', '팀명', '경기', '승점', '승', '무', '패', '득', '실', '득실차'],
  scorers: ['순위', '선수명', '팀명', '득점(PK)', '도움'],
};

export const TABLE_NAMES: { [key: string]: TableType } = {
  matches: 'matches',
  standings: 'standings',
  scorers: 'scorers',
};

export const CNT_OF_REC_VIDEOS = 12;
