import React from "react";
import './Shows.css'
import HomeCaruselItem from "../../HomeCarusel/HomeCaruselItem/HomeCaruselItem";

import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'
import image6 from './images/6.png'
import image7 from './images/7.png'
import image8 from './images/8.png'
import image9 from './images/9.png'
import image10 from './images/10.png'
import image11 from './images/11.png'
import image12 from './images/12.png'

function Shows() {
    const showsArray = [
        {
            "image": image12,
            "title": "Yhe Lost City",
            "category": "Action",
            "rate": "8.5",
            "linkUrl": "#"
        },
        {
            "image": image11,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image10,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image9,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image8,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image7,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image6,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image5,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image4,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image3,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image2,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image1,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
    ]

    return (
        <div className="containerM">
            {showsArray?.map((item, index) => (
                <HomeCaruselItem className="item"
                    image={item.image}
                    title={item.title}
                    category={item.category}
                    rate={item.rate}
                    linkUrl={item.linkUrl}
                />
            ))
            }
        </div>
    )
}

export default Shows