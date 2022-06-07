import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import bookPageState from '../store/BookPageState';
import { observer } from 'mobx-react-lite';
import Preloader from '../Preloader.gif';

import { ReactComponent as Star } from '../icons/Star.svg';
import userAvatar from '../img/UserAvatar.jpg';

const stars = Array(5).fill(0);

const BookPage = observer(() => {
    const params = useParams();
    const pageId = +params.bookId;

    useEffect(() => {
        debugger
        bookPageState.loadBookInfo(pageId)
    }, []);


    console.log(bookPageState.books)
debugger
    return (
        <>        {bookPageState.isFetching ?
            <img className='preloader' src={Preloader} alt="" />
            :
            <div className="content">
                <div className="bookPage_description">

                    <div className="bookPage__left">
                        {bookPageState.books.photo ?
                        <img className='bookPage__bookImg' src={bookPageState.books.photo} alt="" />
                        :
                        <img src="https://tokyo-doctors.com/images_2016/noimage_tate.jpg" alt="" className="bookPage__bookImg" />
                        }
                    </div>

                    <div className="bookPage__right">

                        <h1 className="bookPage__title">{bookPageState.books.name}</h1>

                        <span className="bookPage__reviews">
                            <Star className="bookPage__reviews__star" />
                            <p className="bookPage__reviews__num">{bookPageState.books.avg.toFixed(1)}</p>

                            <p className="bookPage__reviews__reviewCounter">{bookPageState.books.comment.length} отзывов</p>
                        </span>

                        <ul className="bookPage__bookInfo">
                            <li className="bookPage__bookInfo__item"><span className="name">Автор: </span><span className="value">{bookPageState.books.authorsid[1]}</span></li>
                            <li className="bookPage__bookInfo__item"><span className="name">Жанр: </span> <span className="value">{bookPageState.books.genreid[1]}</span></li>
                            <li className="bookPage__bookInfo__item"><span className="name">Страниц: </span> <span className="value">{bookPageState.books.pagesNumber}</span></li>
                            <li className="bookPage__bookInfo__item"><span className="name">Год публикации: </span> <span className="value">{bookPageState.books.yearOfPublication.slice(0, 4)}</span></li>
                            <li className="bookPage__bookInfo__item"><span className="name">Тип обложки: </span> <span className="value">{bookPageState.books.covertypeid[1]}</span></li>
                        </ul>

                        <div className="bookPage__infoFooter">
                            <p className="bookPage__price">{bookPageState.books.price} ₽</p>

                            <p className="bookPage__discription">Началась вторая война волшебников между силами Волан-де-Морта и силами Ордена Феникса: о терроре Волан-де-Морта становится известно даже британскому премьер-министру от нового министра магии, Руфуса Скримджера ...</p>
                        </div>

                    </div>


                </div>

                <div className="bookPage_comments">
                    <h3 className="bookPage_comments__title">Отзывы</h3>

                    <div className="bookPage_comments_commentWrapper">

                        {bookPageState.books.comment.map(c => {
                            return (
                                <div className="bookPage_comments_item">
                                    <div className="bookPage_comments_item_left">
                                        <img className="bookPage_comments_item_left__img" src={userAvatar} alt="" />
                                    </div>

                                    <div className="bookPage_comments_item_right">

                                        <p className="bookPage_comments_item_right__name">{c.name}</p>
                                        <div className="bookPage_comments_item_right__rating">
                                            <Star className="bookPage_comments_item_right__rating__icon" />
                                            <p className="bookPage_comments_item_right__rating__value">{c.rating}</p>
                                        </div>

                                        <p className="bookPage_comments_item_right__text">{c.text}</p>

                                    </div>
                                </div>
                            )
                        })}


                        {/* <button className="bookPage_comments__showMoreBtn">Показать еще</button> */}
                        <div className="writeComment">
                            <div className="writeComment__star__wrapper">
                                <div className="writeComment__stars">
                                    {stars.map((s, i) => <Star className={`writeComment__star ${5 - i === bookPageState.userComment.rating  ? 'active' : ''}`} onClick={() => {bookPageState.changeUserComment('rating', 5 - i)}} />)}
                                </div>
                            </div>

                            <input value={bookPageState.userComment.name} onChange={(value) => bookPageState.changeUserComment('name', value.target.value)} className='writeComment__name' type="text" placeholder='Имя' />
                            <textarea value={bookPageState.userComment.text} onChange={(value) => bookPageState.changeUserComment('text', value.target.value)} className='writeComment__text' cols="30" rows="10" placeholder='Комментарий'></textarea>
                            <button onClick={bookPageState.sendUserComment} className='writeComment__button'>Отправить</button>
                        </div>

                    </div>
                </div>
            </div>}
        </>
    )
})

export default BookPage; 