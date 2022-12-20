import axios from 'axios';

export async function getVideos(url: string) {
  let videos = [];

  try {
    let { data } = await axios.get(url);
    videos = data;
  } catch (e) {
    console.log(e);
  } finally {
    return videos;
  }
}
