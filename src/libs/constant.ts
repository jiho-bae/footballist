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
