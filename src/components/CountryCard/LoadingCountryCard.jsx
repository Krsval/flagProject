import React from "react";
import "./CountryCard.css";

const LoadingCountryCard = () => {
  return (
    <div className="CountryCard">
      <div className="flag" id="grey_img">
        <div id="loading_img"></div>
      </div>
      <div className="loading_text_section">
        <div className="loading" id="country_name"></div>
        <br />
        <div className="loading" id="capital"></div>
        <div className="loading" id="population"></div>
        <div className="loading" id="language"></div>
      </div>
    </div>
  );
};

export default LoadingCountryCard;
