import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import authorState from '../store/AuthorState';
import { observer } from 'mobx-react-lite';
import Preloader from '../Preloader.gif';


const Author = observer((props) => {

    const params = useParams();
    const { authors, books } = props;
    const authorId = +params.authorId;

    let name, birthyear, death;

    useEffect(() => {
        authorState.loadAuthorInfo()
    }, []);



    const author = authors.find(author => {
        return author.id === authorId;
    })

    return (<>

        {authorState.isFetching ?
            <img className='preloader' src={Preloader} alt="" />
            :

            <div className="author">

                <div className="author__mainInfoWrapper">

                    <div className="author__left">
                        <img src={'photo'} alt="" className="author__left__img" />
                    </div>

                    <div className="author__right">
                        <h1 className="author__name">{authorState.author.name}</h1>


                        <ul className="bookPage__bookInfo">
                            <li className="bookPage__bookInfo__item"><span className="name">Книг в продаже : {authorState.author.bookNum}</span> <span className="value"></span></li>
                            <li className="bookPage__bookInfo__item"><span className="name">Год рождения : {authorState.author.birthyear.slice(0, 4)}</span> <span className="value"></span></li>

                            {authorState.author.death &&
                                <li className="bookPage__bookInfo__item"><span className="name">Год смерти : {authorState.author.death.slice(0, 4)}</span> <span className="value"></span></li>
                            }

                        </ul>


                    </div>

                </div>


                <div className="bookPage__books__title">Книги</div>

                <div className="bookPage__books__list">
                    {/* 
                {authorsBooks.map(book => {

                    const { id, photo, title } = book;


                    return (
                        <Link className="bookPage__books__list__item" to={`/book/${id}`}>
                            <img className="bookPage__books__list__item__photo" src={photo} alt="" />
                            <p className="bookPage__books__list__item__text">{title}</p>
                        </Link>
                    )
                })} */}



                </div>


            </div>
        }
    </>
    )
})

export default Author; 