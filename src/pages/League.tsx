import division from '../dummy/division.json';
import topScorers from '../dummy/scorers.json';

function League() {
  const tableHeaders = ['순위', '팀명', '경기', '승점', '승', '무', '패', '득', '실', '득실차'];
  const scoreTableHeaders = ['순위', '선수명', '팀명', '득점 (PK)', '도움'];
  const {
    filters,
    competition,
    area,
    standings: [total, home, away],
  } = division;
  const { scorers } = topScorers;

  return (
    <div>
      <header className="flex items-center gap-5">
        <img src={competition.emblem} alt="league logo" className="w-40 h-40"></img>
        <div>
          <h2 className="text-3xl font-medium">
            {filters.season} {competition.name}
          </h2>
          <div className="flex items-center gap-3">
            <img src={area.flag} alt="national flag" className="w-8 h-8"></img>
            <span className="text-2xl">{area.name}</span>
          </div>
        </div>
      </header>
      <section className="text-2xl w-2/5 h-29r">
        <div className="flex gap-3 border bg-title-gray p-1 text-center pr-6">
          {tableHeaders.map((header) => {
            const cellWidth = header === '팀명' ? 'team' : header === '득실차' ? 'diff' : 'rest';

            return (
              <div key={header} className={`w-division-${cellWidth}`}>
                {header}
              </div>
            );
          })}
        </div>
        <ul className="text-center h-26r overflow-auto">
          {total.table.map((row) => {
            const { position, team, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference } =
              row;

            return (
              <li key={`${position}${team}`} className="flex gap-3 border-x border-b p-1">
                <div className="w-division-rest">{position}</div>
                <div className="flex items-center text-2xl w-division-team">
                  <img src={team.crest} alt="team logo" className="w-6 h-6 ml-4 mr-4"></img>
                  {team.shortName}
                </div>
                <div className="w-division-rest">{playedGames}</div>
                <div className="w-division-rest">{points}</div>
                <div className="w-division-rest">{won}</div>
                <div className="w-division-rest">{draw}</div>
                <div className="w-division-rest">{lost}</div>
                <div className="w-division-rest">{goalsFor}</div>
                <div className="w-division-rest">{goalsAgainst}</div>
                <div className="w-division-diff">{goalDifference}</div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="text-2xl w-2/5 h-29r mt-6">
        <div className="flex gap-3 border bg-title-gray p-1 text-center">
          {scoreTableHeaders.map((header) => {
            const cellWidth = header === '선수명' ? 'player' : header === '팀명' ? 'team' : 'rest';

            return (
              <div key={header} className={`w-score-${cellWidth}`}>
                {header}
              </div>
            );
          })}
        </div>
        <ul className="text-center h-26r">
          {scorers.map((row, rank) => {
            const { player, team, goals, assists, penalties } = row;

            return (
              <li key={player.name} className="flex gap-3 border-x border-b p-1">
                <div className="w-score-rest">{rank + 1}</div>
                <div className="w-score-player text-left pl-4">{player.name}</div>
                <div className="flex items-center text-2xl w-score-team">
                  <img src={team.crest} alt="team logo" className="w-6 h-6 ml-6 mr-4"></img>
                  {team.shortName}
                </div>
                <div className="w-score-rest">{`${goals ?? 0} (${penalties ?? 0})`}</div>
                <div className="w-score-rest">{assists ?? 0}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default League;
