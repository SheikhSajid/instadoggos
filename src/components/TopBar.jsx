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
  root: {
    flexGrow: 1
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid item sm={12}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Instadoggos
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
    </Container>
  );
}
