import division from '../dummy/division.json';
import topScorers from '../dummy/scorers.json';
import { TABLE_HEADERS } from '../libs/constant';
import { headerWidth } from '../libs/styleFns';

function League() {
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
          {TABLE_HEADERS.standings.map((header) => (
            <div key={header} className={`w-division-${headerWidth(header)}`}>
              {header}
            </div>
          ))}
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
          {TABLE_HEADERS.scorers.map((header) => (
            <div key={header} className={`w-score-${headerWidth(header)}`}>
              {header}
            </div>
          ))}
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
