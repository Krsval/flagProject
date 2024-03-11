import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
  const [value, setValue] = useState("");
  const handleValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Dropdown">
      <button>
        <div>{value == "" ? "All" : value}</div>
        <img src="../src\assets\arrow-down-light.svg" alt="" />
      </button>
      <div className="dropdown-content">
        <Link
          className="region-link"
          to={"/"}
          onClick={() => handleValue("All")}
        >
          All
        </Link>
        <Link
          className="region-link"
          to={"/?region=europe"}
          onClick={() => handleValue("Europe")}
        >
          Europe
        </Link>
        <Link
          className="region-link"
          to={"/?region=americas"}
          onClick={() => handleValue("Americas")}
        >
          Americas
        </Link>
        <Link
          className="region-link"
          to={"/?region=africa"}
          onClick={() => handleValue("Africa")}
        >
          Africa
        </Link>
        <Link
          className="region-link"
          to={"/?region=asia"}
          onClick={() => handleValue("Asia")}
        >
          Asia
        </Link>
        <Link
          className="region-link"
          to={"/?region=oceania"}
          onClick={() => handleValue("Oceania")}
        >
          Oceania
        </Link>
      </div>
      <span>Select Region</span>
    </div>
  );
};

export default Dropdown;
