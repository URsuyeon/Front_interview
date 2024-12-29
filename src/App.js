import React from 'react';
import LyricsDisplay from './components/LyricsDisplay';
import { useLyrics } from './hooks/useLyrics';
import sampleLyrics from './data/sampleLyrics'; // sampleLyrics 임포트

const App = () => {
  const { lyrics, currentIndex, currentWordIndex, isPlaying, play, pause } = useLyrics(sampleLyrics);  // sampleLyrics 전달
  
  return (
    <div className="lyrics-container">
      <h1 className="title">대본 리딩</h1>
      <LyricsDisplay lyrics={lyrics} currentIndex={currentIndex} currentWordIndex={currentWordIndex} />
      
      <div className="control-buttons">
        <button className="control-button play-button" onClick={play}>Play</button>
        <button className="control-button pause-button" onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

export default App;
