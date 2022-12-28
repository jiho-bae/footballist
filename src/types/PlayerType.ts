import { TeamType } from './TeamType';

export interface PlayerType {
  id: number;
  name: string;
  firstName: string;
  lastName: string | null;
  dateOfBirth: string;
  nationality: string;
  position: String;
  shirtNumber: number | null;
  lastUpdated: string;
  currentTeam: TeamType;
}
