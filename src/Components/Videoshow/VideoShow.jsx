import React from "react";
import "./VideoShow.css";

const VideoShow = ({ videos }) => {
  return (
    <div className="video-container">
      <div className="video-grid">
        {videos?.map((video, index) => {
          const videoId = video?.id?.videoId;

          return (
            <div
              key={index}
              className="video-card"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${videoId}`,
                  "_blank",
                )
              }
            >
              <img
                src={video?.snippet?.thumbnails?.high?.url}
                alt={video?.snippet?.title}
                className="thumbnail"
              />

              <div className="video-info">
                <h4>{video?.snippet?.title}</h4>
                <p>{video?.snippet?.channelTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoShow;
