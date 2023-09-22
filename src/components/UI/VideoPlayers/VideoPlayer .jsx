import React from 'react';

import style from './VideoPlayer.module.css';
import ReactPlayer from 'react-player';


const VideoPlayer = ({videoUrl, ...props}) => {
  return (
    <div className={style.videoPlayerWapper}>
      <ReactPlayer
        url={videoUrl}
        className={style.reactPlayer}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default VideoPlayer;
