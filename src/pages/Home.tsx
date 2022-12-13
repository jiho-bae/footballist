import { useEffect, useState } from 'react';

import getVideos from '../api/getVideos';
import HighlightFilter from '../components/Filter';
import HighlightGrid from '../components/HighlightGrid';
import { getPrevDatesFromToday, PrevDatesVideosType, getPrevDatesVideos } from '../libs/utilFns';

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
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [prevDates, setPrevDates] = useState(getPrevDatesFromToday(7));
  const [displayVideos, setDisplayVideos] = useState<PrevDatesVideosType>({});

  function onChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedDate(e.target.value);
  }

  useEffect(() => {
    (async function () {
      const videos = await getVideos('https://www.scorebat.com/video-api/v1/');
      setIsLoading(false);
      setDisplayVideos(getPrevDatesVideos(videos, prevDates));
    })();
  }, [prevDates]);

  return (
    <div className="App">
      {isLoading ? (
        <span>Loading Videos...</span>
      ) : (
        <div className="px-4 py-0">
          <HighlightFilter prevDates={prevDates} selectedDate={selectedDate} onChange={onChangeSelect} />
          <HighlightGrid displayVideos={displayVideos[selectedDate]} />
        </div>
      )}
    </div>
  );
}

export default Home;
