import logo from './logo.svg';
import './App.css';

import {Route, Link, Routes}  from "react-router-dom";

import BookPage from './components/BookPage';
import Genres from './components/Genres';
import Books from './components/Books';
import Authors from './components/Authors';
import Author from './components/Author';



function App(props) {

  const {store} = props;

  return (
    <div className="App">

      <header className='header'>
        <div className="container">
          <ul className="menu">
            <li className="menu__item"><Link to="/books">Книги</Link></li>
            <li className="menu__item"><Link to="/authors">Авторы</Link></li>
            {/* <li className="menu__item"><Link to="/genres">Жанры</Link></li> */}
            <li className="menu__item"><Link to="/popular">Популярное</Link></li>
          </ul>
        </div>
      </header>

      <div className="container">

      <Routes>
          <Route path="/" element={<Books books={store.books} />} />
          <Route path="/books" element={<Books books={store.books} />} />
          <Route path="/book/:bookId" element={<BookPage books={store.books} />} />
          <Route path="/genre/:geneId" element={<BookPage genre={store.genre} books={store.books} />} />
          <Route path="/authors" element={<Authors  authors={store.authors} books={store.books} />} />
          <Route path="/author/:authorId" element={<Author authors={store.authors} books={store.books} />} />
          <Route path="/genres" element={<Genres genres={store.genres} />} />
          <Route path="/popular" element={<Books popular books={store.books} />} />

        </Routes>

          
      </div>

    </div>
  );
}

export default App;
