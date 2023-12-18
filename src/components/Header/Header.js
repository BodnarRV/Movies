import React from 'react';
import './HeaderStyle.css'
import Search from '../Search_input/Search'
import CategoriesButton from '../CaegoriesButton/CategoriesButton'
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuList/MenuListItem/MenuListItem';
import SignInButton from '../SignInButton/SignInButton';
import logo from '../../assets/logo.svg'

function Hrader() {
    return (
        <header>
            <a className='container__logo'>
                <img className='logo' src={logo}></img>
            </a>
            <CategoriesButton />
            <MenuList />
            <Search />
            <MenuListItem name="EN" isParent />
            <SignInButton />
        </header>
    )
}

export default Hrader