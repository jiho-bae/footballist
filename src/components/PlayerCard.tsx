import { BsFillBackspaceFill } from 'react-icons/bs';

import { PlayerType } from '../types';
import { PLAYER_RECORD_NAMES } from '../libs/constant';

function recordLine(cellName: string, content: JSX.Element | string, key: string) {
  return (
    <li className="flex gap-10 mb-1" key={key}>
      <div className="w-24 text-main-gray">
        <span>{cellName}</span>
      </div>
      <div>{content}</div>
    </li>
  );
}

interface PlayerCardProps {
  player: PlayerType;
  isInModal?: boolean;
  onClickCancel?: () => void;
}

function PlayerCard({ player, isInModal = false, onClickCancel }: PlayerCardProps) {
  const {
    name,
    currentTeam: { crest, website, shortName },
    dateOfBirth,
    nationality,
    position,
    shirtNumber,
  } = player;

  const contents = [
    <span>{dateOfBirth}</span>,
    <span>{nationality}</span>,
    <a href={website} className="text-main-blue flex items-center gap-3">
      <img src={crest} alt="team logo" className="w-8 h-8"></img>
      <span>{shortName}</span>
    </a>,
    <span>{position}</span>,
    <span>{shirtNumber}</span>,
  ];

  return (
    <section className="text-2xl p-6 border rounded-xl bg-card-brown">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-4xl">{name}</h1>
        {isInModal && (
          <button onClick={onClickCancel}>
            <BsFillBackspaceFill className="text-4xl hover:text-main-blue" />
          </button>
        )}
      </div>
      <ul className="p-4 border rounded-xl bg-gray-50">
        {PLAYER_RECORD_NAMES.map((recordName, idx) => recordLine(recordName, contents[idx], `${recordName}${idx}`))}
      </ul>
    </section>
  );
}

export default PlayerCard;
