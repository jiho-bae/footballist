import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import HighlightFilter from '../components/Filter';
import HighlightGrid from '../components/HighlightGrid';
import EmptyHighlight from '../components/EmptyHighlight';

import { videoState } from '../recoils';
import { extractRandomVideos, getPrevDatesFromToday, getPrevDatesVideos } from '../libs/utilFns';
import { CNT_OF_REC_VIDEOS } from '../libs/constant';

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
  const videos = useRecoilValue(videoState);
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [prevDates, setPrevDates] = useState(getPrevDatesFromToday(7));
  const displayVideos = getPrevDatesVideos(videos, prevDates)[selectedDate];

  function onChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedDate(e.target.value);
  }

  return (
    <div className="px-4 py-0">
      <HighlightFilter prevDates={prevDates} selectedDate={selectedDate} onChange={onChangeSelect} />
      {!displayVideos.length ? (
        <EmptyHighlight altVideos={extractRandomVideos([...videos], CNT_OF_REC_VIDEOS)} />
      ) : (
        <HighlightGrid displayVideos={displayVideos} />
      )}
    </div>
  );
}

export default Home;
