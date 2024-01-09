import React from "react";
import './PlanTab.css'
import SignInButton from "../../../Button/Button";

function PlanTab({ title, price, buttonTitle, children = [] }) {
    return (
        <div className="container__tab">
            <div className="container__tab-plan">
                <h3 className="container__tab-plan-name">{title}</h3>
                <span className="container__tab-plan-price">{price}</span>
            </div>
            <ul className="container__tab-list">
                {children.map((child, index) => (
                    <li key={index} className="container__tab-list-item">{child}</li>
                ))}
            </ul>
            <SignInButton title={buttonTitle} classNames="plan-button" />
        </div>
    )
}

export default PlanTab