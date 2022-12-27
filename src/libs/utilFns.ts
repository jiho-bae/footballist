import { VideoType } from '../pages/Home';
import { PAGE_PATH, REST_DATE } from './constant';

export function dateToLocaleString(date: string) {
  return new Date(date).toLocaleDateString();
}

export function indexOfPathname(pathname: string) {
  return Object.values(PAGE_PATH).indexOf(pathname);
}

export function getPrevDateFromToday(length: number) {
  const now = new Date();
  now.setDate(now.getDate() - length);

  return now.toLocaleDateString();
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

export function getMMDD(date: Date) {
  const months = String(date.getMonth() + 1).padStart(2, '0');
  const dates = String(date.getDate()).padStart(2, '0');

  return [months, dates].join('.');
}

export function getTime(date: Date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const mins = String(date.getMinutes()).padStart(2, '0');

  return [hours, mins].join(':');
}

export function randomIdx(size: number) {
  return Math.floor(Math.random() * size);
}

export function extractRandomVideos(videos: VideoType[], size: number) {
  const results = [];

  while (results.length < size) {
    const cnt = size - results.length;
    const idx = randomIdx(cnt);

    const extractVideo = videos.splice(idx, 1)[0];
    results.push(extractVideo);
  }

  return results;
}
