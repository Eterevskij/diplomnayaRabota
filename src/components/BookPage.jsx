import React from 'react';

import book from '../img/Book.jpg';
import star from '../img/Star.png';

const BookPage = () => {

    return (
        <div className="content">
            <div className="bookPage">

                <div className="bookPage__left">
                    <img className='bookPage__bookImg' src={book} alt="" />
                </div>

                <div className="bookPage__right">

                    <h1 className="bookPage__title">Гарри Потер и принц полукровка</h1>

                    <span className="bookPage__reviews">
                        <img src={star} className="bookPage__reviews__star" />
                        <p className="bookPage__reviews__num">4.7</p>

                        <p className="bookPage__reviews__reviewCounter">228 отзывов</p>
                    </span>

                    <ul className="bookPage__bookInfo">
                        <li className="bookPage__bookInfo__item"><span className="name">Автор: </span> <span className="value">Джоан Роулинг</span></li>
                        <li className="bookPage__bookInfo__item"><span className="name">Жанр: </span> <span className="value">Фантастика</span></li>
                        <li className="bookPage__bookInfo__item"><span className="name">Страниц: </span> <span className="value">228</span></li>
                    </ul>

                    <div className="bookPage__infoFooter">
                        <p className="bookPage__price">800 ₽</p>

                        <p className="bookPage__discription">Началась вторая война волшебников между силами Волан-де-Морта и силами Ордена Феникса: о терроре Волан-де-Морта становится известно даже британскому премьер-министру от нового министра магии, Руфуса Скримджера ...</p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default BookPage; 