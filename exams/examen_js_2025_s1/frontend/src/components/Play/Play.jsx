import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_WORDS } from '../../gql-queries';
import Hint from './Hint';

const Play = () => {
  const { loading, error, data, refetch } = useQuery(GET_WORDS);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [hints, setHints] = useState([]);
  const [errorCount, setErrorCount] = useState(0);
  const [guess, setGuess] = useState('');
  const [gameWon, setGameWon] = useState(false);
  const [hintCount, setHintCount] = useState(1);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data && data.words.length > 0) {
      setCurrentWord(data.words[currentWordIndex].word);
      setHints(data.words[currentWordIndex].hints);
      setHintCount(1); // Reset hint count when the word changes
    }
  }, [data, currentWordIndex]);

  useEffect(() => {
    if (hintCount > 0 && hintCount <= hints.length) {
      const timer = setTimeout(() => {
        setHintCount(hintCount + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hintCount, hints.length]);

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === currentWord.toLowerCase()) {
      setGameWon(true);
    } else {
      setErrorCount(errorCount + 1);
      setHintCount(hintCount + 1);
    }
    setGuess('');
  };

  const handlePlayAgain = () => {
    if (currentWordIndex < data.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setGameWon(false);
      setErrorCount(0);
      setHintCount(1);
      setGuess('');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data.words.length === 0) {
    return <h2>Please add some words to guess</h2>;
  }

  return (
    <div>
      <h2>Welcome to the `guess a word` game</h2>
      <h2>Error count: {errorCount}</h2>
      {gameWon ? (
        <div>
          <h2>You won!</h2>
          {currentWordIndex < data.words.length - 1 ? (
            <button onClick={handlePlayAgain}>Play Again</button>
          ) : (
            <h2>No more new game to play</h2>
          )}
        </div>
      ) : (
        <div>
          <h3>Hints:</h3>
          {hints.slice(0, hintCount).map((hint, index) => (
            <Hint key={index} hint={`Hint ${index + 1}: ${hint}`} />
          ))}
          <form onSubmit={handleGuessSubmit}>
            <div>
              <label>Guess the word: </label>
              <input type="text" value={guess} onChange={handleGuessChange} />
            </div>
            <button type="submit">Guess</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Play;