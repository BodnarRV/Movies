import React from "react";
import './HomeCaruselItem.css'
import { FaRegStar } from "react-icons/fa";


function HomeCaruselItem({ image, title, category, rate, linkUrl }) {
    console.log(image)
    return (
        <div className="container">
            <a href={linkUrl} className="container__item">
                <img src={image} alt=" " className="container__item-image"></img>
                <span className="container__item-play">
                    {/* need PLAY svg */}
                </span>
            </a>
            <div className="container__content">
                <h3 className="container__content-title">
                    <a href="#">{title}</a>
                </h3>
                <span className="container__content-category">
                    <a href="#">{category}</a>
                </span>
                <div className="container__content-rate">
                    <FaRegStar />
                    <span className="container__content-rate-point">{rate}</span>
                </div>
            </div>
        </div>
    )
}

export default HomeCaruselItem