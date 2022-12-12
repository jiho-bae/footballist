import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import getVideos from '../api/getVideos';
import { REST_DATE } from '../libs/constant';
import {
  dateToLocaleString,
  getPrevDatesFromToday,
  PrevDatesVideosType,
  getPrevDatesVideos,
  getPrevDateFromToday,
} from '../libs/utilFns';

export interface VideoType {
  competition: CompetitionType;
  date: string;
  embed: string;
  side1: MatchSideType;
  side2: MatchSideType;
  thumbnail: string;
  title: string;
  url: string;
  videos: VideoTagType[];
}

interface CompetitionType extends MatchSideType {
  id: number;
}

interface MatchSideType {
  name: string;
  url: string;
}

interface VideoTagType {
  title: string;
  embed: string;
}

function Home() {
  const [state, setState] = useState<{
    loading: boolean;
    videos: VideoType[];
  }>({
    loading: true,
    videos: [],
  });
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString());
  const [prevDates, setPrevDates] = useState(getPrevDatesFromToday(7));
  const [displayVideos, setDisplayVideos] = useState<PrevDatesVideosType>({});

  function onChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedDate(e.target.value);
  }

  useEffect(() => {
    (async function () {
      const videos = await getVideos('https://www.scorebat.com/video-api/v1/');
      setState({ loading: false, videos });
      setDisplayVideos(getPrevDatesVideos(videos, prevDates));
    })();
  }, [prevDates]);

  const { loading } = state;

  return (
    <div className="App">
      {loading ? (
        <span>Loading Videos...</span>
      ) : (
        <div className="px-4 py-0">
          <div className="flex justify-end mb-4">
            <select className="cursor-pointer text-3xl outline-none" onChange={onChangeSelect}>
              {prevDates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
              <option value={REST_DATE}>{`~ ${getPrevDateFromToday(7)}`}</option>
            </select>
          </div>
          <div className="w-full grid grid-cols-video-lists gap-8">
            {displayVideos[selectedDate].map((video, idx) => (
              <Link to={`/highlights/${idx}`} state={{ video }} key={video.title} style={{ textDecoration: 'none' }}>
                <section className="w-full cursor-pointer">
                  <div
                    className="hover:opacity-70 bg-zinc-300 bg-center bg-cover w-30 h-80"
                    style={{
                      backgroundImage: `url(${video.thumbnail})`,
                    }}
                  ></div>
                  <div className="flex flex-col">
                    <span className="color-black text-2xl">
                      {video.side1.name} vs {video.side2.name}
                    </span>
                    <span className="text-neutral-500 text-xl">{dateToLocaleString(video.date)}</span>
                  </div>
                </section>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
