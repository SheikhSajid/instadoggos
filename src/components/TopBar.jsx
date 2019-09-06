import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  whiteBg: {
    backgroundColor: 'white',
    color: 'black'
  },
  shadowFix: {
    boxShadow: 'none',
    borderBottom: '1px solid #ededed'
  }
});

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <AppBar
      {...props}
      position="static"
      className={`${classes.whiteBg} ${classes.shadowFix}`}
    >
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Instadoggos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
