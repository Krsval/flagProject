import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ onSelectRegion, selectedRegion }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSelectRegion = (e) => {
    const region = e.target.value;
    setInputValue(region);
    onSelectRegion(region);
  };

  return (
    <div className="Dropdown">
      <button>
        {selectedRegion || "All"}
        <img src="src\assets\arrow-down-light.svg" alt="" />
      </button>
      <div className="dropdown-content">
        <button onClick={handleSelectRegion} value="">
          All
        </button>
        <button onClick={handleSelectRegion} value="Europe">
          Europe
        </button>
        <button onClick={handleSelectRegion} value="Americas">
          Americas
        </button>
        <button onClick={handleSelectRegion} value="Africa">
          Africa
        </button>
        <button onClick={handleSelectRegion} value="Asia">
          Asia
        </button>
        <button onClick={handleSelectRegion} value="Oceania">
          Oceania
        </button>
      </div>
      <span>Select Region</span>
    </div>
  );
};

export default Dropdown;
