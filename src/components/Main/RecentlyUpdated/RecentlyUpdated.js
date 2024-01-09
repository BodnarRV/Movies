import React from "react";
import './RecentlyUpdated.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Movies from "../RecentlyUpdated/Movies/Movies"
import Shows from "../RecentlyUpdated/Shows/Shows"
import Anime from "./Anime/Anime";
import NewItem from './NewItems/NewItem'
import Button from "../../Button/Button";

function RecentlyUpdated() {
    return (
        <section className="recently__updatet">
            <div className="container">
                <h2 className="recently__updatet-title">Recently Updated</h2>
                <Tabs>
                    <TabList>
                        <Tab>New items</Tab>
                        <Tab>movies</Tab>
                        <Tab>tv shows</Tab>
                        <Tab>anime</Tab>
                    </TabList>

                    <TabPanel>
                        <NewItem />
                        <Button title="TO CATALOG" classNames="tabs-button" />
                    </TabPanel>
                    <TabPanel>
                        <Movies />
                        <Button title="TO CATALOG" classNames="tabs-button" />
                    </TabPanel>
                    <TabPanel>
                        <Shows />
                        <Button title="TO CATALOG" classNames="tabs-button" />
                    </TabPanel>
                    <TabPanel>
                        <Anime />
                        <Button title="TO CATALOG" classNames="tabs-button" />
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    )
}

export default RecentlyUpdated