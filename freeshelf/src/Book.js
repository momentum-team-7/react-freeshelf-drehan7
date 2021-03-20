import React, { useState } from 'react';
import './App.css';

function Book(props) {
    return (
        <div key={props.key} className="book-container">
            <div className="book-info">
                <h2>{props.book.title}</h2>
                <p>{props.book.author}</p>
                <p>{props.book.shortDescription}</p>
            </div>
            <div className="book-img">
                <img src={props.book.coverImageUrl} alt={props.book.title}></img>
            </div>

        </div>
    )
}

export default Book;