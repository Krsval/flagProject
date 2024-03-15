import React, { useEffect, useState } from "react";
import "./LightMode.css";

const LightMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const applyDarkMode = () => {
      const body = document.querySelector("body");
      const logo = document.querySelector(".logo");
      const moonSun = document.querySelector(".moonSun");
      const leftArrow = document.querySelector(".arrow-left");
      const dropdownArrow = document.querySelector(".dropdown-arrow");
      const darkLightText = document.querySelector(".dark-lightMode-text");

      if (body) {
        if (darkMode) {
          body.setAttribute("data-theme", "dark");
        } else {
          body.setAttribute("data-theme", "light");
        }
      }

      if (logo) {
        logo.src = darkMode
          ? "/assets/techover-logo.png"
          : "/assets/techover-logo-dark.png";
      }
      if (moonSun) {
        moonSun.src = darkMode
          ? "/assets/moon.svg"
          : "/assets/moon-bordered.svg";
      }
      if (leftArrow) {
        leftArrow.src = darkMode
          ? "/assets/arrow-left.svg"
          : "/assets/arrow-left-dark.svg";
      }
      if (dropdownArrow) {
        dropdownArrow.src = darkMode
          ? "/assets/arrow-down-light.svg"
          : "/assets/arrow-down-dark.svg";
      }
      if (darkLightText) {
        darkLightText.textContent = darkMode ? "Light Mode" : "Dark Mode";
      }
    };
    applyDarkMode();
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className="dark-light-mode">
      <input
        type="checkbox"
        className="light_mode_input"
        onChange={toggleTheme}
      />
      <img
        className="moonSun"
        src={darkMode ? "/assets/moon.svg" : "/assets/sun.svg"}
        alt="Moon or Sun"
      />
      <p className="dark-lightMode-text">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </p>
    </label>
  );
};

export default LightMode;
