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
          <span>loading...</span>
        ) : (
          <>
            <h1>Weekly Highlights😍</h1>
            <div className="video-container">
              {videos.map((video, idx) => (
                <Link to="#" key={idx} style={{ textDecoration: "none" }}>
                  <section>
                    <div
                      className="video-thumbnail"
                      style={{
                        backgroundColor: "grey",
                        backgroundImage: `url(${video.thumbnail})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "200px",
                      }}
                    ></div>
                    <div className="video-info">
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
          </>
        )}
      </div>
    );
  }
}

export default Home;
