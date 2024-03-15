import "./CountryPage.css";
import React, { useState, useEffect } from "react";
import SingleCountry from "../components/singleCountry/singleCountry.jsx";
import LoadingSingleCountry from "../components/singleCountry/LoadingSingleCountry.jsx";
import { useLoaderData, Link } from "react-router-dom";

const CountryPage = () => {
  const [loading, setLoading] = useState(true);
  const { country } = useLoaderData();

  //Fördröjning för att visa Loading State
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  if (loading) {
    return (
      <div className="country-page">
        <Link className="go-back-button" to="/">
          <img className="arrow-left" src="/assets/arrow-left.svg" alt="back" />
          BACK
        </Link>
        <div className="country-info">
          <LoadingSingleCountry />
        </div>
      </div>
    );
  }

  return (
    <div className="country-page">
      <Link className="go-back-button" to="/">
        <img className="arrow-left" src="/assets/arrow-left.svg" alt="back" />
        BACK
      </Link>
      <div className="country-info">
        {country.map((countryData) => (
          <SingleCountry
            key={countryData.name.common}
            flag={countryData.flags.svg}
            alt={countryData.flag.alt}
            country={countryData.name.common}
            nativeName={
              countryData.name.nativeName
                ? countryData.name.nativeName
                : "------"
            }
            capital={countryData.capital ? countryData.capital : "------"}
            population={new Intl.NumberFormat("en-US").format(
              countryData.population
            )}
            borderCountries={
              countryData.borders
                ? countryData.borders.map((border) => border)
                : []
            }
            languages={
              countryData.languages
                ? Object.values(countryData.languages)[0]
                : "------"
            }
            region={countryData.region}
            domain={countryData.tld}
            currency={countryData.currencies}
            cca3={countryData.cca3}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
