import React, { useState } from 'react';
import './App.css';
import { bookData } from './book-data';

function App() {

    return (
        <div className="main-container">
            { bookData.map((book, i) => (
                <div key={i} className='book-container'>
                    <div className="book-info">
                        <h1>{book.title}</h1>
                        <p>{book.author}</p>
                        <p>{book.shortDescription}</p>
                    </div>
                    <div className='book-image'>
                        <img src={book.coverImageUrl} alt="img"></img>
                    </div>

                </div>
            ))}


        </div>

    );
}

export default App;