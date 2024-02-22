import React from "react";
import useCountries from "../util/useCountries.js";
import "./CountryPage.css";

const CountryPage = (country) => {
  return (
    <div className="country-page">
      <a href="/" className="go-back-btn">
        Back
      </a>
      <div className="country-section">
        <div className="img-tag"></div>
        <div className="overall-country-info">
          <div className="country-info">
            <h1>Sweden</h1>
            <div>
              <section className="left-text-section">
                <p>Population:</p>
                <p>Region:</p>
                <p>Capital:</p>
                <p>Native name:</p>
              </section>
              <section className="right-text-section">
                <p>Top level domain:</p>
                <p>Currency:</p>
                <p>Laguage:</p>
              </section>
            </div>
          </div>
          <div className="border-countries">Border Countries:</div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
