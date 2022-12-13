import { VideoType } from '../pages/Home';
import HighlightCard from './HighlightCard';

interface HighlightGridProps {
  displayVideos: VideoType[];
}

function HighlightGrid({ displayVideos }: HighlightGridProps) {
  return (
    <div className="w-full grid grid-cols-video-lists gap-8">
      {displayVideos.map((video, idx) => (
        <HighlightCard video={video} key={video.title} idx={idx} />
      ))}
    </div>
  );
}

export default HighlightGrid;
