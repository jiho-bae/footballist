import { Link, useLocation } from 'react-router-dom';
import { VideoType } from './Home';

import { dateToLocaleString } from '../libs/utilFns';

function Highlight() {
  const location = useLocation();
  const video: VideoType = location?.state?.video ?? {};

  return video.date ? (
    <div className="mt-5 py-0 px-24">
      <div className="mt-4 px-2 py-2 w-full text-4xl cursor-pointer max-w-[70px]">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          Back
        </Link>
      </div>
      <h1 className="text-4xl">{video.title}</h1>
      <div className="text-2xl">
        <h3>{video.competition.name}</h3>
        <a className="" href={video.competition.url}>{`${video.competition.name.split(':')[0]} League Matches`}</a>
      </div>
      <div className="mt-5" dangerouslySetInnerHTML={{ __html: video.videos[0].embed }}></div>
      <div className="flex flex-col">
        <span className="text-zinc-500 text-2xl mx-0 my-3 pb-3 ">{dateToLocaleString(video.date)}</span>
        <div className="flex justify-between text-2xl">
          {[video.side1, video.side2].map((side, idx) => (
            <div className="flex flex-col items-center max-w-xs">
              <h4>{idx === 0 ? 'Home' : 'Away'}</h4>
              <span>{side.name}</span>
              <a className="mt-4 px-2 py-2 w-full text-2xl text-center cursor-pointer" href={side.url}>
                {side.name} Matches
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
}
export default Highlight;
