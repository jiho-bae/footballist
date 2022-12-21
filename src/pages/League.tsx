import division from '../dummy/division.json';

function League() {
  const tableHeaders = ['순위', '팀명', '경기', '승점', '승', '무', '패', '득', '실', '득실차'];
  const [total, home, away] = division.standings;

  return (
    <div>
      <section className="text-2xl">
        <header>리그 순위</header>
        <ul>
          <li className="flex gap-3">
            {tableHeaders.map((header) => (
              <div key={header}>{header}</div>
            ))}
          </li>

          {total.table.map((row) => {
            const { position, team, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference } =
              row;

            return (
              <li className="flex gap-3">
                <div>{position}</div>
                <div className="flex">
                  <img src={team.crest} alt="team logo" className="w-4 h-4"></img>
                  {team.name}
                </div>
                <div>{playedGames}</div>
                <div>{points}</div>
                <div>{won}</div>
                <div>{draw}</div>
                <div>{lost}</div>
                <div>{goalsFor}</div>
                <div>{goalsAgainst}</div>
                <div>{goalDifference}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default League;
