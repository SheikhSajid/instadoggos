import React, { useState, useEffect } from 'react';
import BottomBar from './components/BottomBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './components/TopBar';
import Album from './components/Album';
import loadingGif from './spinner.gif';
import { fetchUrls } from './utils';

function App() {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUrls().then(urls => {
      setLoading(false);
      setImageUrls(urls);
    });
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <TopBar />
      {!loading && <Album imageUrls={imageUrls} />}
      {loading && (
        <img
          src={loadingGif}
          alt="Loading"
          style={{ transform: 'translateX(50vw) translateX(-50%)' }}
        />
      )}
      <BottomBar
        setImageUrls={setImageUrls}
        imageUrls={imageUrls}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
