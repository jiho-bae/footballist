import { ScoreType } from '../types';

function ScoreBoard({ score }: { score: ScoreType }) {
  const { winner, fullTime, halfTime } = score;

  return (
    <div className="flex flex-col justify-center items-center text-xl">
      {winner ? (
        <>
          <div className="w-2/5 border rounded bg-match-red">종료</div>
          <span>{`${fullTime.home} : ${fullTime.away}`}</span>
        </>
      ) : !fullTime.home && !halfTime.home ? (
        <div className="w-2/5 border rounded bg-match-gray">경기전</div>
      ) : (
        <>
          <div className="w-2/5 border rounded bg-match-green">경기중</div>
          <span>{`${fullTime.home ?? halfTime.home} : ${fullTime.away ?? halfTime.away}`}</span>
        </>
      )}
    </div>
  );
}
export default ScoreBoard;
