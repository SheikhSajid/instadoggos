import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  whiteBg: {
    backgroundColor: 'white',
    color: 'black'
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid #ededed',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <AppBar
      {...props}
      position="static"
      className={`${classes.whiteBg} ${classes.appBar}`}
    >
      <Toolbar variant="dense">
        <Container maxWidth="md">
          <Typography variant="h6" color="inherit">
            Instadoggos
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
