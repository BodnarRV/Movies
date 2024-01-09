import React from "react";
import './MainStyles.css'
import HomeCarusel from '../Main/HomeCarusel/HomeCarusel'
import RecentlyUpdated from "./RecentlyUpdated/RecentlyUpdated";
import NowWatching from "./NowWatching/NowWatching";
import Plan from "./Plan/Plan";
import Partners from "./Partners/Partners";

function Main() {
    return (
        <>
            <HomeCarusel />
            <RecentlyUpdated />
            <NowWatching />
            <Plan />
            <Partners />
        </>
    )
}

export default Main