import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  background: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: -1,
  },
  video: {
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.7,
    background: theme.colors.tertiary,
  },
}));

const VideoBackground = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <video autoPlay loop muted playsInline className={classes.video}>
        <source src="https://www.onpolar.com/frontend/video/video-bg-low.mp4" type="video/mp4" />
      </video>
      <div className={classes.overlay} />
    </div>
  );
};

export default VideoBackground;
