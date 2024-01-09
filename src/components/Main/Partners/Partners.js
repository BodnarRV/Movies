import React from "react";
import './Partners.css'

import Themeforest from './images/themeforest-light-background.png'
import Audiojungle from './images/audiojungle-light-background.png'
import Codecanyon from './images/codecanyon-light-background.png'
import Photodune from './images/photodune-light-background.png'
import Activeden from './images/activeden-light-background.png'
import Docean from './images/3docean-light-background.png'

function Partners() {
    const partnersArray = [
        {
            "image": Themeforest,
            "url": "/"
        },
        {
            "image": Audiojungle,
            "url": "/"
        },
        {
            "image": Codecanyon,
            "url": "/"
        },
        {
            "image": Photodune,
            "url": "/"
        },
        {
            "image": Activeden,
            "url": "/"
        },
        {
            "image": Docean,
            "url": "/"
        },
    ]

    return (
        <section className="partners">
            <div className="container">
                <h3 className="container__partners-title">Our Partners</h3>
                <p className="container__partners-text">
                    We strive for long-term cooperation with our partners, and our team is always ready to meet and consider new opportunities for mutual benefits. If you would like to become our partner, we are always open to new offers and look forward to hearing from you. <a className="container__partners-text-link" href="/">Become a partner</a>
                </p>
                <div className="container__partners-items">
                    {partnersArray.map((item, index) =>
                        <div className="container__partners-items-item">
                            <a className="container__partners-items-item-link" href={item.url}>
                                <img className="container__partners-items-item-image" src={item.image} alt=""></img>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Partners