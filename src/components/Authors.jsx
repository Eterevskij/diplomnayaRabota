import React, {useEffect} from 'react';
import authorsState from '../store/AuthorsState';
import { observer } from 'mobx-react-lite';
import Preloader from '../Preloader.gif';
import { Link }  from "react-router-dom";


import author from '../img/Author.jpg';

const Authors = observer((props) => {

    const {authors} = props;

    debugger
    useEffect(() => {
        authorsState.loadAuthorsInfo()
    }, []);

    return (
        <div className="authorsList">

        {authorsState.isFetching ?
            <img className='preloader' src={Preloader} alt="" />
            :


                authorsState.authors.map(author => {

                    const {id, name, photo, book_list} = author;

                    return(
                        <Link to={`/author/${id}`} className="author__item">

                        <div className="author__item__left">
                            <img className='author__item__authorImg' src={photo} alt="" />
                        </div>
        
                        <div className="author__item__right">
        
                            <p className="author__item__name">{name}</p>
        
        
                            <p className="bookPage__bookInfo__bookCounter">{book_list.length} книг в продаже</p>
                        </div>
                    </Link>
                    )

                })
            }


        </div>
    )
})

export default Authors; 