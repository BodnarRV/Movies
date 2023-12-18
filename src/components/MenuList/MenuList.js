import React, { useState } from "react";
import MenuListItem from "./MenuListItem/MenuListItem";
import './MenuList.css'

function MenuList() {
    const [openedDropdown, setOpenedDropdown] = useState(null);

    const itemsArray = [
        {
            "linkLabel": "Home",
            "linkUrl": "/",
            "children": [
                {
                    "linkLabel": "Home Style 1",
                    "linkUrl": "/"
                },
                {
                    "linkLabel": "Home Style 1",
                    "linkUrl": "/"
                }
            ]
        },
        {
            "linkLabel": "Catalog",
            "linkUrl": "/catalog",
            "children": [
                {
                    "linkLabel": "Catalog Grid",
                    "linkUrl": "/"
                },
                {
                    "linkLabel": "Catalog List",
                    "linkUrl": "/"
                },
                {
                    "linkLabel": "Catalog Movie",
                    "linkUrl": "/"
                },
                {
                    "linkLabel": "Details TV Series",
                    "linkUrl": "/",
                }
            ]
        },
        {
            "linkLabel": "Pricing Plans",
            "linkUrl": "/"
        },
        {
            "linkLabel": "Pages",
            "linkUrl": "/",
            "children": [
                {
                    "linkLabel": "About us",
                    "linkUrl": "/",
                },
                {
                    "linkLabel": "Help center",
                    "linkUrl": "/",
                },
                {
                    "linkLabel": "Profile",
                    "linkUrl": "/",
                },
                {
                    "linkLabel": "Actor",
                    "linkUrl": "/",
                },
                {
                    "linkLabel": "Contacts",
                    "linkUrl": "/",
                },
                {
                    "linkLabel": "Privacy policy",
                    "linkUrl": "/",
                },
            ]
        }
    ]

    const handleDropdownToggle = (index) => {
        setOpenedDropdown(openedDropdown === index ? null : index);
    };

    return (
        <div>
            <ul className="header__nav">
                {itemsArray?.map((item, index) => {
                    return (
                        <MenuListItem
                            key={index}
                            index={index}
                            name={item.linkLabel}
                            linkUrl={item.linkUrl}
                            childrenItems={item.children ? item.children : []}
                            isOpened={openedDropdown === index}
                            onDropdownToggle={handleDropdownToggle}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default MenuList