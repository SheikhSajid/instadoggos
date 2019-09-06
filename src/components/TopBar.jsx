import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  topBar: {
    marginBottom: theme.spacing(3)
  }
}));

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <AppBar {...props} className={classes.topBar} position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Instadoggos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
