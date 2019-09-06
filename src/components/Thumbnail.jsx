import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  const desktopDimensions = '200px';
  const phoneDimensions = '320px';
  return {
    image: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      overflow: 'hidden'
    },
    thumb: {
      width: desktopDimensions,
      height: desktopDimensions,
      [theme.breakpoints.down('sm')]: {
        width: phoneDimensions,
        height: phoneDimensions
      }
    }
  };
});

function ImageContainer(props) {
  const classes = useStyles();

  return (
    <div
      {...props}
      className={`${classes.image} ${classes.thumb}`}
      style={{ backgroundImage: `url(${props.url})` }}
    ></div>
  );
}

function VideoContainer(props) {
  const classes = useStyles();

  return (
    <video className={classes.thumb} preload="none" muted autoPlay loop>
      <source id="mp4" src={props.url} type="video/mp4"></source>
    </video>
  );
}

export default function Thumbnail({ url }) {
  const classes = useStyles();
  const extension = url
    .split('.')
    .pop()
    .toLowerCase();
  const extIsImage =
    extension === 'jpg' || extension === 'png' || extension === 'gif';
  const extIsVideo = extension === 'mp4';

  if (extIsImage) return <ImageContainer url={url} />;
  else if (extIsVideo) return <VideoContainer url={url} />;

  return (
    <div
      className={{ ...classes.image, ...classes.thumb }}
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
}
