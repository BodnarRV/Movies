import React from 'react';
import './Search.css'

function Search() {
    return (
        <div className='search_contaiener'>
            <input className='header__input' type='text' placeholder='Search...'></input>
            <div className='search_icon'>&#128269;</div>
        </div>
    )
}

export default Search