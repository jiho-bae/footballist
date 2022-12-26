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
