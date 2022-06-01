import React from 'react';
import { useParams, Link } from "react-router-dom";

import star from '../img/Star.png';
import userAvatar from '../img/UserAvatar.jpg';

const BookPage = (props) => {

    const params = useParams();
    const { books } = props;
    const pageId = +params.bookId;

    const book = books.find(book => {
        return book.id === pageId;
    })

    const { title, author, price, genre, rating, coverType, publishingYear, rewievNumber, photo, pagesNumber } = book;

    console.log(book);


    return (
        <div className="content">
            <div className="bookPage_description">

                <div className="bookPage__left">
                    <img className='bookPage__bookImg' src={photo} alt="" />
                </div>

                <div className="bookPage__right">

                    <h1 className="bookPage__title">{title}</h1>

                    <span className="bookPage__reviews">
                        <img src={star} className="bookPage__reviews__star" />
                        <p className="bookPage__reviews__num">{rating}</p>

                        <p className="bookPage__reviews__reviewCounter">{rewievNumber} отзывов</p>
                    </span>

                    <ul className="bookPage__bookInfo">
                        <li className="bookPage__bookInfo__item"><span className="name">Автор: </span><Link to={`/author/${author.id}`}> <span className="value">{author.name}</span></Link></li>
                        <li className="bookPage__bookInfo__item"><span className="name">Жанр: </span> <span className="value">{genre.name}</span></li>
                        <li className="bookPage__bookInfo__item"><span className="name">Страниц: </span> <span className="value">{pagesNumber}</span></li>
                        <li className="bookPage__bookInfo__item"><span className="name">Год публикации: </span> <span className="value">{publishingYear}</span></li>
                        <li className="bookPage__bookInfo__item"><span className="name">Тип обложки: </span> <span className="value">{coverType}</span></li>
                    </ul>

                    <div className="bookPage__infoFooter">
                        <p className="bookPage__price">{price} ₽</p>

                        <p className="bookPage__discription">Началась вторая война волшебников между силами Волан-де-Морта и силами Ордена Феникса: о терроре Волан-де-Морта становится известно даже британскому премьер-министру от нового министра магии, Руфуса Скримджера ...</p>
                    </div>

                </div>


            </div>

            <div className="bookPage_comments">
                <h3 className="bookPage_comments__title">Отзывы</h3>

                <div className="bookPage_comments_commentWrapper">

                    <div className="bookPage_comments_item">
                        <div className="bookPage_comments_item_left">
                            <img className="bookPage_comments_item_left__img" src={userAvatar} alt="" />
                        </div>

                        <div className="bookPage_comments_item_right">

                            <p className="bookPage_comments_item_right__name">Иван Иванович</p>
                            <div className="bookPage_comments_item_right__rating">
                                <img src={star} className="bookPage_comments_item_right__rating__icon" />
                                <p className="bookPage_comments_item_right__rating__value">4.7</p>
                            </div>

                            <p className="bookPage_comments_item_right__text">Как принято считать, акционеры крупнейших компаний набирают популярность среди определенных слоев населения, а значит, должны быть объявлены нарушающими общечеловеческие нормы этики и морали. Господа, синтетическое тестирование обеспечивает актуальность экономической целесообразности принимаемых решений. Разнообразный и богатый опыт говорит нам, что современная методология разработки представляет собой интересный эксперимент проверки первоочередных требований.</p>

                        </div>
                    </div>

                    <div className="bookPage_comments_item">
                        <div className="bookPage_comments_item_left">
                            <img className="bookPage_comments_item_left__img" src={userAvatar} alt="" />
                        </div>

                        <div className="bookPage_comments_item_right">

                            <p className="bookPage_comments_item_right__name">Иван Иванович</p>
                            <div className="bookPage_comments_item_right__rating">
                                <img src={star} className="bookPage_comments_item_right__rating__icon" />
                                <p className="bookPage_comments_item_right__rating__value">4.7</p>
                            </div>

                            <p className="bookPage_comments_item_right__text">Как принято считать, акционеры крупнейших компаний набирают популярность среди определенных слоев населения, а значит, должны быть объявлены нарушающими общечеловеческие нормы этики и морали. Господа, синтетическое тестирование обеспечивает актуальность экономической целесообразности принимаемых решений. Разнообразный и богатый опыт говорит нам, что современная методология разработки представляет собой интересный эксперимент проверки первоочередных требований.</p>

                        </div>
                    </div>

                    <div className="bookPage_comments_item">
                        <div className="bookPage_comments_item_left">
                            <img className="bookPage_comments_item_left__img" src={userAvatar} alt="" />
                        </div>

                        <div className="bookPage_comments_item_right">

                            <p className="bookPage_comments_item_right__name">Иван Иванович</p>
                            <div className="bookPage_comments_item_right__rating">
                                <img src={star} className="bookPage_comments_item_right__rating__icon" />
                                <p className="bookPage_comments_item_right__rating__value">4.7</p>
                            </div>

                            <p className="bookPage_comments_item_right__text">Как принято считать, акционеры крупнейших компаний набирают популярность среди определенных слоев населения, а значит, должны быть объявлены нарушающими общечеловеческие нормы этики и морали. Господа, синтетическое тестирование обеспечивает актуальность экономической целесообразности принимаемых решений. Разнообразный и богатый опыт говорит нам, что современная методология разработки представляет собой интересный эксперимент проверки первоочередных требований.</p>

                        </div>
                    </div>

                    <button className="bookPage_comments__showMoreBtn">Показать еще</button>

                    


                </div>
            </div>
        </div>
    )
}

export default BookPage; 