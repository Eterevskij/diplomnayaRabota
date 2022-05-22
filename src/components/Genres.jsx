import React from 'react';
import { useParams, Link } from "react-router-dom";


import book from '../img/Book.jpg';
import star from '../img/Star.png';


const  Genres = (props) => {

    const { genres } = props;
    // const authorId = +params.authorId;

    // const author = authors.find(author => {
    //     return author.id === authorId;
    // })

    // console.log(author);

    // const authorsBooks = books.filter(book => {
    //     return book.author.id === authorId;
    // })


    // const { name, photo, bookNum, deathYear, birthYear } = author;

    return (
        <div className="author">

            <div className="genres">
                <ul>
                    {genres.map(genre => {

                        return(
                            <li><Link  to="/books/genre=1"></Link></li>
                        )
                    })}
                    <li>Роман</li>
                    <li>Драма</li>
                    <li>Ужасы</li>
                    <li>Комедия</li>
                </ul>
            </div>

        </div>
    )
}

export default Genres; 