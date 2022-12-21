import { StandingType, ScorerType } from '../types';
import { TableType } from './Table';

interface TableRecordProps<RecordType> {
  record: RecordType;
  tableType: TableType;
  rank: number;
}

function TableRecord({ record, tableType, rank }: TableRecordProps<StandingType | ScorerType>) {
  if ('position' in record) {
    const { position, team, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference } = record;

    return (
      <li key={`${rank}${team}`} className="flex gap-3 border-x border-b p-1">
        <div className={`w-${tableType}-rest`}>{position}</div>
        <div className={`flex items-center text-2xl w-${tableType}-team`}>
          <img src={team.crest} alt="team logo" className="w-6 h-6 ml-4 mr-4"></img>
          {team.shortName}
        </div>
        <div className={`w-${tableType}-rest`}>{playedGames}</div>
        <div className={`w-${tableType}-rest`}>{points}</div>
        <div className={`w-${tableType}-rest`}>{won}</div>
        <div className={`w-${tableType}-rest`}>{draw}</div>
        <div className={`w-${tableType}-rest`}>{lost}</div>
        <div className={`w-${tableType}-rest`}>{goalsFor}</div>
        <div className={`w-${tableType}-rest`}>{goalsAgainst}</div>
        <div className={`w-${tableType}-diff`}>{goalDifference}</div>
      </li>
    );
  }

  const { player, team, goals, assists, penalties } = record;

  return (
    <li key={player.name} className="flex gap-3 border-x border-b p-1">
      <div className={`w-${tableType}-rest`}>{rank}</div>
      <div className={`w-${tableType}-player text-left pl-4`}>{player.name}</div>
      <div className={`w-${tableType}-team flex items-center text-2xl`}>
        <img src={team.crest} alt="team logo" className="w-6 h-6 ml-6 mr-4"></img>
        {team.shortName}
      </div>
      <div className={`w-${tableType}-rest`}>{`${goals ?? 0} (${penalties ?? 0})`}</div>
      <div className={`w-${tableType}-rest`}>{assists ?? 0}</div>
    </li>
  );
}

export default TableRecord;
