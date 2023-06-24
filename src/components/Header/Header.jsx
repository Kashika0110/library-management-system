import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Search from Millions of books</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to our online library webapp! Our platform is designed to bring the joy of reading right to your fingertips. With an extensive collection of books from various genres, our library has something for everyone.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header