import Space from '../components/Space';
import Table from '../components/Table';
import Modal from '../components/Modal';
import PlayerCard from '../components/PlayerCard';

import useModal from '../hooks/useModal';
import { TABLE_NAMES } from '../libs/constant';

import division from '../dummy/division.json';
import topScorers from '../dummy/scorers.json';
import leagueMatches from '../dummy/matches2.json';
import player from '../dummy/player.json';
import { useCallback } from 'react';

function League() {
  const [isOpen, toggleModal] = useModal();
  const {
    filters,
    competition,
    area,
    standings: [total],
  } = division;
  const { scorers } = topScorers;

  const onClickScorerName = useCallback(
    (id: number) => {
      // load data using player id

      toggleModal();
    },
    [toggleModal]
  );

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
          width="w-1/2"
          height="h-60r"
          recordHeight="h-57r"
        />
        <div className="w-5/12">
          <Table tableType={TABLE_NAMES.standings} isOverflow={true} records={total.table} width="w-full" />
          <Space />
          <Table tableType={TABLE_NAMES.scorers} records={scorers} width="w-full" onClickRecord={onClickScorerName} />
        </div>
      </div>
      <Modal isOpen={isOpen} onClickBlackBackground={toggleModal}>
        <PlayerCard player={player} />
      </Modal>
    </main>
  );
}

export default League;
