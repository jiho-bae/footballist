import React from "react";
import { Link } from "react-router-dom";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: {
        state: { video },
      },
    } = props;
    this.state = {
      video,
    };
  }
  render() {
    const { video } = this.state;
    return (
      <div className="detail-container">
        <div className="detail-link">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            뒤로 가기
          </Link>
        </div>
        <h1>{video.title}</h1>
        <div className="detail-competition">
          <h3>{video.competition.name}</h3>
          <a href={video.competition.url}>
            {`${video.competition.name.split(":")[0]} League Matches`}
          </a>
        </div>
        <div
          className="detail-video"
          dangerouslySetInnerHTML={{ __html: video.videos[0].embed }}
        ></div>
        <div className="detail-metadata">
          <span className="detail-metadata__date">{`${video.date.slice(
            2,
            4
          )}.${video.date.slice(5, 7)}.${video.date.slice(8, 10)}`}</span>
          <div className="detail-metadata__match">
            <div>
              <h4>Home</h4>
              <span>{video.side1.name}</span>
              <a href={video.side1.url}>{video.side1.name} Matches</a>
            </div>
            <div>
              <h4>Away</h4>
              <span>{video.side2.name}</span>
              <a href={video.side2.url}>{video.side2.name} Matches</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;
