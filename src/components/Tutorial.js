import React from "react";
import "../styles/Tutorial.css";

function Tutorial() {
  return (
    <div className="header">
      <div className="header__container">
        <p className="header__description">
          middle click and move down a little bit to scroll down slowly.
        </p>
        <div className="header__mouse"></div>
        <span></span>
        <div className="header__arrow"></div>
        <div className="header__arrow"></div>
      </div>
    </div>
  );
}

export default Tutorial;
