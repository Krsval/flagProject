import React, { useState } from "react";
import "./Home.css";
import useCountries from "../util/useCountries.js";
import CountryCard from "../components/CountryCard/CountryCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Dropdown from "../components/Dropdown/Dropdown";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchItem(searchTerm);
  };

  const handleRegionFilter = (region) => {
    setFilterRegion(region);
    setSelectedRegion(region);
  };

  const filteredCountries = useCountries().filter((country) => {
    return country.name.common.toLowerCase().includes(searchItem.toLowerCase());
  }).filter((country) => {
    if (filterRegion === "") return true; // Om ingen region är vald, returnera alla länder
    return country.region.toLowerCase() === filterRegion.toLowerCase();
  });

  

  return (
    <div className="home-page">
      <div className="search">
        <SearchBar onSearch={handleSearch} />
        <Dropdown onSelectRegion={handleRegionFilter} selectedRegion={selectedRegion} />
      </div>
      <div className="card-layout">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            flag={country.flags.png}
            country={country.name.common}
            capital={country.capital}
            population={new Intl.NumberFormat("en-US").format(
              country.population
            )}
            languages={Object.values(country.languages).join(", ")}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
