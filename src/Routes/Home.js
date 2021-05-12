import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    loading: true,
    videos: [],
  };
  async componentDidMount() {
    let { data: videos } = await axios.get(
      "https://www.scorebat.com/video-api/v1/"
    );
    console.log(videos);
    this.setState({ loading: false, videos });
  }
  render() {
    const { loading, videos } = this.state;
    return (
      <div className="App">
        {loading ? (
          <span>Loading Videos...</span>
        ) : (
          <div className="videos-container">
            <h2>Weekly Football Highlights 😍</h2>
            <div className="videos-lists">
              {videos.map((video, idx) => (
                <Link
                  to={{
                    pathname: `/${idx}`,
                    state: {
                      video,
                    },
                  }}
                  key={idx}
                  style={{ textDecoration: "none" }}
                  you={video}
                >
                  <section>
                    <div
                      className="videos-thumbnail"
                      style={{
                        backgroundColor: "grey",
                        backgroundImage: `url(${video.thumbnail})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "300px",
                        height: "200px",
                      }}
                    ></div>
                    <div className="videos-info">
                      <span>
                        {video.side1.name} vs {video.side2.name}
                      </span>
                      <span>{`${video.date.slice(2, 4)}.${video.date.slice(
                        5,
                        7
                      )}.${video.date.slice(8, 10)}`}</span>
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
}

export default Home;
