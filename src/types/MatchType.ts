import { TeamType, RefreeType, ScoreType } from './index';

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
  score: ScoreType;
  odds: {
    msg: string;
  };
  referees: RefreeType[];
}
