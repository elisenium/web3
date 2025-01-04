import React, { useContext } from 'react';
import { BooksContext } from '../../contexts/booksContext';
import BooksTable from '../BooksTable/BooksTable';
import './Books.css';


const Books = () => {
    const { books, updateBookState } = useContext(BooksContext);

    const handleChange = (id, newState) => {
        updateBookState(id, newState);
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
                                value={b.state} 
                                onChange={(e) => handleChange(b.id, e.target.value)}
                            >
                                <option value="read">Lu</option>
                                <option value="to_read">À lire</option>
                                <option value="reading">En cours de lecture</option>
                            </select>
                        </td>
                        <td>
                            <button onClick={() => handleChange(b.id, b.state)}>Mettre à jour l’état</button>
                        </td>
                    </tr>
                ))}
        </BooksTable>
                
    );
};

export default Books;