import axios from "axios";
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    loading: true,
    videos: [],
  };
  async componentDidMount() {
    let { data: videos } = await axios.get(
      "https://www.scorebat.com/video-api/v1/"
    );
    videos = videos.slice(0, 5);
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
          <div className="Container">
            {videos.map((video, idx) => (
              <section key={idx}>
                <h4>{video.title}</h4>
                <img src={video.thumbnail} alt={video.title} />
              </section>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
