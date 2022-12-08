import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    async function getVideos() {
      let videos = [];

      try {
        let { data } = await axios.get('https://www.scorebat.com/video-api/v1/');
        videos = data;
      } catch (e) {
        console.log(e);
      } finally {
        setState({ loading: false, videos });
      }
    }

    getVideos();
  }, []);

  const { loading, videos } = state;

  return (
    <div className="App">
      {loading ? (
        <span>Loading Videos...</span>
      ) : (
        <div className="videos-container">
          <h2>Weekly Football Highlights 😍</h2>
          <div className="videos-lists">
            {videos.map((video, idx) => (
              <Link to={`/highlights/${idx}`} state={{ video }} key={idx} style={{ textDecoration: 'none' }}>
                <section>
                  <div
                    className="videos-thumbnail"
                    style={{
                      backgroundColor: 'grey',
                      backgroundImage: `url(${video.thumbnail})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      width: '300px',
                      height: '200px',
                    }}
                  ></div>
                  <div className="videos-info">
                    <span>
                      {video.side1.name} vs {video.side2.name}
                    </span>
                    <span>{`${video.date.slice(2, 4)}.${video.date.slice(5, 7)}.${video.date.slice(8, 10)}`}</span>
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