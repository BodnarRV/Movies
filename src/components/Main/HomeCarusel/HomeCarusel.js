import React from "react";
import './HomeCarusel.css';
import HomeCaruselItem from "./HomeCaruselItem/HomeCaruselItem";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

import image1 from './CaruselImages/1.png';
import image2 from './CaruselImages/2.png';
import image3 from './CaruselImages/3.png';
import image4 from './CaruselImages/4.png';
import image5 from './CaruselImages/5.png';
import image6 from './CaruselImages/6.png';
import image7 from './CaruselImages/7.png';
import image8 from './CaruselImages/8.png';

function HomeCarusel() {
    const caruselItemsArray = [
        {
            "image": image1,
            "title": "Shattered Dreams",
            "category": "Drama",
            "rate": "5.5",
            "linkUrl": "#"
        },
        {
            "image": image2,
            "title": "Blindspotting",
            "category": "Comedy, Drama",
            "rate": "7.9",
            "linkUrl": "/"
        },
        {
            "image": image3,
            "title": "Tales from the Underworld",
            "category": "Action, Western",
            "rate": "8.6",
            "linkUrl": "#"
        },
        {
            "image": image4,
            "title": "Midnight Sun",
            "category": "Drama",
            "rate": "7.7",
            "linkUrl": "#"
        },
        {
            "image": image5,
            "title": "Wild Hearts",
            "category": "Comedy",
            "rate": "8.2",
            "linkUrl": "#"
        },
        {
            "image": image6,
            "title": "Echoes of the Past",
            "category": "Fantasy",
            "rate": "9.0",
            "linkUrl": "#"
        },
        {
            "image": image7,
            "title": "The Last Hope",
            "category": "Animals, Docymentary",
            "rate": "7.3",
            "linkUrl": "#"
        },
        {
            "image": image8,
            "title": "Beyond the Horizon",
            "category": "Drama",
            "rate": "7.1",
            "linkUrl": "#"
        },
    ]

    return (
        <Splide
            options={{
                type: 'loop',
                perPage: 5,
                direction: 'ltr',
                trimSpace: false,
                focus: 'center',
                arrows: false,
                pagination: false,
            }}
        >
            {caruselItemsArray?.map((item, index) => (
                <SplideSlide key={index}>
                    <HomeCaruselItem
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        rate={item.rate}
                        linkUrl={item.linkUrl}
                    />
                </SplideSlide>
            ))}
        </Splide>
    );
}

export default HomeCarusel