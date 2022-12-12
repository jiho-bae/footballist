import { VideoType } from '../pages/Home';
import { PAGE_PATH, REST_DATE } from './constant';

export function dateToLocaleString(date: string) {
  return new Date(date).toLocaleDateString();
}

export function indexOfPathname(pathname: string) {
  return Object.values(PAGE_PATH).indexOf(pathname);
}

export function getPrevDatesFromToday(length: number) {
  let now = new Date();
  const dates = [];

  for (let i = 0; i < length; i++) {
    dates.push(now.toLocaleDateString());
    now.setDate(now.getDate() - 1);
  }

  return dates;
}

export type PrevDatesVideosType = {
  [key: string]: VideoType[];
};

export function getPrevDatesVideos(videos: VideoType[], prevDates: string[]) {
  const result: PrevDatesVideosType = {};

  prevDates.forEach((date) => (result[date] = []));
  result[REST_DATE] = [];

  videos.forEach((video) => {
    const date = dateToLocaleString(video.date);
    const target = date in result ? date : REST_DATE;
    result[target].push(video);
  });

  return result;
}
