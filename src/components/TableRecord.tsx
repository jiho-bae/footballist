import { getMMDD, getTime } from '../libs/utilFns';
import { MatchType, StandingType, ScorerType } from '../types';
import { TableType } from './Table';

interface TableRecordProps<RecordType> {
  record: RecordType;
  tableType: TableType;
  rank: number;
}

function TableRecord({ record, tableType, rank }: TableRecordProps<MatchType | StandingType | ScorerType>) {
  if ('homeTeam' in record) {
    const { utcDate, homeTeam, awayTeam, score, referees } = record;
    const localeDate = new Date(utcDate);
    const matchDate = getMMDD(localeDate);
    const matchTime = getTime(localeDate);

    return (
      <li className="flex gap-3 border-x border-b p-1">
        <div className={`w-${tableType}-plan`}>
          <div className="text-2xl">{matchDate}</div>
          <div className="text-lg text-slate-500 font-medium">{matchTime}</div>
        </div>
        <div className={`flex items-center text-2xl w-${tableType}-team`}>
          <img src={homeTeam.crest} alt="team logo" className="w-9 h-9 ml-4 mr-4"></img>
          {homeTeam.shortName}
        </div>
        <div className={`my-auto w-${tableType}-score`}>{score.winner}</div>
        <div className={`flex items-center text-2xl w-${tableType}-team`}>
          <img src={awayTeam.crest} alt="team logo" className="w-9 h-9 ml-4 mr-4"></img>
          {awayTeam.shortName}
        </div>
        <div className={`my-auto w-${tableType}-refree`}>{referees[0].name}</div>
      </li>
    );
  }

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
