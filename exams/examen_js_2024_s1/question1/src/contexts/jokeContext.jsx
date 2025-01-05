import React, { createContext, useState, useEffect } from 'react';
import jokeService from '../services/joke';

const JokeContext = createContext();

const JokesProvider = ({ children }) => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        jokeService.getAll().then(initialJokes => {
            setJokes(initialJokes);
        });
    }, []);

    const updateJokeImageUrl = (id, newImageUrl) => {
        const jokeToUpdate = jokes.find(b => b.id === id);

        jokeService.patch(jokeToUpdate.id, { imageUrl: newImageUrl })
            .then(() => {
                return jokeService.getAll();
            })
            .then(updatedJokes => {
                setJokes(updatedJokes);
            })
            .catch(error => {
                console.error('Error updating joke:', error);
            });
    };

    return (
        <JokeContext.Provider value={{ jokes, updateJokeImageUrl }}>
            {children}
        </JokeContext.Provider>
    );
};

export { JokeContext, JokesProvider };