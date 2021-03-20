import React, { useState } from 'react';
import './App.css';

function Book(props) {
    // const [isOpen, setIsOpen] = useState(false);



    return (
        <div key={props.key} className="book-container">
            <div className="book-info">
                <h2 className="book-title">{props.book.title}</h2>
                <p>{props.book.author}</p>
                <p>{props.book.shortDescription}</p>
                <button className="more-info-button" onClick={() => props.setisActive(props.isActive === props.book.author ? '' : props.book.author)}>{props.isActive === props.book.author ? 'Less Info' : 'More Info'}</button>
                <div className={(props.isActive === props.book.author) ? 'more-book-info show' : 'more-book-info'}>
                    <p>URL: <a target="_blank" href={props.book.url}>{props.book.url}</a></p>
                    <p>Publisher: {props.book.publisher}</p>
                    <p>Publication Date: {props.book.publicationDate}</p>
                    <p>Full Description: <br />{props.book.detailedDescription}</p>
                </div>
            </div>
            <div className="book-img">
                <img src={props.book.coverImageUrl} onerror="this.src={'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg'}"></img>
            </div>

        </div>
    )
}

export default Book;