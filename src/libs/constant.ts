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
