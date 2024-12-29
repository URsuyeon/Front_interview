import React from 'react';

const Controls = ({ onPlay, onPause, isPlaying }) => {
    return (
      <div className="control-buttons">
        {isPlaying ? (
          <button 
            onClick={onPause}
            className="control-button pause-button"
          >
            일시정지
          </button>
        ) : (
          <button 
            onClick={onPlay}
            className="control-button play-button"
          >
            재생
          </button>
        )}
      </div>
    );
  };
  
export default Controls;