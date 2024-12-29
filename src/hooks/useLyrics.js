import { useState, useEffect } from 'react';

export const useLyrics = (initialLyrics = []) => {
  const [lyrics, setLyrics] = useState(initialLyrics);
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 표시할 단어 인덱스
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // 현재 단어 인덱스
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!lyrics.length) return;  // lyrics가 없으면 아무 동작도 하지 않음

    let timer;
    if (isPlaying) {
      const currentLine = lyrics[currentIndex];
      const wordsInLine = currentLine.split(' '); // 현재 줄의 단어 배열
      const wordCount = wordsInLine.length;
      const wordDuration = wordsInLine.map(word => Math.max(500, word.length * 150));  // 단어 길이에 비례한 시간

      // 단어를 하나씩 보여주는 타이머 설정
      timer = setInterval(() => {
        setCurrentWordIndex((prev) => {
          if (prev >= wordCount - 1) {
            // 현재 줄의 모든 단어가 표시되었으면 다음 줄로 넘어감
            if (currentIndex >= lyrics.length - 1) {
              setIsPlaying(false);  // 마지막 줄에 도달하면 정지
            } else {
              setCurrentIndex((prevIndex) => prevIndex + 1);
            }
            return 0;  // 단어 인덱스를 0으로 초기화
          }
          return prev + 1;  // 다음 단어로 이동
        });
      }, wordDuration[currentWordIndex]);  // 현재 단어의 길이에 맞는 시간으로 간격 조절
    }

    return () => clearInterval(timer);  // cleanup
  }, [isPlaying, lyrics, currentIndex, currentWordIndex]);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  return {
    lyrics,
    currentIndex,
    currentWordIndex,
    isPlaying,
    play,
    pause
  };
};
