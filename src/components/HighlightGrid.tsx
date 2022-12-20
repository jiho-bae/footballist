import { VideoType } from '../pages/Home';
import HighlightCard from './HighlightCard';

interface HighlightGridProps {
  displayVideos: VideoType[];
}

function HighlightGrid({ displayVideos }: HighlightGridProps) {
  const CNT_OF_PRELOAD_IMG = 10;

  return (
    <div className="w-full grid grid-cols-video-lists gap-8">
      {displayVideos.map((video, idx) => (
        <HighlightCard video={video} key={video.title} idx={idx} isLazy={idx >= CNT_OF_PRELOAD_IMG} />
      ))}
    </div>
  );
}

export default HighlightGrid;
