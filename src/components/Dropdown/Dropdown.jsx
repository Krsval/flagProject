import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./Dropdown.css";

const Dropdown = ({ selectedRegion }) => {

  return (
    <div className="Dropdown">
      <button>
        {selectedRegion || "All"}
        <img src="src\assets\arrow-down-light.svg" alt="" />
      </button>
      <div className="dropdown-content">
        <Link to={'/'} value="">
          All
        </Link>
        <Link to={'/europe'} value="Europe">
          Europe
        </Link>
        <Link to={'/americas'} value="Americas">
          Americas
        </Link>
        <Link to={'/africa'} value="Africa">
          Africa
        </Link>
        <Link to={'/asia'} value="Asia">
          Asia
        </Link>
        <Link to={'/oceania'} value="Oceania">
          Oceania
        </Link>
      </div>
      <span>Select Region</span>
    </div>
  );
};

export default Dropdown;
