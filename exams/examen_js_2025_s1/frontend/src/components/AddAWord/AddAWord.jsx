import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WORD } from '../../gql-queries';

const AddAWord = () => {
  const [word, setWord] = useState('');
  const [hints, setHints] = useState(['', '', '']);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [addWord, { loading, error }] = useMutation(ADD_WORD);

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleHintChange = (index, e) => {
    const newHints = [...hints];
    newHints[index] = e.target.value;
    setHints(newHints);
  };

  const handleSubmit = async () => {
    try {
      await addWord({ variables: { word, hints } });
      setMessage(`Word added successfully`);
      setMessageColor('green');
      setWord('');
      setHints(['', '', '']);
    } catch (err) {
        setMessage(`Word "${word}" already exists`);
        setMessageColor('red');
      }
    };

  return (
    <div>
      <div>
        <label>Word: </label>
        <input type="text" value={word} onChange={handleWordChange} />
      </div>
      <div>
        <label>Hints: </label>
        {hints.map((hint, index) => (
          <input
            key={index}
            type="text"
            value={hint}
            onChange={(e) => handleHintChange(index, e)}
          />
        ))}
      </div>
      <button onClick={handleSubmit} disabled={loading}>
        Add word
      </button>
      {message && <p style={{ color: messageColor }}>{message}</p>}
    </div>
  );
};

export default AddAWord;