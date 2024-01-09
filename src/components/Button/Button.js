import React from "react";
import './Button.css'

function Button({ title, classNames }) {
    return (
        <button className={`header__signIn ${classNames ? classNames : ''}`}>
            {title}
        </button>
    )
}

export default Button