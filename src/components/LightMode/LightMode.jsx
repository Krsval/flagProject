import React, { useEffect } from 'react';
import './LightMode.css';

const LightMode = () => {
  useEffect(() => {
    const setDarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
      const logo = document.querySelector('.logo');
      const moonSun = document.querySelector('.moonSun');
      const leftArrow = document.querySelector('.arrow-left')
      const dropdownArrow = document.querySelector('.dropdown-arrow')
      if (logo) {
        logo.src = '/assets/techover-logo.png';
      }
      if (moonSun) {
        moonSun.src = '/assets/moon.svg';
      }
      if (leftArrow) {
        leftArrow.src = '/assets/arrow-left.svg';
      }
      if (dropdownArrow) {
        dropdownArrow.src = '/assets/arrow-down-light.svg';
      }
    };
    setDarkMode();
  }, []);

  const toggleTheme = (e) => {
    const logo = document.querySelector('.logo');
    const moonSun = document.querySelector('.moonSun');
    const leftArrow = document.querySelector('.arrow-left')
    const dropdownArrow = document.querySelector('.dropdown-arrow')
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "dark");
      if (logo) {
        logo.src = '/assets/techover-logo.png';
      }
      if (moonSun) {
        moonSun.src = '/assets/moon.svg';
      }
      if (leftArrow) {
        leftArrow.src = '/assets/arrow-left.svg';
      }
      if (dropdownArrow) {
        dropdownArrow.src = '/assets/arrow-down-light.svg';
      }

    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
      if (logo) {
        logo.src = '/assets/techover-logo-dark.png';
      }
      if (moonSun) {
        moonSun.src = '/assets/moon-bordered.svg';
      }
      if (leftArrow) {
        leftArrow.src = '/assets/arrow-left-dark.svg';
      }
      if (dropdownArrow) {
        dropdownArrow.src = '/assets/arrow-down-dark.svg';
      }
    }
  };

  return (
    <label className="dark-light-mode">
      <input type="checkbox" className='light_mode_input' onChange={toggleTheme} />
      <img className="moonSun" src='/assets/moon.svg' alt="Moon" />
      <p>Dark Mode</p>
    </label>
  );
};

export default LightMode;
