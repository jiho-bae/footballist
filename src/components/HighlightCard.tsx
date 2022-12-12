import { Link } from 'react-router-dom';
import { VideoType } from '../pages/Home';

import { dateToLocaleString } from '../libs/utilFns';

function HighlightCard({ video, idx }: { video: VideoType; idx: number }) {
  const { thumbnail, side1, side2, date } = video;

  return (
    <Link to={`/highlights/${idx}`} state={{ video }}>
      <section className="w-full cursor-pointer">
        <div
          className="hover:opacity-70 bg-zinc-300 bg-center bg-cover w-30 h-80"
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>
        <div className="flex flex-col">
          <span className="color-black text-2xl">
            {side1.name} vs {side2.name}
          </span>
          <span className="text-neutral-500 text-xl">{dateToLocaleString(date)}</span>
        </div>
      </section>
    </Link>
  );
}

export default HighlightCard;
