import { selector } from 'recoil';
import getVideos from '../api/getVideos';

export const videoState = selector({
  key: 'video/get',
  get: async () => {
    const videos = await getVideos('https://www.scorebat.com/video-api/v1/');
    return videos;
  },
});
