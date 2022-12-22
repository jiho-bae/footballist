import { TeamType } from './index';

export interface StandingType {
  position: number;
  team: TeamType;
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}
