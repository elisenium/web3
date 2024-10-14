import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const OpinionsContext = createContext();

const OpinionsProvider = ({ children }) => {
    const [opinions, setOpinions] = useState([]);

    useEffect(() => {
        // Charger les opinions depuis le localStorage si elles existent
        const storedOpinions = JSON.parse(localStorage.getItem('opinions'));
        if (storedOpinions) {
            setOpinions(storedOpinions);
        }
    }, []);

    useEffect(() => {
        // Sauvegarder les opinions dans le localStorage
        localStorage.setItem('opinions', JSON.stringify(opinions));
    }, [opinions]);

    const addOpinion = (text) => {
        const newOpinion = { id: uuidv4(), text, votes: 1 };
        setOpinions((prevOpinions) => [...prevOpinions, newOpinion]);
    };

    const voteOpinion = (id) => {
        setOpinions((prevOpinions) =>
            prevOpinions.map((opinion) =>
                opinion.id === id ? { ...opinion, votes: opinion.votes + 1 } : opinion
            )
        );
    };

    const sortedOpinions = opinions.sort((a, b) => b.votes - a.votes);

    return (
        <OpinionsContext.Provider value={{ sortedOpinions, addOpinion, voteOpinion }}>
            {children}
        </OpinionsContext.Provider>
    );
};

export { OpinionsContext, OpinionsProvider };