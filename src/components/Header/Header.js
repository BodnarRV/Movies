import React, { useState } from 'react';
import './HeaderStyle.css'
import Search from '../Search_input/Search'
import CategoriesButton from '../CaegoriesButton/CategoriesButton'
import MenuList from '../MenuList/MenuList';
import MenuListItem from '../MenuList/MenuListItem/MenuListItem';
import Button from '../Button/Button';
import logo from '../../assets/logo.svg'
import Login from '../Login/Login';

function Hrader() {
    const [isLogin, setLogin] = useState(false)

    const handleButtonClick = () => {
        setLogin(!isLogin)
    }

    const handleCloseLogin = () => {
        setLogin(false);
    };

    return (
        <header>
            <div className="container">
                <a className='container__logo'>
                    <img className='logo' src={logo}></img>
                </a>
                <CategoriesButton />
                <MenuList />
                <Search />
                <MenuListItem name="EN" isParent />
                <Button title="SIGN IN" onClick={handleButtonClick} />
                {isLogin && <Login onClose={handleCloseLogin} />}
            </div>
        </header>
    )
}

export default Hrader