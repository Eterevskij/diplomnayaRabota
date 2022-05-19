import React from 'react';

import { Link }  from "react-router-dom";


import author from '../img/Author.jpg';

const Authors = () => {

    return (
        <div className="authorsList">

            <Link to="/authors/1" className="author__item">

                <div className="author__item__left">
                    <img className='author__item__authorImg' src={author} alt="" />
                </div>

                <div className="author__item__right">

                    <p className="author__item__name">Джоан Роулинг</p>
                    <p class="bookPage__bookInfo__item"><span class="name">Страниц: </span> <span class="value">228</span></p>

                    <p className="bookPage__bookInfo__bookCounter">288 книг</p>
                </div>
            </Link>

            <Link to="/authors/1" className="author__item">

                <div className="author__item__left">
                    <img className='author__item__authorImg' src={author} alt="" />
                </div>

                <div className="author__item__right">

                    <p className="author__item__name">Джоан Роулинг</p>
                    <p class="bookPage__bookInfo__item"><span class="name">Страниц: </span> <span class="value">228</span></p>

                    <p className="bookPage__bookInfo__bookCounter">288 книг</p>
                </div>
            </Link>

            <Link to="/authors/1" className="author__item">

                <div className="author__item__left">
                    <img className='author__item__authorImg' src={author} alt="" />
                </div>

                <div className="author__item__right">

                    <p className="author__item__name">Джоан Роулинг</p>
                    <p class="bookPage__bookInfo__item"><span class="name">Страниц: </span> <span class="value">228</span></p>

                    <p className="bookPage__bookInfo__bookCounter">288 книг</p>
                </div>
            </Link>

        </div>
    )
}

export default Authors; 