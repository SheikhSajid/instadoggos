import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Thumbnail from './Thumbnail';

const useStyles = makeStyles(theme => ({
  media: {
    marginBottom: theme.spacing(3)
  }
}));

function Media(props) {
  return (
    <Grid {...props} item md={3} sm={12}>
      <Thumbnail url={props.url} />
    </Grid>
  );
}

export default function Album({ imageUrls }) {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container>
        {/* <Grid item md={3} sm={12}>
          <Thumbnail url={imageUrls[0]} />
        </Grid>

        <Grid item md={3} sm={12}>
          <Thumbnail url={imageUrls[1]} />
        </Grid> */}
        {imageUrls.map(url => (
          <Media key={url} url={url} className={classes.media} />
        ))}
      </Grid>
    </Container>
  );
}
