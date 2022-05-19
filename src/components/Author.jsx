import React from 'react';

import author from '../img/Author.jpg';
import book from '../img/Book.jpg';
import star from '../img/Star.png';


const Author = () => {

    return (
        <div className="author">

            <div className="author__mainInfoWrapper">

                <div className="author__left">
                    <img src={author} alt="" className="author__left__img" />
                </div>

                <div className="author__right">
                    <h1 className="author__name">Джоан Роулинг</h1>


                        
                    <span className="bookPage__reviews">
                        <img src={star} className="bookPage__reviews__star" />
                        <p className="bookPage__reviews__num">4.7</p>

                        <p className="bookPage__reviews__reviewCounter">228 отзывов</p>

                    </span>


                    <ul className="bookPage__bookInfo">
                            <li className="bookPage__bookInfo__item"><span className="name">Год рождения : 1965</span> <span className="value"></span></li>
                            <li className="bookPage__bookInfo__item"><span className="name">Жанр: </span> <span className="value">Фантастика</span></li>
                    </ul>


                </div>

            </div>


            <div className="bookPage__books__title">Книги</div>

            <div className="bookPage__books__list">

                <div className="bookPage__books__list__item">
                    <img className="bookPage__books__list__item__photo" src={book} alt="" />
                    <p className="bookPage__books__list__item__text">Гарри Потер и принц полукровка </p>
                </div>

                <div className="bookPage__books__list__item">
                    <img className="bookPage__books__list__item__photo" src={book} alt="" />
                    <p className="bookPage__books__list__item__text">Гарри Потер и принц полукровка </p>
                </div>

                <div className="bookPage__books__list__item">
                    <img className="bookPage__books__list__item__photo" src={book} alt="" />
                    <p className="bookPage__books__list__item__text">Гарри Потер и принц полукровка </p>
                </div>

                <div className="bookPage__books__list__item">
                    <img className="bookPage__books__list__item__photo" src={book} alt="" />
                    <p className="bookPage__books__list__item__text">Гарри Потер и принц полукровка </p>
                </div>

                <div className="bookPage__books__list__item">
                    <img className="bookPage__books__list__item__photo" src={book} alt="" />
                    <p className="bookPage__books__list__item__text">Гарри Потер и принц полукровка </p>
                </div>
            </div>

            
        </div>
    )
}

export default Author; 