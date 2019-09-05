import React from 'react';
import BottomBar from './components/BottomBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <TopBar />
      <BottomBar />
    </div>
  );
}

export default App;
