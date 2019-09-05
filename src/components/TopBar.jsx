import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2)
  }
}));

export default function BottomBar() {
  const classes = useStyles();

  return (
    <Paper square>
      <Typography className={classes.text} variant="h5">
        Random Doggos
      </Typography>
    </Paper>
  );
}
