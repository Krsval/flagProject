import React from "react";
import "./SingleRegion.css";
import CountryCard from "../components/CountryCard/CountryCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";
import { useLoaderData } from "react-router-dom"

const Home = () => {
  const countries = useLoaderData();

  return (
    <div className="home-page">
      <div className="search">
        <SearchBar />
        <Dropdown />
      </div>
      <div className="card-layout">
        {countries.map(country => (
          <CountryCard
            key={country.name.common}
            flag={country.flags.png}
            country={country.name.common}
            capital={country.capital}
            population={new Intl.NumberFormat("en-US").format(country.population)}
            languages={Object.values(country.languages).slice(0,1)}
            cca3={country.cca3}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;