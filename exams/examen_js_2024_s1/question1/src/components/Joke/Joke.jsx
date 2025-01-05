import { useContext, useState } from 'react';
import { JokeContext } from '../../contexts/jokeContext';
import './Joke.css';

const Joke = () => {
    const { jokes, updateJokeImageUrl } = useContext(JokeContext);
    const [newImageUrls, setNewImageUrls] = useState({});

    const handleInputChange = (id, value) => {
        setNewImageUrls({
            ...newImageUrls,
            [id]: value
        });
    };

    const handleChange = (id) => {
        const newImageUrl = newImageUrls[id];
        if (newImageUrl) {
            updateJokeImageUrl(id, newImageUrl);
        }
    };

    return (
        <div className="joke-container">
            {jokes.map((j) => (
                <div key={j.id} className="joke-card">
                    <p className="joke-name">{j.name}</p>
                    <p className="joke-text">{j.joke}</p>

                    <input 
                        type="text" 
                        id={j.id} 
                        defaultValue={j.imageUrl}
                        onChange={(e) => handleInputChange(j.id, e.target.value)}
                    />

                    <button onClick={() => handleChange(j.id)}>Mettre à jour l'image</button>
                    <img src={newImageUrls[j.id] || j.imageUrl} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Joke;