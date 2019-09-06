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

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'relative',
    zIndex: 1,
    top: -30
  }
}));

export default function BottomBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="center">
            <IconButton color="inherit">
              <InfoIcon />
            </IconButton>
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
            >
              <ReplayIcon />
            </Fab>
            <IconButton color="inherit">
              <ShuffleIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
