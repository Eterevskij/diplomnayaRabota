import React from 'react';

import book from '../img/Book.jpg';
import star from '../img/Star.png';

import { Route, Link, Routes, useParams } from "react-router-dom";

const Books = () => {

    return (

        <div className="booksPage">

            <Link to="/books/1" className="booksPage__item">

                    <div className="booksPage__left">
                        <img className='booksPage__bookImg' src={book} alt="" />
                    </div>

                    <div className="booksPage__right">

                        <p className="booksPage__title">Гарри Потер и принц полукровка</p>

                        <span className="bookPage__reviews">
                            <img src={star} className="bookPage__reviews__star" />
                            <p className="bookPage__reviews__num">4.7</p>

                            <p className="bookPage__reviews__reviewCounter">228 отзывов</p>

                            <p className="bookPage__reviews__price">800 ₽</p>
                        </span>

                        <p className="booksPage__author">Джоан Роулинг</p>

                    </div>

            </Link>


            <Link to="/books/1" className="booksPage__item">

                    <div className="booksPage__left">
                        <img className='booksPage__bookImg' src={book} alt="" />
                    </div>

                    <div className="booksPage__right">

                        <p className="booksPage__title">Гарри Потер и принц полукровка</p>

                        <span className="bookPage__reviews">
                            <img src={star} className="bookPage__reviews__star" />
                            <p className="bookPage__reviews__num">4.7</p>

                            <p className="bookPage__reviews__reviewCounter">228 отзывов</p>

                            <p className="bookPage__reviews__price">800 ₽</p>
                        </span>

                        <p className="booksPage__author">Джоан Роулинг</p>

                    </div>

            </Link>
        </div>
    )
}

export default Books; 