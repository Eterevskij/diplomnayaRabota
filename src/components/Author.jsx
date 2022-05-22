import React from 'react';
import { useParams, Link } from "react-router-dom";


import book from '../img/Book.jpg';
import star from '../img/Star.png';


const Author = (props) => {

    debugger

    const params = useParams();
    const { authors, books } = props;
    const authorId = +params.authorId;

    const author = authors.find(author => {
        return author.id === authorId;
    })

    console.log(author);

    const authorsBooks = books.filter(book => {
        return book.author.id === authorId;
    })


    const { name, photo, bookNum, deathYear, birthYear } = author;

    return (
        <div className="author">

            <div className="author__mainInfoWrapper">

                <div className="author__left">
                    <img src={photo} alt="" className="author__left__img" />
                </div>

                <div className="author__right">
                    <h1 className="author__name">{name}</h1>


                    <ul className="bookPage__bookInfo">
                        <li className="bookPage__bookInfo__item"><span className="name">Книг в продаже : {bookNum}</span> <span className="value"></span></li>
                        <li className="bookPage__bookInfo__item"><span className="name">Год рождения : {birthYear}</span> <span className="value"></span></li>

                        {deathYear &&
                            <li className="bookPage__bookInfo__item"><span className="name">Год смерти : {deathYear}</span> <span className="value"></span></li>
                        }

                    </ul>


                </div>

            </div>


            <div className="bookPage__books__title">Книги</div>

            <div className="bookPage__books__list">

                {authorsBooks.map(book => {

                    const { id, photo, title } = book;


                    return (
                        <Link className="bookPage__books__list__item" to={`/book/${id}`}>
                                <img className="bookPage__books__list__item__photo" src={photo} alt="" />
                                <p className="bookPage__books__list__item__text">{title}</p>
                        </Link>
                    )
                })}



            </div>


        </div>
    )
}

export default Author; 