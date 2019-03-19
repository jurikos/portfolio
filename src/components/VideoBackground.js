import React from 'react';

const VideoBackground = () => {
  return (
    <div className='c-videobg'>
      <video autoPlay loop muted playsInline className='c-videobg__video'>
        <source src='https://www.onpolar.com/frontend/video/video-bg-low.mp4' type='video/mp4' />
      </video>
      <div className='c-videobg__overlay' />
    </div>
  );
};

export default VideoBackground;
