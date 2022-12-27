import HighlightGrid from './HighlightGrid';
import Line from './Line';
import Space from './Space';

import { VideoType } from '../pages/Home';

interface EmptyHighlightProps {
  altVideos: VideoType[];
}

function EmptyHighlight({ altVideos }: EmptyHighlightProps) {
  return (
    <div className="w-full">
      <h1 className="text-3xl text-center text-main-gray">현재 날짜에 경기 하이라이트가 없습니다.</h1>
      <Space height="h-10" />
      <Line />
      <Space height="h-10" />
      <h1 className="text-3xl">다른 날짜의 하이라이트 보기</h1>
      <Space height="h-5" />
      <HighlightGrid displayVideos={altVideos} />
    </div>
  );
}

export default EmptyHighlight;
