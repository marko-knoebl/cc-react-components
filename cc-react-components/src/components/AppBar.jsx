import React, { useState } from "react";
import "./AppBar.css";
export default function AppBar({ appName, menuItems, dropdownMenuItems }) {
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="appBarMainDiv">
        <div className="container">
          <h3 className="AppBar__name">{appName}</h3>
          <img src={"../images/logo.png"} className="AppBar__logo" alt="Logo" />
        </div>
        <div className="innerLayerForMenu">
          <div>
            <div className="menuItems">
              {menuItems.map((menuItem) => (
                <p key={menuItem.id} className="menuItem">
                  <a href={menuItem.url}>{menuItem.name}</a>
                </p>
              ))}
            </div>
          </div>
          <input className="AppBar__search" type="text" placeholder="search..." />
        </div>
        <div>
          <p>
            <i />
          </p>
          <nav>
          <div className="fa-caret-down" onClick={toggleDropDown}>
            ☰
              <div className={`popUpList-${dropdownOpen}`}>
                <ul className="dropDownUl">
                  {dropdownMenuItems.map((menuItem) => (
                    <li key={menuItem.id} className="menuItem">
                      <a className="AppBar__link" href={menuItem.url}>{menuItem.name}</a>
                    </li>
                  ))}
                </ul>
              </div>  
          </div>
          </nav>
        </div>
      </div>
    </>
  );
}
