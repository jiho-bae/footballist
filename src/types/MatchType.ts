import { TeamType, RefreeType } from './index';

export interface MatchType {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string | null;
  };
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string | number | null;
  lastUpdated: string;
  homeTeam: TeamType;
  awayTeam: TeamType;
  score: {
    winner: string | null;
    duration: string;
    fullTime: {
      home: string | null;
      away: string | null;
    };
    halfTime: {
      home: string | null;
      away: string | null;
    };
  };
  odds: {
    msg: string;
  };
  referees: RefreeType[];
}
