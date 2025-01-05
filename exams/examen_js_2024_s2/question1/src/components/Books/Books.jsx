import React, { useContext, useState } from 'react';
import { BooksContext } from '../../contexts/booksContext';
import BooksTable from '../BooksTable/BooksTable';
import './Books.css';

const Books = () => {
    const { books, updateBookState } = useContext(BooksContext);
    const [newStates, setNewStates] = useState({});

    const handleSelectChange = (id, value) => {
        setNewStates({
            ...newStates,
            [id]: value
        });
    };

    const handleChange = (id) => {
        const newState = newStates[id];
        if (newState) {
            updateBookState(id, newState);
        }
    };

    return (
        <BooksTable>
            {books.map((b) => (
                <tr key={b.id}>
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td>
                        <select 
                            name="state"
                            value={newStates[b.id] || b.state} 
                            onChange={(e) => handleSelectChange(b.id, e.target.value)}
                        >
                            <option value="read">Lu</option>
                            <option value="to_read">À lire</option>
                            <option value="reading">En cours de lecture</option>
                        </select>
                    </td>
                    <td>
                        <button onClick={() => handleChange(b.id)}>Mettre à jour l’état</button>
                    </td>
                </tr>
            ))}
        </BooksTable>
    );
};

export default Books;