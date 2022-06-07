import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import authorState from '../store/AuthorPageState';
import { observer } from 'mobx-react-lite';
import Preloader from '../Preloader.gif';


const Author = observer((props) => {

    const params = useParams();
    const { authors, books } = props;
    const authorId = +params.authorId;

    let name, birthyear, death;

    useEffect(() => {
        authorState.loadAuthorInfo(authorId)
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
                        <img src={authorState.author.photo} alt="" className="author__left__img" />
                    </div>

                    <div className="author__right">
                        <h1 className="author__name">{authorState.author.name}</h1>


                        <ul className="bookPage__bookInfo">
                            <li className="bookPage__bookInfo__item"><span className="name">Книг в продаже : {authorState.author.book_list.length}</span> <span className="value"></span></li>
                            <li className="bookPage__bookInfo__item"><span className="name">Год рождения : {authorState.author.birthyear.slice(0, 4)}</span> <span className="value"></span></li>

                            {authorState.author.death &&
                                <li className="bookPage__bookInfo__item"><span className="name">Год смерти : {authorState.author.death.slice(0, 4)}</span> <span className="value"></span></li>
                            }

                        </ul>


                    </div>

                </div>


                <div className="bookPage__books__title">Книги</div>

                <div className="bookPage__books__list">

                    {authorState.author.book_list.map(book => {

                        const { id, photo, name } = book;


                        return (
                            <Link className="bookPage__books__list__item" to={`/book/${id}`}>
                                {photo ?
                                    <img className='bookPage__bookImg__autohor' src={photo} alt="" />
                                    :
                                    <img src="https://tokyo-doctors.com/images_2016/noimage_tate.jpg" alt="" className="bookPage__bookImg__autohor" />
                                }
                                <p className="bookPage__books__list__item__text">{name}</p>
                            </Link>
                        )
                    })}



                </div>


            </div>
        }
    </>
    )
})

export default Author; 