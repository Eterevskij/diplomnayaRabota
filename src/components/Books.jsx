import React, { useEffect } from 'react';

import star from '../img/Star.png';

import { useParams, Link } from "react-router-dom";
import bookState from '../store/BooksState';
import { observer } from 'mobx-react-lite';
import Preloader from '../Preloader.gif';

const Books = observer((props) => {

    const {popular} = props;

    useEffect(() => {
        if(popular) {
            bookState.sortByRating()
        } else {
            bookState.loadBooks()
        }
    }, [props.popular]);


    return (<>
        {
            bookState.isFetching ?
                <img className='preloader' src={Preloader} alt="" />
                :

                <div className="booksPage">

                    {
                        bookState.books.map(book => {

                            const { id, name, authorsid, price, avg, comment } = book;

                            return (
                                <Link to={`/book/${id}`} className="booksPage__item" key={id}>

                                    <div className="booksPage__left">
                                        {book.photo ?
                                            <img className='booksPage__bookImg' src={book.photo} alt="" />
                                            :
                                            <img src="https://tokyo-doctors.com/images_2016/noimage_tate.jpg" alt="" className="booksPage__bookImg" />
                                        }
                                    </div>

                                    <div className="booksPage__right">

                                        <p className="booksPage__title">{name}</p>

                                        <span className="bookPage__reviews">
                                            <img src={star} className="bookPage__reviews__star" />
                                            <p className="bookPage__reviews__num">{avg.toFixed(1)}</p>

                                            <p className="bookPage__reviews__reviewCounter">{comment.length} отзывов</p>

                                            <p className="bookPage__reviews__price">{price} ₽</p>
                                        </span>

                                        <p className="booksPage__author">{authorsid[1]}</p>

                                    </div>

                                </Link>
                            )
                        })
                    }



                </div>
        }
    </>
    )
})

export default Books; 