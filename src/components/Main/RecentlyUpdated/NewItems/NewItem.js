import React from "react";
import './NewItem.css';
import { FaRegStar } from "react-icons/fa";

import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'
import image6 from './images/6.png'

function NewItem() {
    const newItemsArray = [
        {
            "image": image1,
            "title": "Yhe Lost City",
            "category": "Action",
            "rate": "8.5",
            "quality": "HD",
            "age": "16+",
            "description": "When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world. With the help of a charming rogue...",
            "linkUrl": "#"
        },
        {
            "image": image2,
            "title": "Yhe Lost City",
            "category": "Action",
            "rate": "8.5",
            "quality": "HD",
            "age": "16+",
            "description": "When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world. With the help of a charming rogue...",
            "linkUrl": "#"
        },
        {
            "image": image3,
            "title": "Yhe Lost City",
            "category": "Action",
            "rate": "8.5",
            "quality": "HD",
            "age": "16+",
            "description": "When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world. With the help of a charming rogue...",
            "linkUrl": "#"
        },
        {
            "image": image4,
            "title": "Yhe Lost City",
            "category": "Action",
            "rate": "8.5",
            "quality": "HD",
            "age": "16+",
            "description": "When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world. With the help of a charming rogue...",
            "linkUrl": "#"
        },
        {
            "image": image5,
            "title": "Yhe Lost City",
            "category": "Action",
            "rate": "8.5",
            "quality": "HD",
            "age": "16+",
            "description": "When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world. With the help of a charming rogue...",
            "linkUrl": "#"
        },
        {
            "image": image6,
            "title": "Yhe Lost City",
            "category": "Action",
            "rate": "8.5",
            "quality": "HD",
            "age": "16+",
            "description": "When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city and a dangerous conspiracy that threatens the very balance of power in the world. With the help of a charming rogue...",
            "linkUrl": "#"
        },
    ]

    return (
        <div className="container__newItem">
            {newItemsArray?.map((item, index) => (
                <div className="container__newItem-content">
                    <a href={item.linkUrl} className="container__newItem-content-item">
                        <img src={item.image} alt=" " className="container__newItem-content-item-img" />
                        <span className="container__newItem-content-item-play">
                            {/* need PLAY svg */}
                        </span>
                    </a>
                    <div className="container__newItem-content-description">
                        <h3 className="container__newItem-content-title">
                            <a href="#">{item.title}</a>
                        </h3>
                        <span className="container__newItem-content-category">
                            <a href="#">{item.category}</a>
                        </span>
                        <div className="container__newItem-content-rate">
                            <FaRegStar />
                            <span className="container__newItem-content-rate-point">{item.rate}</span>
                            <ul className="container__newItem-content-rate-list">
                                <li className="container__newItem-content-rate-list-item">{item.quality}</li>
                                <li className="container__newItem-content-rate-list-item">{item.age}</li>
                            </ul>
                        </div>
                        <div className="container__newItem-content-description-container">
                            <p className="container__newItem-content-description-text">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewItem

