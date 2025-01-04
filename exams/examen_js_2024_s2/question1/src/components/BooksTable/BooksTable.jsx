import react from 'react';

const BooksTable = ({ children }) => { 
    return (
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>État</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
};

export default BooksTable;