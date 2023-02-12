import React, { useState } from "react";

export default function AppBar() {
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className="appBarMainDiv"
      style={{
        display: "flex",
        backgroundColor: "#1946c3",
        width: "850px",
        height: "75px",
        justifyContent: "flex-end" 
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "20px",
          color: "white",
        }}
      >
        <h3 style={{ marginLeft: "10px" }}>Name</h3>
        <img
          src={"../images/logo.png"}
          style={{ marginLeft: "25px", marginRight: "25px", height: "55px" }}
          alt="Logo"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: "20px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
          }}
        >
          <div style={{ justifyContent: "flex-start" , display: "flex" }}>
            <p style={{ marginRight: "20px" }}>Home</p>
            <p style={{ marginRight: "20px" }}>Products</p>
            <p style={{ marginRight: "20px" }}>Pricing</p>
            <p style={{ marginRight: "20px" }}>Blog</p>
          </div>
          <div>
            <p style={{ marginRight: "20px" }}>
              <i className="fa fa-caret-down" />
            </p>
            <div onClick={toggleDropDown}>
            ☰ 

              {dropdownOpen && (
          <ul style={{ listStyle: "none" }}>
            <li><a href="#">Galerie</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">...</a></li>
          </ul>
        )}
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search..."
          style={{ justifyContent: "flex-end" , display: "flex", width: "200px", height: "35px", marginRight: "auto" }}
        />
      </div>
    </div>
  );
}
