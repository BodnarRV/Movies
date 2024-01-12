import React from "react";
import './Checkbox.css'

function Checkbox({ title }) {
    return (
        <div className="container__checkbox">
            <input className="checkbox" type="checkbox"></input>
            <label>{title}</label>
        </div>
    )
}

export default Checkbox