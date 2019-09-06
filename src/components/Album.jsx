import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Thumbnail from './Thumbnail';

const useStyles = makeStyles(theme => ({
  media: {
    marginBottom: theme.spacing(3)
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(9)
  }
}));

export default function Album({ imageUrls }) {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Grid container>
        {imageUrls.map(url => (
          <Grid
            container
            justify="center"
            key={url}
            className={classes.media}
            item
            sm={12}
            md={3}
          >
            <Thumbnail url={url} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
