import logo from './logo.svg';
import './App.css';

import {Route, Link, Routes}  from "react-router-dom";

import BookPage from './components/BookPage';
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
            <li className="menu__item"><Link to="/janres">Жанры</Link></li>
            <li className="menu__item"><Link to="/popular">Популярное</Link></li>
          </ul>
        </div>
      </header>

      <div className="container">

      <Routes>
          <Route path="/" element={<Books books={store.books} />} />
          <Route path="/books" element={<Books books={store.books} />} />
          <Route path="/books/:bookId" element={<BookPage books={store.books} />} />
          <Route path="/authors" element={<Authors  authors={store.authors} books={store.books} />} />
          <Route path="/authors/:authorId" element={<Author authors={store.authors} books={store.books} />} />
          <Route path="/janres" element={<Books  books={store.books} />} />
          <Route path="/popular" element={<Books popular books={store.books} />} />

        </Routes>

          
      </div>

    </div>
  );
}

export default App;
