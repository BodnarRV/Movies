import React from "react";
import './MainStyles.css'
import HomeCarusel from '../Main/HomeCarusel/HomeCarusel'

function Main() {
    return (
        <div className="container">
            <h1 className="home__title"><span className="home__title-bolt">NEW ITEMS</span> OF THIS SEASON</h1>
            <HomeCarusel />
        </div>
    )
}

export default Main