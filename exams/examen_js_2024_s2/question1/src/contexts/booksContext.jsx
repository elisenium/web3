import React, { createContext, useState, useEffect } from 'react';
import bookService from '../services/book';

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAll().then(initialBooks => {
            setBooks(initialBooks);
        });
    }, []);

    const updateBookState = (id, newState) => {
        const bookToUpdate = books.find(b => b.id === id);

        bookService.patch(bookToUpdate.id, { state: newState })
            .then(() => {
                return bookService.getAll();
            })
            .then(updatedBooks => {
                setBooks(updatedBooks);
            })
            .catch(error => {
                console.error('Error updating book:', error);
            });
    };

    return (
        <BooksContext.Provider value={{ books, updateBookState }}>
            {children}
        </BooksContext.Provider>
    );
};

export { BooksContext, BooksProvider };