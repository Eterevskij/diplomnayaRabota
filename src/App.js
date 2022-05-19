import logo from './logo.svg';
import './App.css';

import {Route, Link, Routes, useParams}  from "react-router-dom";

import BookPage from './components/BookPage';
import Books from './components/Books';
import Authors from './components/Authors';
import Author from './components/Author';



function App() {
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
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookPage />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:authorId" element={<Author />} />
          <Route path="/janres" element={<Books />} />
          <Route path="/popular" element={<Books />} />

        </Routes>

          
      </div>

    </div>
  );
}

export default App;
