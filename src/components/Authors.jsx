import React from 'react';

import { Link }  from "react-router-dom";


import author from '../img/Author.jpg';

const Authors = (props) => {

    const {authors} = props;

    debugger

    return (
        <div className="authorsList">

            {
                authors.map(author => {

                    const {id, name, photo, bookNum} = author;

                    return(
                        <Link to={`/author/${id}`} className="author__item">

                        <div className="author__item__left">
                            <img className='author__item__authorImg' src={photo} alt="" />
                        </div>
        
                        <div className="author__item__right">
        
                            <p className="author__item__name">{name}</p>
        
        
                            <p className="bookPage__bookInfo__bookCounter">{bookNum} книг в продаже</p>
                        </div>
                    </Link>
                    )

                })
            }


        </div>
    )
}

export default Authors; 