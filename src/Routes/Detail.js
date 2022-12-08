import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const video = location?.state?.video ?? {};

  return video.date ? (
    <div className="detail-container">
      <div className="detail-link">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          Back
        </Link>
      </div>
      <h1 className="detail-title">{video.title}</h1>
      <div className="detail-competition">
        <h3>{video.competition.name}</h3>
        <a href={video.competition.url}>{`${video.competition.name.split(':')[0]} League Matches`}</a>
      </div>
      <div className="detail-video" dangerouslySetInnerHTML={{ __html: video.videos[0].embed }}></div>
      <div className="detail-metadata">
        <span className="detail-metadata__date">{`${video.date.slice(2, 4)}.${video.date.slice(
          5,
          7
        )}.${video.date.slice(8, 10)}`}</span>
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
  ) : null;
}
export default Detail;
