import React, { useState } from 'react';
import './App.css';

function Book(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFunc = (e) => {
        setIsOpen(!isOpen);
        e.target.textContent = isOpen ? 'Less Information' : 'More Information';
    }

    return (
        <div key={props.key} className="book-container">
            <div className="book-info">
                <h2>{props.book.title}</h2>
                <p>{props.book.author}</p>
                <p>{props.book.shortDescription}</p>
                <button className="more-info-button" onClick={toggleFunc}>More Information</button>
                {isOpen && (
                    <div className="more-book-info">
                        <p>URl: {props.book.url}</p>
                        <p>Publisher: {props.book.publisher}</p>
                        <p>Publication Date: {props.book.publicationDate}</p>
                        <p>Full Description: {props.book.detailedDescription}</p>
                    </div>
                )}
            </div>
            <div className="book-img">
                <img src={props.book.coverImageUrl} alt={props.book.title}></img>
            </div>

        </div>
    )
}

export default Book;