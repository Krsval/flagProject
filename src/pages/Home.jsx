import React, { useState } from "react";
import "./Home.css";
import useCountries from "../util/useCountries.js";
import CountryCard from "../components/CountryCard/CountryCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterRegion, setFilterRegion] = useState("");


  // Filtreras i useCountries.js
  const handleSearch = (searchTerm) => {
    setSearchItem(searchTerm);
  };
  
  // Filtreras i useCountries.js
  const handleRegionFilter = (region) => {
    setFilterRegion(region);
  };

  const countries = useCountries();

  return (
    <div className="home-page">
      <div className="search">
        <SearchBar onSearch={handleSearch} />
        <Dropdown onSelectRegion={handleRegionFilter} />
      </div>
      <div className="card-layout">
        {countries.map((country) => (
          <CountryCard
            key={country.name.common}
            flag={country.flags.png}
            country={country.name.common}
            capital={country.capital}
            population={new Intl.NumberFormat("en-US").format(country.population)}
            languages={Object.values(country.languages).slice(0,1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
