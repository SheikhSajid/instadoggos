import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import ReplayIcon from '@material-ui/icons/Replay';
import InfoIcon from '@material-ui/icons/Info';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { Grid } from '@material-ui/core';
import shuffle from 'shuffle-array';
import { fetchUrls } from '../utils';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    boxShadow: 'none',
    borderTop: '1px solid #ededed'
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'relative',
    zIndex: 1,
    top: -30,
    background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)'
  },
  whiteBg: {
    backgroundColor: 'white',
    color: '#a1a1a1'
  }
}));

export default function BottomBar(props) {
  const classes = useStyles();

  const { imageUrls, setImageUrls, setLoading } = props;

  function shuffleHandler() {
    setImageUrls(shuffle(imageUrls, { copy: true }));
  }

  function reloadHandler() {
    setLoading(true);
    fetchUrls().then(newUrls => {
      setImageUrls(newUrls);
      setLoading(false);
    });
  }

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={`${classes.appBar} ${classes.whiteBg}`}
      >
        <Toolbar>
          <Grid container justify="center">
            <IconButton color="inherit">
              <InfoIcon />
            </IconButton>
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
              onClick={reloadHandler}
            >
              <ReplayIcon />
            </Fab>
            <IconButton onClick={shuffleHandler} color="inherit">
              <ShuffleIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
