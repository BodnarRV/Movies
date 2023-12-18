import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import './MenuListDropDown.css'

function MenuListDropDown({ dropdownItems }) {
    return (
        <ul className="dropdown">
            {Object.values(dropdownItems)?.map((item) => {
                return (
                    <MenuListItem
                        name={item.linkLabel}
                        linkUrl={item.linkUrl}
                        childrenItems={item.children ? item.children : []}
                    />
                )
            })}
        </ul>
    )
}

export default MenuListDropDown