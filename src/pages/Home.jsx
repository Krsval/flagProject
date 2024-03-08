import React from "react";
import "./Home.css";
import CountryCard from "../components/CountryCard/CountryCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const countries = useLoaderData();

  if (!countries) {
    return (
      <div className="country-page">
        <a className="go-back-button" href="/">
          <img src="../src/assets/arrow-left.svg" alt="back" />
          BACK
        </a>
        <div>Loading...</div>
      </div>
    );
  }

  console.log(countries);

  return (
    <div className="card-layout">
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          flag={country.flags.png}
          country={country.name.common}
          capital={country.capital}
          population={new Intl.NumberFormat("en-US").format(country.population)}
          language={country.languages ? Object.values(country.languages)[0] : "Unknown"}
          cca3={country.cca3}
        />
      ))}
    </div>
  );
};

export default Home;
