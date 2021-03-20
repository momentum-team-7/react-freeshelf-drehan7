import React, { useState } from 'react';
import './App.css';
import { bookData } from './book-data';
import Book from './Book';

function App() {

    const [isActive, setisActive] = useState("");

    return (
        <div className="main-container">
            { bookData.map((book, i) => (
                <Book key={i} book={book} isActive={isActive} setisActive={setisActive} />
            ))}
        </div>

    );
}

export default App;