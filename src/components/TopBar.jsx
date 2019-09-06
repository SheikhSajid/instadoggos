import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function TopBar(props) {
  return (
    <AppBar {...props} position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Instadoggos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
