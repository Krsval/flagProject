import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./Dropdown.css";

const Dropdown = () => {
  


  return (
    <div className="Dropdown">
      <button>
        <img src="../src\assets\arrow-down-light.svg" alt="" />
      </button>
      <div className="dropdown-content">
        <Link className="region-link" to={'/'} value="">
          All
        </Link >
        <Link className="region-link" to={'/?region=europe'} value="Europe">
          Europe
        </Link >
        <Link className="region-link" to={'/?region=americas'} value="Americas">
          Americas
        </Link >
        <Link className="region-link" to={'/?region=africa'} value="Africa">
          Africa
        </Link >
        <Link className="region-link" to={'/?region=asia'} value="Asia">
          Asia
        </Link >
        <Link className="region-link" to={'/?region=oceania'} value="Oceania">
          Oceania
        </Link >
      </div>
      <span>Select Region</span>
    </div>
  );
};

export default Dropdown;
