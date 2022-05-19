import React from 'react';

import book from '../img/Book.jpg';
import star from '../img/Star.png';

import { Link } from "react-router-dom";

const Books = (props) => {
    let filteredBooks;
    const {books, popular} = props;

    let booksCopy = [...books];


    debugger
    

    if(popular) {
        filteredBooks = booksCopy.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else {
        filteredBooks = booksCopy;
    }

    return (

        <div className="booksPage">

            {
                filteredBooks.map(book => {

                    const {id, title, author, price, rating, rewievNumber} = book;

                    return (
                        <Link to={`/books/${id}`} className="booksPage__item">

                            <div className="booksPage__left">
                                <img className='booksPage__bookImg' src={book.photo} alt="" />
                            </div>

                            <div className="booksPage__right">

                                <p className="booksPage__title">{title}</p>

                                <span className="bookPage__reviews">
                                    <img src={star} className="bookPage__reviews__star" />
                                    <p className="bookPage__reviews__num">{rating}</p>

                                    <p className="bookPage__reviews__reviewCounter">{rewievNumber} отзывов</p>

                                    <p className="bookPage__reviews__price">{price} ₽</p>
                                </span>

                                <p className="booksPage__author">{author.name}</p>

                            </div>

                        </Link>
                    )
                })
            }



        </div>
    )
}

export default Books; 