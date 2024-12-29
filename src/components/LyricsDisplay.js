import React from 'react';

const LyricsDisplay = ({ lyrics, currentIndex, currentWordIndex }) => {
  const currentLine = lyrics[currentIndex] || '';
  const wordsInLine = currentLine.split(' ');

  return (
    <div className="lyrics-display">
      <p className="lyrics-text">
        {wordsInLine.map((word, index) => (
          <span
            key={index}
            style={{
              color: index <= currentWordIndex ? 'blue' : 'black',  // 현재까지 표시된 단어는 파란색
              fontWeight: index === currentWordIndex ? 'bold' : 'normal', // 현재 단어는 굵게
              transition: 'color 0.3s ease', // 색상 변화 애니메이션
            }}
          >
            {word}{' '}
          </span>
        ))}
      </p>
    </div>
  );
};

export default LyricsDisplay;
