import { TeamType } from './index';

interface ScorerTeamType extends TeamType {
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}

export interface ScorerType {
  player: {
    id: number;
    name: string;
    firstName: string;
    lastName: string | null;
    dateOfBirth: string;
    nationality: string;
    position: string;
    shirtNumber: number | null;
    lastUpdated: string;
  };
  team: ScorerTeamType;
  goals: number | null;
  assists: number | null;
  penalties: number | null;
}
