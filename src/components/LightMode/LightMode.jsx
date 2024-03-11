import React, { useEffect } from 'react';
import './LightMode.css';

const LightMode = () => {
  useEffect(() => {
    const setDarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
      const logo = document.querySelector('.logo');
      const moonSun = document.querySelector('.moonSun');
      const leftArrow = document.querySelector('.arrow-left')
      if (logo) {
        logo.src = '/src/assets/techover-logo.png';
      }
      if (moonSun) {
        moonSun.src = '/src/assets/moon.svg';
      }
      if (leftArrow) {
        leftArrow.src = '/src/assets/arrow-left.svg';
      }
    };
    setDarkMode();
  }, []);

  const toggleTheme = (e) => {
    const logo = document.querySelector('.logo');
    const moonSun = document.querySelector('.moonSun');
    const leftArrow = document.querySelector('.arrow-left')
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "dark");
      if (logo) {
        logo.src = '/src/assets/techover-logo.png';
      }
      if (moonSun) {
        moonSun.src = '/src/assets/moon.svg';
      }
      if (leftArrow) {
        leftArrow.src = '/src/assets/arrow-left.svg';
      }
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
      if (logo) {
        logo.src = '/src/assets/techover-logo-dark.png';
      }
      if (moonSun) {
        moonSun.src = '/src/assets/moon-bordered.svg';
      }
      if (leftArrow) {
        leftArrow.src = '/src/assets/arrow-left-dark.svg';
      }
    }
  };

  return (
    <label className="dark-light-mode">
      <input type="checkbox" className='light_mode_input' onChange={toggleTheme} />
      <img className="moonSun" src='../src/assets/moon.svg' alt="Moon" />
      <p>Dark Mode</p>
    </label>
  );
};

export default LightMode;
