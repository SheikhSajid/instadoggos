import React, { useState, useEffect } from 'react';
import BottomBar from './components/BottomBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './components/TopBar';
import Album from './components/Album';

function App() {
  const [imageUrls, setImageUrls] = useState([
    'https://random.dog/17bece7b-635d-46ac-893a-4369cd249580.jpg',
    'https://random.dog/abb31449-1a18-48e4-8fb6-1f92eb731b99.jpg',
    'https://random.dog/3c4ae6f2-7f29-45e0-94f7-c561d3523f04.mp4',
    'https://random.dog/bf74eb76-2d81-4d2e-bade-62e87c640838.jpg',
    'https://random.dog/839662a2-c8e5-4ebe-bf6c-b3226f07f29c.jpg',
    'https://random.dog/573507c9-4499-4288-825e-cd22e792c3ee.mp4',
    'https://random.dog/211763a6-ed82-4351-9f11-c494592f8fa5.jpg',
    'https://random.dog/831a74df-8de4-4150-a70f-12bd984f4bb4.JPG',
    'https://random.dog/63aec50b-28d8-46b3-8d6c-b8357165ed55.jpg'
  ]);
  return (
    <div className="App">
      <CssBaseline />
      <TopBar />
      <Album imageUrls={imageUrls} />
      <BottomBar setImageUrls={setImageUrls} />
    </div>
  );
}

export default App;
