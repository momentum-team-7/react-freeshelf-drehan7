import React, { useState } from 'react';
import './App.css';
import { bookData } from './book-data';
import Book from './Book';

function App() {

    return (
        <div className="main-container">
            { bookData.map((book, i) => (
                <Book key={i} book={book} />
            ))}
        </div>

    );
}

export default App;