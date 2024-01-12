import React from "react";
import './Button.css'

function Button({ title, classNames, onClick }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <button className={`header__signIn ${classNames ? classNames : ''}`} onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button