import React, { useState } from "react";
import './MenuListItem.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import MenuListDropDown from "../MenuListDropDown/MenuListDropDown";

function MenuListItem({ index, name, linkUrl, childrenItems = [], isOpened, onDropdownToggle }) {

    const handleClick = (e) => {
        if (childrenItems.length > 0) {
            onDropdownToggle(index);
            e.preventDefault();
        }
    };

    return (
        <li className={`header__nav-item ${isOpened ? 'dropdown__opened' : ''}`}>
            <a
                className={`header__link ${isOpened ? 'header__link-opened' : ''}`}
                href={linkUrl}
                onClick={handleClick}
            >
                {name}
            </a>
            {
                childrenItems.length > 0 && (
                    <>
                        <MdKeyboardArrowDown className="header__nav-item-icon" />
                        {isOpened && <MenuListDropDown dropdownItems={childrenItems} />}
                    </>
                )
            }
        </li >
    );
}

export default MenuListItem