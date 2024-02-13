import "./CountryCard.css";
import React from "react";

const CountryCard = ({ data }) => {
  return (
    <div className="CountryCard">
      <div className="flag"></div>
      <div className="text-section">
        <h4>Sweden</h4>
        <p>Capital: Stockholm</p>
        <p>Population: 10K</p>
        <p>Language: Swedish</p>
      </div>
    </div>
  );
};

export default CountryCard;
