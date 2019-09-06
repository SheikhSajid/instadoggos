import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  image: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '200px',
    height: '200px'
  },
  thumb: {
    width: '200px',
    height: '200px',
    overflow: 'hidden'
  },
  vid: {
    width: '200px',
    height: '200px'
  }
});

function ImageContainer(props) {
  const classes = useStyles();

  return (
    <div
      {...props}
      className={classes.image}
      style={{ backgroundImage: `url(${props.url})` }}
    ></div>
  );
}

function VideoContainer(props) {
  const classes = useStyles();

  return (
    <div {...props} className={classes.thumb}>
      <video className={classes.vid} preload="none" muted autoPlay loop>
        <source id="mp4" src={props.url} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default function Thumbnail({ url }) {
  const classes = useStyles();
  const extension = url
    .split('.')
    .pop()
    .toLowerCase();
  const extIsImage = extension === 'jpg' || extension === 'png';
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
