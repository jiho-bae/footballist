import { TableType } from '../components/Table';

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
  matches: ['일정', '홈', '점수', '원정', '심판'],
  standings: ['순위', '팀명', '경기', '승점', '승', '무', '패', '득', '실', '득실차'],
  scorers: ['순위', '선수명', '팀명', '득점(PK)', '도움'],
};

export const HEADER_WIDTH_STYLES: { [key: string]: { [key: string]: string } } = {
  matches: {
    일정: 'w-matches-plan',
    홈: 'w-matches-team',
    원정: 'w-matches-team',
    점수: 'w-matches-score',
    심판: 'w-matches-refree',
  },
  standings: {
    팀명: 'w-standings-team',
    홈: 'w-standings-team',
    원정: 'w-standings-team',
    득실차: 'w-standings-diff',
    나머지: 'w-standings-rest',
  },
  scorers: {
    선수명: 'w-scorers-player',
    팀명: 'w-scorers-team',
    '득점(PK)': 'w-scorers-score',
    나머지: 'w-scorers-rest',
  },
};

export const TABLE_NAMES: { [key: string]: TableType } = {
  matches: 'matches',
  standings: 'standings',
  scorers: 'scorers',
};
