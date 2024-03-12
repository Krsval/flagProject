import React, { useEffect, useRef } from 'react';
import './LightMode.css';

const LightMode = () => {
  const isDarkMode = useRef(false);
  const logoRef = useRef(null);
  const moonSunRef = useRef(null);
  const leftArrowRef = useRef(null);
  const lightModeTextRef = useRef(null);

  useEffect(() => {
    setTheme('dark');
    updateElements();
  }, []);

  const setTheme = (theme) => {
    document.querySelector("body").setAttribute("data-theme", theme);
    isDarkMode.current = theme === 'dark';
  };

  const updateElements = () => {
    const images = {
      logo: isDarkMode.current ? '/src/assets/techover-logo.png' : '/src/assets/techover-logo-dark.png',
      moonSun: isDarkMode.current ? '/src/assets/moon.svg' : '/src/assets/moon-bordered.svg',
      leftArrow: isDarkMode.current ? '/src/assets/arrow-left.svg' : '/src/assets/arrow-left-dark.svg',
    };

    if (logoRef.current) logoRef.current.src = images.logo;
    if (moonSunRef.current) moonSunRef.current.src = images.moonSun;
    if (leftArrowRef.current) leftArrowRef.current.src = images.leftArrow;

    if (lightModeTextRef.current) lightModeTextRef.current.textContent = isDarkMode.current ? 'Light Mode' : 'Dark Mode';
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode.current ? 'light' : 'dark';
    setTheme(newTheme);
    updateElements();
  };

  return (
    <label className="dark-light-mode">
      <input type="checkbox" className='light_mode_input' onChange={toggleTheme} />
      <img ref={moonSunRef} className="moonSun" src='../src/assets/moon.svg' alt="Moon" />
      <div ref={lightModeTextRef} className='Light_Dark_Mode'>Light Mode</div>
    </label>
  );
};

export default LightMode;
