import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import getVideos from '../api/getVideos';
import { dateToLocaleString } from '../libs/utilFns';

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

  useEffect(() => {
    (async function () {
      const videos = await getVideos('https://www.scorebat.com/video-api/v1/');
      setState({ loading: false, videos });
    })();
  }, []);

  const { loading, videos } = state;

  return (
    <div className="App">
      {loading ? (
        <span>Loading Videos...</span>
      ) : (
        <div className="px-4 py-0">
          <h2 className="text-4xl">Weekly Football Highlights 😍</h2>
          <div className="w-full grid grid-cols-video-lists gap-8">
            {videos.map((video, idx) => (
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
