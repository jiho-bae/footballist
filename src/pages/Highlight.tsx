import { Link, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { VideoType } from './Home';

import { dateToLocaleString } from '../libs/utilFns';

function Highlight() {
  const location = useLocation();
  const video: VideoType = location?.state?.video ?? {};

  return video.date ? (
    <div className="mt-5 py-0 px-24">
      <div className="my-4 px-2 py-2 w-full flex text-4xl justify-between">
        <Link to="/" className="text-black">
          <BiArrowBack />
        </Link>
        <h1 className="font-semibold">{video.title.split('-').join('vs')}</h1>
        <div></div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: video.videos[0].embed }}></div>
      <div className="flex flex-col">
        <span className="text-zinc-500 text-2xl mx-0 my-3 pb-3 ">{dateToLocaleString(video.date)}</span>
        <h3 className="text-2xl ">{video.competition.name.split(':').join(' ')}</h3>
        <hr className="my-4" />
        <div className="flex justify-between text-2xl mb-10">
          {[video.side1, video.side2].map((side, idx) => (
            <div key={side.name} className="flex flex-col items-center max-w-xs">
              <h4 className="text-main-brown text-3xl font-bold">{idx === 0 ? 'Home' : 'Away'}</h4>
              <span>{side.name}</span>
              <a className="mt-4 px-2 text-2xl text-center text-main-blue font-semibold cursor-pointer" href={side.url}>
                go to preview Matches
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
}
export default Highlight;
