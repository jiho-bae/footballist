import Space from '../components/Space';
import Table from '../components/Table';
import division from '../dummy/division.json';
import topScorers from '../dummy/scorers.json';
import leagueMatches from '../dummy/matches2.json';
import { TABLE_NAMES } from '../libs/constant';

function League() {
  const {
    filters,
    competition,
    area,
    standings: [total],
  } = division;
  const { scorers } = topScorers;

  return (
    <main className="px-24">
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
      <div className="flex justify-between mb-10">
        <Table
          tableType={TABLE_NAMES.matches}
          isOverflow={true}
          records={leagueMatches.matches}
          width="1/2"
          height="60r"
          recordHeight="57r"
        />
        <div className="w-5/12">
          <Table tableType={TABLE_NAMES.standings} isOverflow={true} records={total.table} width="full" />
          <Space />
          <Table tableType={TABLE_NAMES.scorers} records={scorers} width="full" />
        </div>
      </div>
    </main>
  );
}

export default League;
